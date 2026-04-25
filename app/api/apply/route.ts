import { NextResponse } from "next/server";

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const DEFAULT_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzPCNWUlmVh8cfffShkF3tMCCSM_mBmIijXvR7NoCkT_ZNQJ-D3Dzybw16w6CVvkzXF5g/exec";

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const appsScriptUrl =
    process.env.GOOGLE_APPS_SCRIPT_URL || DEFAULT_APPS_SCRIPT_URL;

  if (!appsScriptUrl) {
    return NextResponse.json(
      {
        error:
          "Application backend is not configured yet. Set GOOGLE_APPS_SCRIPT_URL in your deployment environment, or add it to .env.local when running locally."
      },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const fullName = getString(formData, "fullName");
  const email = getString(formData, "email");

  if (!fullName || !email) {
    return NextResponse.json(
      { error: "Full name and email are required." },
      { status: 400 }
    );
  }

  const cvUpload = formData.get("cvUpload");
  let cvFile:
    | {
        name: string;
        type: string;
        size: number;
        base64: string;
      }
    | undefined;

  if (cvUpload instanceof File && cvUpload.size > 0) {
    if (cvUpload.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        {
          error:
            "CV upload is too large. Please upload a file smaller than 5 MB."
        },
        { status: 400 }
      );
    }

    const arrayBuffer = await cvUpload.arrayBuffer();
    cvFile = {
      name: cvUpload.name,
      type: cvUpload.type || "application/octet-stream",
      size: cvUpload.size,
      base64: Buffer.from(arrayBuffer).toString("base64")
    };
  }

  const payload = {
    submittedAt: new Date().toISOString(),
    fullName,
    email,
    phone: getString(formData, "phone"),
    institution: getString(formData, "institution"),
    role: getString(formData, "role"),
    interest: getString(formData, "interest"),
    interestMessage: getString(formData, "interestMessage"),
    linkedin: getString(formData, "linkedin"),
    contactMethod: getString(formData, "contactMethod"),
    cvFile
  };

  const response = await fetch(appsScriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
    cache: "no-store"
  });

  if (!response.ok) {
    const details = await response.text();
    return NextResponse.json(
      {
        error:
          details || "Failed to submit the application to Google services."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
