import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechSEO Vitals - Technical SEO & Web Performance Consultant",
  description: "Expert Technical SEO consultant specializing in Core Web Vitals, page speed optimization, and search rankings. Get faster websites that rank higher in Google.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
