"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TextScribbleType = "scribble" | "underline" | "strike-through";
export type TextScribbleTrigger = "view" | "hover" | "mount";

export interface TextScribbleProps {
  /** The inline content to annotate. */
  children: React.ReactNode;
  /** Annotation style. Default: `"scribble"`. */
  type?: TextScribbleType;
  /** Stroke color. Defaults to the Wensity brand (chili). */
  color?: string;
  /** Stroke width in CSS pixels. Default: 2. */
  strokeWidth?: number;
  /** Seconds for the draw-on. Default: 0.9. */
  duration?: number;
  /** Seconds to wait before drawing. Default: 0. */
  delay?: number;
  /** When to draw. Default: `"view"`. */
  trigger?: TextScribbleTrigger;
  /**
   * Sketch passes for the hand-drawn look. More = scratchier. Clamped 1–4.
   * Default: 2 for `scribble`, 1 otherwise.
   */
  iterations?: number;
  /** Extra px around the text before the mark is drawn. Default: 2. */
  padding?: number;
  /**
   * Force the draw state. `true` keeps it drawn, `false` retracted; when
   * omitted the `trigger` drives it. Reduced-motion always draws instantly.
   */
  drawn?: boolean;
  /** Outer element tag. Default: `"span"`. */
  as?: keyof React.JSX.IntrinsicElements;
  /** Tailwind class for the host (size / weight / color of the text). */
  className?: string;
  /** Optional accessible name override for the host. */
  "aria-label"?: string;
}

type Mark = { d: string; delay: number };

/** Wensity brand (chili). Falls back to the literal for copied-out source. */
const DEFAULT_COLOR = "var(--color-chili-500, #cd1c18)";

/** Tiny deterministic PRNG so passes look sketchy but stay stable per size. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A near-horizontal line with light vertical jitter — a felt-tip stroke. */
function jitterLine(x1: number, x2: number, y: number, amp: number, rng: () => number) {
  const span = x2 - x1;
  const steps = Math.max(2, Math.round(span / 34));
  let d = `M ${x1.toFixed(1)} ${(y + (rng() - 0.5) * amp).toFixed(1)}`;
  for (let i = 1; i <= steps; i++) {
    const x = x1 + (span * i) / steps;
    const yy = y + (rng() - 0.5) * amp;
    d += ` L ${x.toFixed(1)} ${yy.toFixed(1)}`;
  }
  return d;
}

/** A denser back-and-forth squiggle for the scribble underline. */
function scribblePath(x1: number, x2: number, y: number, amp: number, rng: () => number) {
  const span = x2 - x1;
  const steps = Math.max(6, Math.round(span / 12));
  let d = `M ${x1.toFixed(1)} ${y.toFixed(1)}`;
  for (let i = 1; i <= steps; i++) {
    const x = x1 + (span * i) / steps;
    const dir = i % 2 === 0 ? -1 : 1;
    const yy = y + dir * amp * (0.6 + rng() * 0.4);
    const cx = x - span / steps / 2 + (rng() - 0.5) * 4;
    const cy = y + dir * -amp * (0.4 + rng() * 0.5);
    d += ` Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x.toFixed(1)} ${yy.toFixed(1)}`;
  }
  return d;
}

function marksEqual(a: Mark[], b: Mark[]) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i].d !== b[i].d || a[i].delay !== b[i].delay) return false;
  }
  return true;
}

/**
 * TextScribble
 *
 * Hand-drawn line annotations for React text — scribble, underline, or
 * strike-through — that draw themselves on. Tracks wrapping lines and re-fits
 * on resize / font load.
 *
 * Motion contract:
 * - Measures the live text via Range client rects (ResizeObserver, no polling).
 * - Marks paint client-side only (no SSR path → no hydration diff).
 * - Each stroke reveals via a single `stroke-dashoffset` transition
 *   (pathLength normalised to 100).
 * - `trigger="view"` draws once on-screen; `"hover"` draws and retracts.
 * - Honours `prefers-reduced-motion` by drawing instantly, no transition.
 */
export function TextScribble({
  children,
  type = "scribble",
  color,
  strokeWidth = 2,
  duration = 0.9,
  delay = 0,
  trigger = "view",
  iterations,
  padding = 2,
  drawn,
  as = "span",
  className,
  "aria-label": ariaLabel,
}: TextScribbleProps) {
  const hostRef = React.useRef<HTMLElement | null>(null);
  const textRef = React.useRef<HTMLSpanElement | null>(null);

  const [size, setSize] = React.useState({ w: 0, h: 0 });
  const [marks, setMarks] = React.useState<Mark[]>([]);
  const [active, setActive] = React.useState(trigger === "mount");
  const [reduceMotion, setReduceMotion] = React.useState(false);

  const stroke = color ?? DEFAULT_COLOR;
  const passes = Math.max(1, Math.min(4, iterations ?? (type === "scribble" ? 2 : 1)));

  // --- Measure text geometry into annotation paths -------------------------
  const measure = React.useCallback(() => {
    const host = hostRef.current;
    const text = textRef.current;
    if (!host || !text || !text.firstChild) return;

    const hostBox = host.getBoundingClientRect();
    if (hostBox.width < 1) return;

    const range = document.createRange();
    range.selectNodeContents(text);
    const lineRects = Array.from(range.getClientRects()).filter((r) => r.width > 1);
    if (lineRects.length === 0) return;

    const next: Mark[] = [];
    const stagger = lineRects.length > 1 ? duration * 0.3 : duration * 0.12;

    lineRects.forEach((r, lineIdx) => {
      const x = r.left - hostBox.left;
      const y = r.top - hostBox.top;
      const baseY = type === "strike-through" ? y + r.height * 0.55 : y + r.height - strokeWidth;

      for (let p = 0; p < passes; p++) {
        const rng = mulberry32(7919 + lineIdx * 131 + p * 53 + Math.round(r.width));
        const d =
          type === "scribble"
            ? scribblePath(x - padding, x + r.width + padding, baseY, Math.min(r.height * 0.16, 5) + strokeWidth, rng)
            : jitterLine(x - padding, x + r.width + padding, baseY, 1.6, rng);
        next.push({ d, delay: delay + (lineIdx * passes + p) * (stagger / passes) });
      }
    });

    setSize((prev) =>
      prev.w === hostBox.width && prev.h === hostBox.height
        ? prev
        : { w: hostBox.width, h: hostBox.height },
    );
    setMarks((prev) => (marksEqual(prev, next) ? prev : next));
  }, [type, strokeWidth, passes, padding, delay, duration]);

  React.useLayoutEffect(() => {
    let cancelled = false;
    const run = () => {
      if (!cancelled) measure();
    };

    run();
    const host = hostRef.current;
    if (!host) return;

    const ro = new ResizeObserver(run);
    ro.observe(host);

    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    fonts?.ready?.then(run).catch(() => {});

    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, [measure, children]);

  // --- Reduced motion ------------------------------------------------------
  React.useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // --- Trigger -------------------------------------------------------------
  React.useEffect(() => {
    if (drawn !== undefined) {
      setActive(drawn);
      return;
    }
    if (trigger === "mount") {
      setActive(true);
      return;
    }
    if (trigger === "view") {
      const host = hostRef.current;
      if (!host) return;
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            setActive(true);
            io.disconnect();
          }
        },
        { threshold: 0.35 },
      );
      io.observe(host);
      return () => io.disconnect();
    }
  }, [trigger, drawn]);

  const isHover = trigger === "hover" && drawn === undefined;
  const hoverProps = isHover
    ? {
        tabIndex: 0 as const,
        onPointerEnter: () => setActive(true),
        onPointerLeave: () => setActive(false),
        onFocus: () => setActive(true),
        onBlur: () => setActive(false),
      }
    : {};

  const Tag = as as unknown as React.ComponentType<
    React.HTMLAttributes<HTMLElement> & { ref?: React.RefCallback<HTMLElement | null> }
  >;

  const show = active || reduceMotion;
  const ease = "cubic-bezier(.65,0,.35,1)";

  return (
    <Tag
      ref={(node) => {
        hostRef.current = node;
      }}
      aria-label={ariaLabel}
      className={cn("relative inline-block", className)}
      {...hoverProps}
    >
      <span ref={textRef} className="relative z-[1]">
        {children}
      </span>
      {size.w > 0 && marks.length > 0 ? (
        <svg
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-[1] overflow-visible"
        >
          {marks.map((m, i) => (
            <path
              key={i}
              d={m.d}
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={100}
              style={{
                strokeDasharray: 100,
                strokeDashoffset: show ? 0 : 100,
                transition: reduceMotion
                  ? "none"
                  : `stroke-dashoffset ${duration}s ${ease} ${m.delay}s`,
              }}
            />
          ))}
        </svg>
      ) : null}
    </Tag>
  );
}
