import Image from "next/image";
import type { TeamMember } from "@/data/site";

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="group surface surface-interactive overflow-hidden">
      <div className="relative aspect-[4/4.2] border-b border-slate-200 bg-slate-100">
        <Image
          src={member.image}
          alt={`${member.photoType === "placeholder" ? "Profile placeholder" : "Headshot"} for ${member.name}`}
          fill
          className="media-lift object-cover"
          sizes="(min-width: 1280px) 22vw, (min-width: 768px) 44vw, 100vw"
        />
      </div>

      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-slate-900">
            {member.name}
          </h3>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-navy-700">
            {member.role}
          </p>
        </div>

        <p className="text-sm leading-7 muted-copy">{member.bio}</p>

        {member.interests ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 motion-safe:transition-colors motion-safe:duration-500 group-hover:border-slate-300 group-hover:bg-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Research Interests
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {member.interests}
            </p>
          </div>
        ) : null}
      </div>
    </article>
  );
}
