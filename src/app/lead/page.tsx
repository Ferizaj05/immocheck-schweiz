"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Status = "idle" | "loading" | "success" | "error";

export default function LeadPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus("error");
      setMessage("Something went wrong. Please review your details and try again.");
      return;
    }

    setStatus("success");
    setMessage("Lead successfully submitted. Our team will review it shortly.");
    event.currentTarget.reset();
  }

  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-semibold sm:text-3xl">Submit Seller Lead</h1>
        <p className="mt-3 text-sm text-muted">
          Share property owner details so our Swiss acquisition specialists can follow up.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-card p-6">
          <Input name="name" placeholder="Owner full name" required />
          <Input name="email" type="email" placeholder="Email address" required />
          <Input name="phone" placeholder="Phone number" required />
          <Input name="city" placeholder="Property city (e.g. Zürich)" required />
          <Input name="estimatedValue" placeholder="Estimated property value (CHF)" required />
          <Button type="submit" disabled={status === "loading"} className="w-full">
            {status === "loading" ? "Submitting..." : "Submit lead"}
          </Button>
          {message ? (
            <p className={`text-sm ${status === "error" ? "text-red-400" : "text-accent"}`}>{message}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
