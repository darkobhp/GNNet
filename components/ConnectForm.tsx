"use client";

import { FormEvent, useState } from "react";

const interestOptions = [
  "Clinical outcomes research",
  "Registry development",
  "Data analysis and biostatistics",
  "Manuscript writing and dissemination",
  "Conference presentations",
  "General collaboration"
];

export function ConnectForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitted(false);
    setError("");

    fetch("/api/apply", {
      method: "POST",
      body: formData
    })
      .then(async (response) => {
        if (!response.ok) {
          const data = (await response.json().catch(() => null)) as
            | { error?: string }
            | null;
          throw new Error(
            data?.error ||
              "Something went wrong while submitting your application."
          );
        }

        form.reset();
        setSubmitted(true);
      })
      .catch((submissionError: Error) => {
        setError(submissionError.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="surface p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            id="fullName"
            label="Full name"
            placeholder="Enter your full name"
          />
          <Field
            id="email"
            label="Email address"
            type="email"
            placeholder="name@example.edu"
            required
          />
          <Field
            id="institution"
            label="Institution or affiliation"
            placeholder="University or organization"
            required
          />
          <Field
            id="role"
            label="Current role"
            placeholder="Student, resident, faculty, researcher"
            required
          />
          <Field
            id="phone"
            label="Phone number"
            type="tel"
            placeholder="+233 or local number"
          />
          <div className="sm:col-span-2">
            <label
              htmlFor="interest"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Area of interest
            </label>
            <select
              id="interest"
              name="interest"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 focus:border-navy-500"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select an area of interest
              </option>
              {interestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="interest-message"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Why are you interested in joining GNNet Research?
            </label>
            <textarea
              id="interest-message"
              name="interestMessage"
              rows={6}
              placeholder="Share your background, goals, and how you would like to contribute."
              required
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 focus:border-navy-500"
            />
          </div>
          <Field
            id="linkedin"
            label="LinkedIn profile link"
            type="url"
            placeholder="https://www.linkedin.com/in/your-profile"
          />
          <div>
            <label
              htmlFor="cv-upload"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              CV upload
            </label>
            <input
              id="cv-upload"
              name="cvUpload"
              type="file"
              required
              className="block w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-navy-800 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:border-slate-400"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="contact-method"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Preferred contact method
            </label>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Email", "Phone", "LinkedIn"].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    required
                    className="h-4 w-4 border-slate-300 text-navy-700 focus:ring-navy-600"
                    defaultChecked={method === "Email"}
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center border-t border-slate-200 pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-navy-800 px-6 py-3 text-sm font-medium text-white hover:bg-navy-900"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>

      {error ? (
        <p
          className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      {submitted ? (
        <p
          className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
          role="status"
        >
          Thanks for your interest. Your application has been submitted.
        </p>
      ) : null}
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "url" | "tel";
  required?: boolean;
};

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required = false
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required || id === "fullName"}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 focus:border-navy-500"
      />
    </div>
  );
}
