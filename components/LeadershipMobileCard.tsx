"use client";

import { useEffect, useState } from "react";
import type { TeamMember } from "@/data/site";

type LeadershipMobileCardProps = {
  member: TeamMember;
};

const SENTENCE_ABBREVIATIONS = ["Dr.", "Mr.", "Mrs.", "Ms.", "Prof."];
const MOBILE_LEADERSHIP_HEADSHOTS: Record<string, string> = {
  "Bernice Limann": "/images/Headshots/Bernice.jpg",
  "Lois Agbemavi-Kudufia": "/images/Headshots/Lois.jpg",
  "Kwadwo Darko": "/images/Headshots/Kwadwo.jpg",
  "Michael Yankey": "/images/Headshots/Yankey.jpeg",
  "Princess Afia Nkrumah-Boateng": "/images/Headshots/Princess.jpg",
  "Mildred Obeyaa Marfo": "/images/Headshots/Mildred.JPG",
  "Maame Doudua": "/images/Headshots/Maame.jpg",
  "Krishi Patel": "/images/Headshots/Krishi.jpg",
  "Kwaku Marfo": "/images/Headshots/Marfo.jpg"
};

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

export function LeadershipMobileCard({
  member
}: LeadershipMobileCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const preferredImage =
    MOBILE_LEADERSHIP_HEADSHOTS[member.name] ?? member.image;
  const [imageSrc, setImageSrc] = useState(preferredImage);
  const previewBio = getBioPreview(member.bio);
  const hasMoreBio = previewBio !== member.bio.trim();

  useEffect(() => {
    setImageSrc(preferredImage);
  }, [preferredImage]);

  return (
    <article className="surface overflow-hidden">
      <div className="bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={`${member.photoType === "placeholder" ? "Profile placeholder" : "Headshot"} for ${member.name}`}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          onError={() => {
            if (imageSrc !== member.image) {
              setImageSrc(member.image);
            }
          }}
          className="block h-72 w-full object-cover"
        />
      </div>

      <div className="space-y-3 p-5">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-slate-900">
            {member.name}
          </h3>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-navy-700">
            {member.role}
          </p>
        </div>

        <p className="text-sm leading-7 muted-copy">
          {isExpanded ? member.bio : previewBio}
        </p>

        {hasMoreBio ? (
          <button
            type="button"
            onClick={() => setIsExpanded((current) => !current)}
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-700"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? "Read less" : "Read full bio"}</span>
            <span aria-hidden="true">{isExpanded ? "↑" : "↓"}</span>
          </button>
        ) : null}
      </div>
    </article>
  );
}
