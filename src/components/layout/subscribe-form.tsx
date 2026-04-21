"use client";

import { useState } from "react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="border-t border-ink-100 bg-white px-6 py-12">
      <div className="mx-auto max-w-xl text-center">
        <h3 className="font-serif text-lg font-semibold text-ink-900">
          Get Updates
        </h3>
        <p className="mt-2 text-sm text-ink-500">
          This thesis is updated as new data is released. Leave your email to be
          notified.
        </p>

        {status === "success" ? (
          <p className="mt-6 text-sm font-medium text-ink-600">
            Thank you. You will be notified when the thesis is updated.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-sm border border-ink-200 px-4 py-2.5 text-sm text-ink-800 placeholder:text-ink-300 focus:border-ink-400 focus:outline-none focus:ring-1 focus:ring-ink-400"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-sm bg-ink-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-800 disabled:opacity-50"
            >
              {status === "loading" ? "..." : "Notify Me"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-sm text-ink-400">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
