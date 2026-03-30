import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { publications } from "@/data/site";

export default function PublicationsPage() {
  return (
    <section className="section-space">
      <div className="shell space-y-10">
        <Reveal className="space-y-4">
          <Link
            href="/#work"
            className="inline-flex items-center text-sm font-medium text-navy-700 hover:text-navy-900"
          >
            <span aria-hidden="true" className="mr-2">
              ←
            </span>
            Back to Our Work
          </Link>

          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-navy-700">
              Publications
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              All Publications
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              Browse the full publication list and open each paper directly from
              its citation card.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {publications.map((publication, index) => (
            <Reveal key={publication.title} delay={(index % 6) * 70}>
              <article className="surface surface-interactive grid gap-4 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-navy-100 bg-navy-50 text-sm font-semibold text-navy-800">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                      {publication.year}
                    </span>
                    <span className="text-sm font-medium text-slate-600">
                      {publication.journal}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold leading-snug text-slate-900">
                    {publication.title}
                  </h2>
                  <p className="text-sm leading-7 text-slate-700">
                    {publication.authors}
                  </p>
                  {publication.citation ? (
                    <p className="text-sm leading-7 muted-copy">
                      {publication.citation}
                    </p>
                  ) : null}
                </div>

                <div className="lg:justify-self-end">
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:border-slate-400 hover:bg-slate-50"
                  >
                    View publication
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
