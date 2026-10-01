"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center py-20">
      <div className="site-container text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-red-50 text-red-600">
          <AlertCircle size={40} />
        </div>
        <h1 className="mt-8 text-4xl font-extrabold text-navy">Une erreur est survenue</h1>
        <p className="mt-4 text-lg text-slate-500">
          Nous rencontrons un problème technique inattendu. Veuillez nous excuser pour la gêne
          occasionnée.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <RotateCcw size={18} /> Réessayer
          </button>
          <Link href="/" className="btn border border-slate-300 text-navy hover:bg-slate-50">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
