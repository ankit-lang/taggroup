import Script from 'next/script';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TAG Advisors LLP",
  description: "Comprehensive Tax & Management Advisory, High-End Virtual CFO Services, and Robust Assurance Solutions.",
};

import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <script dangerouslySetInnerHTML={{ __html: `
          document.addEventListener('error', function(e) {
            if (e.target && e.target.tagName && e.target.tagName.toLowerCase() === 'img') {
              e.target.style.display = 'none';
            }
          }, true);
        `}} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
        <Toaster position="bottom-right" />
      </body>
    </html>

  );
}
