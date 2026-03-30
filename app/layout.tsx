import type { Metadata } from "next";
import "@/app/globals.css";
import { SiteLayout } from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "GNNet Research",
  description:
    "Advancing research, collaboration, and discovery in neurosurgery and related fields."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

