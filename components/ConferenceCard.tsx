import Image from "next/image";
import Link from "next/link";
import type { ConferenceEvent } from "@/data/site";

type ConferenceCardProps = {
  conference: ConferenceEvent;
};

export function ConferenceCard({ conference }: ConferenceCardProps) {
  const previewPresentations = conference.presentations.slice(0, 2);

  return (
    <article className="group surface surface-interactive overflow-hidden">
      <div className="relative aspect-[16/9] border-b border-slate-200 bg-slate-100">
        <Image
          src={conference.image}
          alt={`Conference photo or location card for ${conference.name} in ${conference.location}`}
          fill
          className="media-lift object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full border border-navy-100 bg-navy-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800">
              {conference.year}
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {conference.location}
            </span>
          </div>

          <h3 className="text-2xl font-semibold leading-snug text-slate-900">
            {conference.name}
          </h3>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 motion-safe:transition-colors motion-safe:duration-500 group-hover:border-slate-300 group-hover:bg-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Presentation Preview
          </p>
          <ul className="mt-3 space-y-3">
            {previewPresentations.map((presentation) => (
              <li key={presentation.title} className="text-sm leading-7 text-slate-700">
                {presentation.title}
              </li>
            ))}
          </ul>
          {conference.presentations.length > previewPresentations.length ? (
            <p className="mt-3 text-sm text-slate-500">
              +{conference.presentations.length - previewPresentations.length} more
              presentation
              {conference.presentations.length - previewPresentations.length === 1
                ? ""
                : "s"}
            </p>
          ) : null}
        </div>

        <Link
          href={`/conferences/${conference.slug}`}
          className="inline-flex items-center text-sm font-medium text-navy-700 hover:text-navy-900"
        >
          Open conference page
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
