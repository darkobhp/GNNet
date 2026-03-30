import Link from "next/link";
import { contactDetails, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-950 text-slate-200">
      <div className="shell grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            GNNet Research
          </p>
          <h2 className="text-2xl font-semibold text-white">
            Advancing collaborative neurosurgical research.
          </h2>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="font-semibold text-white">Contact</h3>
          <p>Email: {contactDetails.email}</p>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="font-semibold text-white">Social</h3>
          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-flex text-slate-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
