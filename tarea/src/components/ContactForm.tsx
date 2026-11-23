'use client';

import { useState } from 'react';
import { personalInfo } from '@/lib/data';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const subject = String(data.get('subject') ?? '');
    const message = String(data.get('message') ?? '');

    const body = `${message}\n\n${name} (${email})`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    'w-full rounded-md border-2 border-ink/10 bg-cream px-4 py-3 text-ink placeholder:text-ink/50 transition focus:border-mint-dark focus:bg-white focus:outline-none focus:ring-4 focus:ring-mint/25';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
            Nombre
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
            Correo
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="tu@correo.com" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-ink">
          Asunto
        </label>
        <input id="subject" name="subject" required className={field} placeholder="¿En qué te puedo ayudar?" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
          Mensaje
        </label>
        <textarea id="message" name="message" required rows={5} className={field} placeholder="Cuéntame sobre tu proyecto" />
      </div>
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3 font-semibold text-ink transition hover:bg-mint sm:w-auto"
      >
        Enviar mensaje
        <span className="">✈</span>
      </button>
      {sent && (
        <p role="status" className="text-sm font-semibold text-mint-dark">
          ¡Listo! Se abrió tu correo con el mensaje para enviar.
        </p>
      )}
    </form>
  );
}
