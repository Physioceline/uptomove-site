"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xjgnazjw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        aria-label="Inscription newsletter"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Votre email"
          className="flex-1 px-5 py-3.5 rounded-full border border-navy-100 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent bg-white"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-orange text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-orange-dark transition-colors whitespace-nowrap disabled:opacity-60"
        >
          {status === "loading" ? "Envoi…" : "Confirmer"}
        </button>
      </form>
      <p className="text-sm mt-3 min-h-[20px]" aria-live="polite">
        {status === "success" && (
          <span className="text-teal-dark">Merci ! Votre inscription est bien prise en compte.</span>
        )}
        {status === "error" && (
          <span className="text-red-600">Une erreur est survenue, merci de réessayer.</span>
        )}
      </p>
    </div>
  );
}
