import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "[Studio Name] | Fixed-price branding studio",
  description:
    "A demo platform for fixed-price brand identity projects, onboarding, client review, and delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="notebook">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
