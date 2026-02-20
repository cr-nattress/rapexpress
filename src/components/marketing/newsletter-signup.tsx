"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("You're subscribed! Check your email to confirm.");
        setEmail("");
      } else {
        const data = await response.json();
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div className="rounded-xl bg-navy-900 p-8 text-center md:p-12">
      <h3 className="text-xl font-bold text-white md:text-2xl">
        Stay Updated with Rap Express
      </h3>
      <p className="mx-auto mt-2 max-w-md text-gray-300">
        Get delivery tips, service updates, and industry insights delivered to your inbox monthly.
      </p>

      {status === "success" ? (
        <div className="mt-6 rounded-lg bg-green-900/30 p-4">
          <p className="font-semibold text-green-400">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md gap-3">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="you@company.com"
            className="flex-1 rounded-lg border border-navy-700 bg-navy-800 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "..." : "Subscribe"}
          </Button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-400" role="alert">
          {message}
        </p>
      )}

      <p className="mt-4 text-xs text-gray-500">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}
