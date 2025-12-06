import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lynx Studio | Modern Landing Page",
  description:
    "Landing page built by Shark Tech Solutions using Next.js, TypeScript, and TailwindCSS.",
  icons: {
    icon: "/images/lynx-logo-white-transparent.svg",
  },
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
