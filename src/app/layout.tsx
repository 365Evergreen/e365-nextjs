import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import  Header  from "@/components/Header/Header";
import "./globals.css";

const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "Headless WordPress";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "A statically generated Next.js website powered by WordPress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>
        <div className="site-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}