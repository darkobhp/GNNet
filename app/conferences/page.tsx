import Link from "next/link";
import { ConferenceCard } from "@/components/ConferenceCard";
import { Reveal } from "@/components/Reveal";
import { conferenceEvents } from "@/data/site";

export default function ConferencesPage() {
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
              Conferences
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              All Conferences
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              Explore the full conference history and open any meeting to view
              its gallery and abstract list.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {conferenceEvents.map((conference, index) => (
            <Reveal
              key={`${conference.name}-${conference.year}-${conference.location}`}
              delay={(index % 6) * 80}
            >
              <ConferenceCard conference={conference} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
