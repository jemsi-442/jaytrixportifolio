import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: `${profile.tagline} Based in ${profile.location}.`,
  keywords: [
    "Software Engineer",
    "Systems Architect",
    "Next.js",
    "Node.js",
    "PHP",
    "Symfony",
    "Laravel",
    "Django",
    "MongoDB",
    "MySQL",
    "RBAC",
    "Secure API Architecture",
    profile.name,
    "Tanzania",
    "Software Development",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: `${profile.tagline} Based in ${profile.location}.`,
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const bodyClass = `${poppins.variable} ${inter.variable} antialiased bg-background text-foreground`;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bodyClass} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
