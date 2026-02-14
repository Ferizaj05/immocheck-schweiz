import { Hero } from "@/components/sections/hero";

const highlights = [
  "Swiss-focused seller intake flow",
  "Fast qualification for valuation-ready owners",
  "Admin reporting for acquisition teams"
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-white/10 bg-card p-6 text-sm text-muted shadow-glow"
            >
              {item}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
