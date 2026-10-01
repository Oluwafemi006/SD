import Link from "next/link";
import { ArrowRight, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center py-20">
      <div className="site-container text-center">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-blue-50 text-brand">
          <FileQuestion size={40} />
        </div>
        <h1 className="mt-8 text-4xl font-extrabold text-navy">Page introuvable</h1>
        <p className="mt-4 text-lg text-slate-500">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="mt-10 flex justify-center">
          <Link href="/" className="btn btn-primary inline-flex items-center gap-2">
            Retourner à l&apos;accueil <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
