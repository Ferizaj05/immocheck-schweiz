const mockLeads = [
  {
    name: "Nina Müller",
    city: "Zürich",
    value: "CHF 1,450,000",
    status: "Qualified"
  },
  {
    name: "Marc Steiner",
    city: "Basel",
    value: "CHF 920,000",
    status: "Follow-up"
  },
  {
    name: "Sophie Dubois",
    city: "Genève",
    value: "CHF 2,100,000",
    status: "New"
  }
];

export default function AdminPage() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-2xl font-semibold sm:text-3xl">Admin Dashboard</h1>
        <div className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-card p-5">
            <p className="text-xs uppercase text-muted">New leads</p>
            <p className="mt-2 text-2xl font-semibold">27</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-card p-5">
            <p className="text-xs uppercase text-muted">Qualified rate</p>
            <p className="mt-2 text-2xl font-semibold">61%</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-card p-5">
            <p className="text-xs uppercase text-muted">Avg property value</p>
            <p className="mt-2 text-2xl font-semibold">CHF 1.49M</p>
          </article>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-card">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-white/10 text-muted">
              <tr>
                <th className="px-4 py-3">Seller</th>
                <th className="px-4 py-3">City</th>
                <th className="px-4 py-3">Estimated Value</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockLeads.map((lead) => (
                <tr key={lead.name} className="border-b border-white/5 last:border-b-0">
                  <td className="px-4 py-3">{lead.name}</td>
                  <td className="px-4 py-3 text-muted">{lead.city}</td>
                  <td className="px-4 py-3">{lead.value}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-xs text-accent">
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
