"use client";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ImageLightbox({ src, alt, className = "", sizes = "100vw", priority = false }: { src: string; alt: string; className?: string; sizes?: string; priority?: boolean }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.classList.toggle("modal-open", open); const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false); document.addEventListener("keydown", key); return () => { document.removeEventListener("keydown", key); document.body.classList.remove("modal-open"); }; }, [open]);
  return <><button type="button" className={`image-button ${className}`} onClick={() => setOpen(true)} aria-label={`Agrandir l’image : ${alt}`}><Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" /></button>{open && <div className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label={`Aperçu : ${alt}`} onMouseDown={e => e.target === e.currentTarget && setOpen(false)}><div className="relative h-[82vh] w-full max-w-6xl"><Image src={src} alt={alt} fill sizes="100vw" className="object-contain" /><button autoFocus onClick={() => setOpen(false)} className="absolute right-0 top-0 z-10 grid size-11 place-items-center rounded-full bg-white text-navy" aria-label="Fermer l’aperçu"><X /></button><p className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-2 text-center text-sm text-white">{alt}</p></div></div>}</>;
}
