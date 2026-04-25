"use client";

import Image from "next/image";
import { useState } from "react";
import type { TeamMember } from "@/data/site";

type TeamCardProps = {
  member: TeamMember;
};

const SENTENCE_ABBREVIATIONS = ["Dr.", "Mr.", "Mrs.", "Ms.", "Prof."];

function getBioPreview(bio: string) {
  let normalized = bio.trim();
  const placeholders = new Map<string, string>();

  SENTENCE_ABBREVIATIONS.forEach((abbreviation, index) => {
    const placeholder = `__ABBR_${index}__`;
    placeholders.set(placeholder, abbreviation);
    normalized = normalized.replaceAll(abbreviation, placeholder);
  });

  const sentenceMatch = normalized.match(/^.*?[.!?](?=\s|$)/);
  let preview = sentenceMatch ? sentenceMatch[0] : normalized;

  placeholders.forEach((abbreviation, placeholder) => {
    preview = preview.replaceAll(placeholder, abbreviation);
  });

  return preview.trim();
}

export function TeamCard({ member }: TeamCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewBio = getBioPreview(member.bio);
  const hasMoreBio = previewBio !== member.bio.trim();

  return (
    <article className="group surface surface-interactive flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/4.2] border-b border-slate-200 bg-slate-100">
        <Image
          src={member.image}
          alt={`${member.photoType === "placeholder" ? "Profile placeholder" : "Headshot"} for ${member.name}`}
          fill
          className="media-lift object-cover"
          sizes="(min-width: 1280px) 22vw, (min-width: 768px) 44vw, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-slate-900">
            {member.name}
          </h3>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-navy-700">
            {member.role}
          </p>
        </div>

        <div className="flex-1 space-y-3">
          <p
            className={`text-sm leading-7 muted-copy ${isExpanded ? "" : "min-h-[5.25rem]"}`}
          >
            {isExpanded ? member.bio : previewBio}
          </p>

          {hasMoreBio ? (
            <button
              type="button"
              onClick={() => setIsExpanded((current) => !current)}
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? "Read less" : "Read full bio"}</span>
              <span aria-hidden="true">{isExpanded ? "↑" : "↓"}</span>
            </button>
          ) : null}
        </div>

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
