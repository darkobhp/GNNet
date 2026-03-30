"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type ConferenceGalleryProps = {
  images: GalleryImage[];
};

export function ConferenceGallery({ images }: ConferenceGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group surface surface-interactive overflow-hidden text-left ${
              index === 0 ? "sm:col-span-2" : ""
            }`}
            aria-label={`Expand image ${index + 1}`}
          >
            <div className="relative aspect-[16/10] bg-slate-100">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="media-lift object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded conference image"
          onClick={() => setActiveIndex(null)}
        >
          <div className="mx-auto flex h-full max-w-6xl flex-col justify-center">
            <div className="mb-4 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
              >
                Close
              </button>
            </div>

            <div
              className="relative overflow-hidden rounded-3xl bg-slate-900"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[16/10] max-h-[80vh] min-h-[320px]">
                <Image
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-slate-200">
              {images[activeIndex].alt}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
