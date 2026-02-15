export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto w-full max-w-6xl px-4 text-xs text-muted sm:px-6">
        © {new Date().getFullYear()} ImmoCheck Schweiz. All rights reserved.
      </div>
    </footer>
  );
}
