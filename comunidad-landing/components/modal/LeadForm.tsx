"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

interface LeadFormProps {
  onSubmit: (data: { name: string; email: string; marketingConsent: boolean }) => void;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LeadForm({ onSubmit }: LeadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const nextErrors: { name?: string; email?: string } = {};
    if (!name.trim()) nextErrors.name = "Escribe tu nombre.";
    if (!email.trim()) nextErrors.email = "Escribe tu correo.";
    else if (!EMAIL_REGEX.test(email.trim())) nextErrors.email = "Ingresa un correo válido.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onSubmit({ name: name.trim(), email: email.trim(), marketingConsent: consent });
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-ink">¿Dónde enviamos tu acceso?</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-dim">
        Déjanos tus datos y en el siguiente paso personalizaremos tu experiencia.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-7 flex flex-col gap-4">
        <div>
          <label htmlFor="lead-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-dim">
            Nombre
          </label>
          <input
            id="lead-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-border bg-black/40 px-4 py-3.5 text-ink placeholder:text-ink-dim/60 outline-none transition-colors focus:border-accent"
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="lead-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-dim">
            Email
          </label>
          <input
            id="lead-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="w-full rounded-xl border border-border bg-black/40 px-4 py-3.5 text-ink placeholder:text-ink-dim/60 outline-none transition-colors focus:border-accent"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
        </div>

        <label className="mt-1 flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-ink-dim">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 flex-shrink-0 accent-accent"
          />
          Acepto recibir recursos y comunicaciones relacionadas con la comunidad.
        </label>

        <Button type="submit" className="mt-3 w-full">
          Continuar →
        </Button>
      </form>
    </div>
  );
}
