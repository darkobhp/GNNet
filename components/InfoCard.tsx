import Link from "next/link";

type InfoCardItem = {
  label: string;
  value: string;
};

type InfoCardProps = {
  title: string;
  description?: string;
  items?: InfoCardItem[];
  href?: string;
  linkLabel?: string;
};

export function InfoCard({
  title,
  description,
  items,
  href,
  linkLabel
}: InfoCardProps) {
  return (
    <article className="surface surface-interactive flex h-full flex-col p-6 sm:p-7">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold leading-snug text-slate-900">
          {title}
        </h3>
        {description ? (
          <p className="text-sm leading-7 muted-copy">{description}</p>
        ) : null}
      </div>

      {items?.length ? (
        <dl className="mt-6 space-y-4">
          {items.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="border-t border-slate-200/80 pt-4 first:border-t-0 first:pt-0"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm leading-7 text-slate-700">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      {href && linkLabel ? (
        <div className="mt-6 pt-4">
          <Link
            href={href}
            className="inline-flex items-center text-sm font-medium text-navy-700 hover:text-navy-900"
          >
            {linkLabel}
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      ) : null}
    </article>
  );
}
