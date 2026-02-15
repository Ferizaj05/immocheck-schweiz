import Link from "next/link";

export function Hero() {
  return (
    <section className="px-4 pb-12 pt-16 sm:px-6 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent">
          Built for Swiss real estate professionals
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
          Generate and manage property seller leads with confidence.
        </h1>
        <p className="mt-5 max-w-2xl text-sm text-muted sm:text-base">
          ImmoCheck Schweiz helps agencies capture serious sellers, qualify inquiries, and route opportunities to the right team members from one modern dashboard.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/lead"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-slate-900"
          >
            Start Lead Submission
          </Link>
          <Link
            href="/admin"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white"
          >
            Open Admin Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
