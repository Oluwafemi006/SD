"use client";
import Image from "next/image";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ImageLightbox({ src, alt, className = "", sizes = "100vw", priority = false }: { src: string; alt: string; className?: string; sizes?: string; priority?: boolean }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.classList.add("modal-open");
    const key = (event: KeyboardEvent) => event.key === "Escape" && close();
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("keydown", key);
      document.body.classList.remove("modal-open");
    };
  }, [open, close]);

  const modal = open ? createPortal(
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label={`Aperçu : ${alt}`} onClick={event => event.target === event.currentTarget && close()}>
      <div className="pointer-events-none relative h-[82vh] w-full max-w-6xl">
        <Image src={src} alt={alt} fill sizes="(min-width: 1184px) 1152px, calc(100vw - 32px)" className="pointer-events-auto object-contain" />
        <button autoFocus onClick={close} className="pointer-events-auto absolute right-0 top-0 z-10 grid size-11 place-items-center rounded-full bg-white text-navy" aria-label="Fermer l’aperçu"><X /></button>
        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-2 text-center text-sm text-white">{alt}</p>
      </div>
    </div>,
    document.body,
  ) : null;

  return <><button ref={triggerRef} type="button" className={`image-button ${className}`} onClick={() => setOpen(true)} aria-label={`Agrandir l’image : ${alt}`}><Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" /></button>{modal}</>;
}
