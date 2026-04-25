import { ConferenceCard } from "@/components/ConferenceCard";
import { ConnectForm } from "@/components/ConnectForm";
import { Hero } from "@/components/Hero";
import { InfoCard } from "@/components/InfoCard";
import { LeadershipMobileCard } from "@/components/LeadershipMobileCard";
import { PublicationCard } from "@/components/PublicationCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/TeamCard";
import Link from "next/link";
import {
  aboutContent,
  conferenceAwards,
  conferenceEvents,
  conferencePreviewCount,
  contactDetails,
  publicationPreviewCount,
  publications,
  teamGroups
} from "@/data/site";

export default function HomePage() {
  const featuredPublications = publications.slice(0, publicationPreviewCount);
  const featuredConferences = conferenceEvents.slice(0, conferencePreviewCount);

  return (
    <>
      <section
        id="about"
        aria-labelledby="about-heading"
        className="section-space border-b border-slate-200/70"
      >
        <div className="shell space-y-10">
          <Hero
            heading={aboutContent.heading}
            heroText={aboutContent.heroText}
            bodyCopy={aboutContent.bodyCopy}
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal delay={80}>
              <InfoCard
                title={aboutContent.mission.title}
                description={aboutContent.mission.copy}
              />
            </Reveal>

            <Reveal delay={180}>
              <InfoCard
                title={aboutContent.impact.title}
                description={aboutContent.impact.copy}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="work"
        aria-labelledby="work-heading"
        className="section-space border-b border-slate-200/70"
      >
        <div className="shell space-y-14">
          <Reveal>
            <SectionHeading
              id="work-heading"
              eyebrow="Work"
              title="Our Work"
              description="Research outputs, ongoing registries, and academic engagement."
            />
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <SectionHeading
                title="Publications"
                description="Browse selected papers and scholarly work produced by the GNNet Research group. The preview below highlights three recent publications, with the full record available on demand."
              />
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-3">
              {featuredPublications.map((publication, index) => (
                <Reveal key={publication.title} delay={index * 90}>
                  <PublicationCard publication={publication} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <Link
                href="/publications"
                className="surface surface-interactive flex items-center justify-between gap-4 px-6 py-5 text-sm font-medium text-navy-700 hover:text-navy-900 sm:px-7"
              >
                <span>View all publications</span>
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal>
              <SectionHeading
                title="Conferences Attended"
                description="See the meetings and conferences where our group has presented research, shared findings, and built collaborations."
              />
            </Reveal>
            <div className="grid gap-4 lg:grid-cols-2">
              {conferenceAwards.map((award, index) => (
                <Reveal
                  key={`${award.conference}-${award.amount}`}
                  delay={index * 100}
                >
                  <article className="surface surface-interactive p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Scholarship Award
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-900">
                      {award.conference} {award.year}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-navy-800">
                      Scholarship support: {award.amount}
                    </p>
                    <p className="mt-3 text-sm leading-7 muted-copy">
                      Awardees: {award.awardees.join(", ")}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {featuredConferences.map((conference, index) => (
                <Reveal
                  key={`${conference.name}-${conference.year}-${conference.location}`}
                  delay={index * 90}
                >
                  <ConferenceCard conference={conference} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <Link
                href="/conferences"
                className="surface surface-interactive flex items-center justify-between gap-4 px-6 py-5 text-sm font-medium text-navy-700 hover:text-navy-900 sm:px-7"
              >
                <span>View all conferences</span>
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="team"
        aria-labelledby="team-heading"
        className="section-space border-b border-slate-200/70"
      >
        <div className="shell space-y-14">
          <Reveal>
            <SectionHeading
              id="team-heading"
              eyebrow="Team"
              title="Our Team"
              description="Meet the people behind GNNet Research."
            />
          </Reveal>

          <div className="space-y-12">
            {teamGroups.map((group) => (
              <Reveal key={group.name} className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-200" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    {group.name}
                  </h3>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                {group.name === "Leadership" ? (
                  <>
                    <div className="space-y-5 md:hidden">
                      {group.members.map((member) => (
                        <LeadershipMobileCard
                          key={member.name}
                          member={member}
                        />
                      ))}
                    </div>

                    <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
                      {group.members.map((member, index) => (
                        <Reveal
                          key={member.name}
                          delay={(index % 4) * 80}
                          className="h-full"
                        >
                          <TeamCard member={member} />
                        </Reveal>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {group.members.map((member, index) => (
                      <Reveal
                        key={member.name}
                        delay={(index % 4) * 80}
                        className="h-full"
                      >
                        <TeamCard member={member} />
                      </Reveal>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="connect" aria-labelledby="connect-heading" className="section-space">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="left" className="space-y-6">
            <SectionHeading
              id="connect-heading"
              eyebrow="Connect"
              title="Connect With GNNet Research"
              description="Apply to join the team or reach out to learn more."
              body="We welcome inquiries from students, trainees, researchers, and collaborators interested in contributing to GNNet Research."
            />
          </Reveal>

          <Reveal delay={120} direction="right">
            <ConnectForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
