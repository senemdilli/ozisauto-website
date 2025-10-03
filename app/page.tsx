import Link from "next/link";

const highlights = [
  {
    title: "Fleet insight dashboards",
    description:
      "Live vehicle health, utilization, and compliance metrics that adapt to every shift.",
  },
  {
    title: "Predictive maintenance",
    description:
      "Machine learning models flag issues before they take vehicles off the road.",
  },
  {
    title: "Connected operations",
    description:
      "IoT integrations sync every asset, driver, and route into one command center.",
  },
];

const stats = [
  { label: "Faster dispatch", value: "28%" },
  { label: "Downtime reduced", value: "42%" },
  { label: "Fleet coverage", value: "24/7" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pt-24">
        <div className="grid gap-10 rounded-[32px] bg-white p-6 shadow-[0_32px_80px_rgba(15,23,42,0.08)] sm:gap-12 sm:p-10 lg:grid-cols-[1.06fr_0.94fr] lg:p-16">
          <div className="flex flex-col justify-center gap-6">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Intelligent fleet automation
            </span>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Modern automotive solutions engineered for mission-critical fleets.
            </h1>
            <p className="max-w-xl text-base text-slate-600">
              Ozis Auto combines connected hardware, predictive analytics, and adaptive workflows so vehicles stay on the road and crews stay in sync.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Explore solutions
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-700 hover:text-slate-700"
              >
                Talk to us
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(120deg,#0f172a,#0f172a_9%,#1e293b_9%,#1e293b_18%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            <div className="relative flex h-full flex-col justify-between gap-6 p-6 text-white sm:gap-8 sm:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/70">Outcomes we deliver</p>
                <p className="mt-3 text-base text-white/80">
                  Teams that measure performance in minutes, not months.
                </p>
              </div>
              <dl className="grid gap-4 min-[480px]:grid-cols-2 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center">
                    <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-white/70">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="flex flex-col gap-4 pb-10">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Platform capabilities
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Designed to orchestrate every vehicle and driver.
          </h2>
          <p className="max-w-3xl text-base text-slate-600">
            Deploy a platform that scales with your operation. Ozis Auto brings data, automations, and field execution together to reveal efficiencies across the fleet lifecycle.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
              <Link
                href="/solutions"
                className="mt-auto text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 hover:text-slate-600"
              >
                View details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
