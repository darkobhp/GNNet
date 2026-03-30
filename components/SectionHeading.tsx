type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  body?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  body
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-navy-700">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-3">
        <h2
          id={id}
          className="text-3xl font-semibold text-slate-950 sm:text-4xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="text-lg leading-8 text-slate-700">{description}</p>
        ) : null}
        {body ? <p className="leading-8 muted-copy">{body}</p> : null}
      </div>
    </div>
  );
}
