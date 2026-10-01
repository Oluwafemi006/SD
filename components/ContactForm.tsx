"use client";

import Link from "next/link";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  organization: z.string().optional(),
  phone: z.string().min(8, "Le numéro de téléphone est invalide"),
  email: z.string().email("L'adresse e-mail est invalide"),
  service: z.string().min(1, "Veuillez sélectionner un domaine"),
  subject: z.string().min(3, "L'objet de la demande est requis"),
  message: z.string().min(15, "Le message doit contenir au moins 15 caractères"),
  website: z.string().optional(), // Honeypot
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    // Si le champ honeypot est rempli, on feint le succès sans rien envoyer
    if (data.website) {
      reset();
      toast.success("Votre demande a bien été transmise.");
      return;
    }

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, value);
      }
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        reset();
        toast.success("Votre demande a bien été transmise.");
      } else {
        toast.error("L’envoi n’a pas abouti. Veuillez réessayer.");
      }
    } catch {
      toast.error("Erreur réseau. Vous pouvez nous contacter par téléphone ou e-mail.");
    }
  }

  const fieldBase =
    "min-h-12 w-full rounded-lg border bg-white px-4 text-navy outline-none transition-colors";
  const fieldNormal = `${fieldBase} border-slate-300 focus:border-brand`;
  const fieldError = `${fieldBase} border-red-500 focus:border-red-600`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5 rounded-lg bg-white p-6 text-ink shadow-soft sm:grid-cols-2 sm:p-8"
      noValidate
    >
      <div>
        <label className="mb-2 block text-sm font-bold" htmlFor="name">
          Nom complet *
        </label>
        <input
          className={errors.name ? fieldError : fieldNormal}
          id="name"
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1 text-xs font-semibold text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold" htmlFor="organization">
          Entreprise / Organisation
        </label>
        <input
          className={errors.organization ? fieldError : fieldNormal}
          id="organization"
          {...register("organization")}
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold" htmlFor="phone">
          Téléphone *
        </label>
        <input
          className={errors.phone ? fieldError : fieldNormal}
          id="phone"
          type="tel"
          {...register("phone")}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="mt-1 text-xs font-semibold text-red-600">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <label className="mb-2 block text-sm font-bold" htmlFor="email">
          E-mail *
        </label>
        <input
          className={errors.email ? fieldError : fieldNormal}
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-xs font-semibold text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-bold" htmlFor="service">
          Domaine concerné *
        </label>
        <select
          className={errors.service ? fieldError : fieldNormal}
          id="service"
          {...register("service")}
          defaultValue=""
          aria-invalid={!!errors.service}
        >
          <option value="" disabled>
            Sélectionner un domaine
          </option>
          <option>BTP, Aménagement & Génie Civil</option>
          <option>Énergie & Réseaux électriques HT/MT/BT</option>
          <option>Énergie solaire</option>
          <option>Études APD & Environnement</option>
          <option>Import-Export & Logistique</option>
          <option>Fournitures & équipements</option>
          <option>Lubrifiants industriels & marins</option>
          <option>Autre demande</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-xs font-semibold text-red-600">{errors.service.message}</p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-bold" htmlFor="subject">
          Objet *
        </label>
        <input
          className={errors.subject ? fieldError : fieldNormal}
          id="subject"
          {...register("subject")}
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <p className="mt-1 text-xs font-semibold text-red-600">{errors.subject.message}</p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-bold" htmlFor="message">
          Message *
        </label>
        <textarea
          className={`${errors.message ? fieldError : fieldNormal} min-h-36 py-3`}
          id="message"
          {...register("message")}
          placeholder="Décrivez votre besoin, le lieu et les délais envisagés."
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1 text-xs font-semibold text-red-600">{errors.message.message}</p>
        )}
      </div>
      {/* Honeypot field for anti-spam */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Site web</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>
      <div className="sm:col-span-2">
        <p className="mb-4 text-xs leading-5 text-muted">
          Les informations transmises servent uniquement à traiter votre demande. Consultez notre{" "}
          <Link className="font-bold text-brand hover:underline" href="/politique-confidentialite">
            politique de confidentialité
          </Link>
          .
        </p>
        <button
          disabled={isSubmitting}
          className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-75 sm:w-auto"
          type="submit"
        >
          <Send size={18} />
          {isSubmitting ? "Envoi en cours…" : "Envoyer la demande"}
        </button>
      </div>
    </form>
  );
}
