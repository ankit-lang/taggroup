"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const mediaList = [
  { type: 'video', src: '/assets/gurgaonoff/gur6.mp4', span: 'col-span-2 row-span-2' },
  { type: 'image', src: '/assets/gurgaonoff/gur1.jpg', span: 'col-span-2 row-span-1' },
  { type: 'image', src: '/assets/gurgaonoff/gur2.jpg', span: 'col-span-1 row-span-1' },
  { type: 'image', src: '/assets/gurgaonoff/gur3.jpg', span: 'col-span-1 row-span-1 md:row-span-2' },
  { type: 'image', src: '/assets/gurgaonoff/gur4.jpg', span: 'col-span-1 md:col-span-2 row-span-1' },
  { type: 'image', src: '/assets/gurgaonoff/gur5.jpg', span: 'col-span-1 row-span-1' },
];

export function GurgaonOfficeGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="section overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Our Workspace</span>
          <h2>Inside TAG Gurgaon</h2>
          <p className="lead">
            Experience our dynamic work environment designed for collaboration, innovation, and growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {mediaList.map((media, i) => (
            <motion.div
              layoutId={`media-${i}`}
              key={i}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${media.span}`}
              onClick={() => setSelectedId(i)}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
              {media.type === 'video' ? (
                <video
                  src={media.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={media.src}
                  alt="Gurgaon Office"
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`media-${selectedId}`}
              className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              {mediaList[selectedId].type === 'video' ? (
                <video
                  src={mediaList[selectedId].src}
                  className="w-full h-full object-contain"
                  autoPlay
                  controls
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={mediaList[selectedId].src}
                  alt="Gurgaon Office"
                  className="w-full h-full object-contain"
                />
              )}
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors z-50"
                onClick={() => setSelectedId(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
