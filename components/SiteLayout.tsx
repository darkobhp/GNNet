import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollReset } from "@/components/ScrollReset";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen overflow-x-clip">
      <ScrollReset />
      <Navbar />
      <main className="overflow-x-clip">{children}</main>
      <Footer />
    </div>
  );
}
