import type { Publication } from "@/data/site";

type PublicationCardProps = {
  publication: Publication;
};

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <article className="group surface surface-interactive flex h-full flex-col p-6 sm:p-7">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex rounded-full border border-navy-100 bg-navy-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800">
            {publication.year}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Publication
          </span>
        </div>

        <h3 className="text-2xl font-semibold leading-snug text-slate-900">
          {publication.title}
        </h3>

        <p className="text-sm leading-7 text-slate-700">{publication.authors}</p>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 motion-safe:transition-colors motion-safe:duration-500 group-hover:border-slate-300 group-hover:bg-white">
          <p className="text-sm font-medium text-slate-900">
            {publication.journal}
          </p>
          {publication.citation ? (
            <p className="mt-2 text-sm leading-7 muted-copy">
              {publication.citation}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 pt-2">
        <a
          href={publication.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-sm font-medium text-navy-700 hover:text-navy-900"
        >
          View publication
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </article>
  );
}
