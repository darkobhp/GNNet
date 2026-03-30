import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ConferenceGallery } from "@/components/ConferenceGallery";
import { Reveal } from "@/components/Reveal";
import { conferenceEvents, getConferenceBySlug } from "@/data/site";

type ConferenceDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return conferenceEvents.map((conference) => ({
    slug: conference.slug
  }));
}

export function generateMetadata({
  params
}: ConferenceDetailPageProps): Metadata {
  const conference = getConferenceBySlug(params.slug);

  if (!conference) {
    return {
      title: "Conference Not Found | GNNet Research"
    };
  }

  return {
    title: `${conference.name} | GNNet Research`,
    description: `${conference.location} conference gallery and abstracts presented by GNNet Research.`
  };
}

export default function ConferenceDetailPage({
  params
}: ConferenceDetailPageProps) {
  const conference = getConferenceBySlug(params.slug);

  if (!conference) {
    notFound();
  }

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

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full border border-navy-100 bg-navy-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy-800">
                {conference.year}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                {conference.location}
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              {conference.name}
            </h1>
          </div>
        </Reveal>

        <Reveal>
          <div className="surface overflow-hidden">
          <div className="relative aspect-[16/8] border-b border-slate-200 bg-slate-100">
            <Image
              src={conference.image}
              alt={`Location image for ${conference.location}`}
              fill
              className="object-cover motion-safe:transition-transform motion-safe:duration-[1400ms] motion-safe:ease-out motion-safe:hover:scale-[1.02]"
              priority
              sizes="100vw"
            />
          </div>
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Conference
              </p>
              <p className="mt-2 text-lg font-medium text-slate-900">
                {conference.name}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Location
              </p>
              <p className="mt-2 text-lg font-medium text-slate-900">
                {conference.location}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Abstracts Presented
              </p>
              <p className="mt-2 text-lg font-medium text-slate-900">
                {conference.presentations.length}
              </p>
            </div>
          </div>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-slate-950">
                Conference Gallery
              </h2>
            </div>

            {conference.galleryImages.length ? (
              <ConferenceGallery images={conference.galleryImages} />
            ) : (
              <div className="surface p-6">
                <p className="text-sm leading-7 muted-copy">
                  Conference photos for this meeting have not been added yet.
                </p>
              </div>
            )}
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-slate-950">
                Abstracts Presented
              </h2>
              <p className="leading-8 muted-copy">
                Full abstract titles and author lists for this conference.
              </p>
            </div>

            <div className="space-y-4">
              {conference.presentations.map((presentation, index) => (
                <Reveal
                  key={presentation.title}
                  delay={(index % 8) * 60}
                >
                  <article className="surface surface-interactive p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Abstract {index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-900">
                      {presentation.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 muted-copy">
                      {presentation.authors}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
