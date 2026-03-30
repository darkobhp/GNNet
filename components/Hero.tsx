import { ParallaxPanel } from "@/components/ParallaxPanel";
import { Reveal } from "@/components/Reveal";
import { conferenceEvents, publications, registries } from "@/data/site";

type HeroProps = {
  heading: string;
  heroText: string;
  bodyCopy: string;
};

export function Hero({ heading, heroText, bodyCopy }: HeroProps) {
  const totalConferencePresentations = conferenceEvents.reduce(
    (total, conference) => total + conference.presentations.length,
    0
  );

  const highlights = [
    { label: "Selected Publications", value: `${publications.length}+` },
    { label: "Active Registries", value: `${registries.length}` },
    {
      label: "Conference Presentations",
      value: `${totalConferencePresentations}+`
    }
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <Reveal direction="left" className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-navy-700">
          GNNet Research
        </p>
        <div className="space-y-5">
          <h1
            id="about-heading"
            className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl"
          >
            {heading}
          </h1>
          <p className="max-w-4xl text-2xl leading-tight text-slate-800 sm:text-3xl lg:text-4xl">
            {heroText}
          </p>
          <p className="max-w-3xl text-lg leading-8 muted-copy">{bodyCopy}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full bg-navy-800 px-6 py-3 text-sm font-medium text-white hover:bg-navy-900"
          >
            Explore Our Work
          </a>
          <a
            href="#connect"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 hover:border-slate-400 hover:bg-slate-50"
          >
            Connect With Us
          </a>
        </div>
      </Reveal>

      <Reveal delay={120} direction="right">
        <ParallaxPanel className="soft-float lg:pr-2">
          <aside className="surface relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_right,_rgba(64,108,152,0.16),_transparent_60%)]"
            />
            <div className="relative border-b border-slate-200/80 bg-slate-50/80 px-6 py-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Research Snapshot
              </p>
            </div>
            <div className="relative space-y-6 p-6">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-[0_14px_32px_-28px_rgba(15,23,42,0.35)]"
                  >
                    <p className="text-3xl font-semibold text-navy-800">
                      {highlight.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {highlight.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </ParallaxPanel>
      </Reveal>
    </div>
  );
}
