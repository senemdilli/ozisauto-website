import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Ozis Auto",
  description:
    "Discover Ozis Auto solutions for fleet orchestration, predictive maintenance, and intelligent dispatch.",
};

const solutionGroups = [
  {
    name: "Operations intelligence",
    summary:
      "Command fleet performance with real-time dashboards, automated alerts, and insights tailored to your KPIs.",
    points: [
      "Unified command center for vehicle status, routes, and compliance",
      "Driver performance analytics with automated coaching workflows",
      "Scenario planning to stress-test capacity before peak demand",
    ],
  },
  {
    name: "Maintenance automation",
    summary:
      "Predictive triggers keep vehicles on the road while reducing spend and unscheduled shop visits.",
    points: [
      "Sensor-driven diagnostics integrated with your preferred shops",
      "Parts forecasting that adjusts with seasonal demand",
      "Automated work orders routed to the right technician in seconds",
    ],
  },
  {
    name: "Connected mobility",
    summary:
      "Bridge every system across your fleet, field teams, and partners with secure data flows.",
    points: [
      "APIs and prebuilt connectors for telematics, ERP, and safety platforms",
      "Edge-ready IoT gateways stream data even with limited coverage",
      "Role-based mobile experiences for drivers, supervisors, and leadership",
    ],
  },
];

const implementationSteps = [
  {
    title: "Discover",
    description:
      "Map fleet objectives, critical integrations, and regulatory requirements to define the deployment plan.",
  },
  {
    title: "Configure",
    description:
      "Tailor dashboards, automations, and data policies to your organization without custom code.",
  },
  {
    title: "Launch",
    description:
      "Roll out in agile increments with hands-on training, success metrics, and on-site support.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pt-24">
        <div className="grid gap-10 rounded-[32px] bg-white p-6 shadow-[0_32px_80px_rgba(15,23,42,0.08)] sm:gap-12 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-16">
          <div className="flex flex-col justify-center gap-6">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Solutions
            </span>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Purpose-built playbooks for resilient fleet operations.
            </h1>
            <p className="max-w-3xl text-base text-slate-600">
              Ozis Auto unifies vehicles, people, and infrastructure into one adaptive system. Each solution blends proven methodology with technology designed for demanding service delivery.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Request a consultation
              </Link>
              <Link
                href="/"
                className="rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-700 hover:text-slate-700"
              >
                View platform overview
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(120deg,#0f172a,#0f172a_9%,#1e293b_9%,#1e293b_18%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            <div className="relative flex h-full flex-col justify-end gap-6 p-6 text-white sm:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/70">Why it matters</p>
                <p className="mt-3 text-lg font-semibold">One operating model across every fleet function.</p>
              </div>
              <p className="text-sm text-white/80">
                Strategy, execution, and data live in one rhythm, giving your teams clarity and confidence at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="flex flex-col gap-4 pb-10">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Solution pillars
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Built to orchestrate operations from command center to road.
          </h2>
          <p className="max-w-3xl text-base text-slate-600">
            Choose the modules you need today, then expand with integrations and automations as your fleet evolves.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutionGroups.map((solution) => (
            <article
              key={solution.name}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-900"
            >
              <h2 className="text-xl font-semibold text-slate-900">{solution.name}</h2>
              <p className="text-sm text-slate-600">{solution.summary}</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {solution.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-16">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Implementation
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">A guided path from pilot to scale.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {implementationSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
