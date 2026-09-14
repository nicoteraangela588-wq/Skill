"use client";

import { FormEvent, useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";

export function FinalCta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">(
    "idle",
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");
    window.setTimeout(() => setStatus("done"), 600);
  }

  return (
    <section className="border-t border-line bg-alpine-white">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-graphite md:text-4xl">
          Soyez averti à l&apos;ouverture de la saison
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate">
          Un email avant l&apos;ouverture des pistes, sans spam le reste de
          l&apos;année.
        </p>

        {status === "done" ? (
          <div className="mt-8 inline-flex items-center gap-2 rounded-control border border-forest/30 bg-forest-100 px-5 py-3 text-sm font-medium text-forest">
            <CheckCircle size={18} weight="fill" />
            Merci, vous êtes inscrit.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <div className="flex-1 text-left">
              <label htmlFor="newsletter-email" className="sr-only">
                Adresse email
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="vous@example.com"
                className="w-full rounded-control border border-line bg-alpine-paper px-4 py-3 text-sm text-graphite outline-none placeholder:text-slate-400 focus:border-ice focus:ring-2 focus:ring-ice/20"
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="whitespace-nowrap rounded-control bg-ice px-6 py-3 text-sm font-medium text-alpine-white transition-colors hover:bg-ice-600 disabled:opacity-60"
            >
              {status === "submitting" ? "Envoi..." : "S'inscrire"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
