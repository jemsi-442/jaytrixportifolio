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
  title: `JayTrix Systems | ${profile.title}`,
  applicationName: "JayTrix Systems Portfolio",
  description: `${profile.tagline} Based in ${profile.location}.`,
  keywords: [
    "JayTrix Systems",
    "Software Engineer",
    "Systems Architect",
    "Linux Administrator",
    "Cybersecurity",
    "Penetration Testing",
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
  creator: profile.name,
  publisher: "JayTrix Systems",
  openGraph: {
    title: `JayTrix Systems | ${profile.title}`,
    description: `${profile.tagline} Based in ${profile.location}.`,
    siteName: "JayTrix Systems",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `JayTrix Systems | ${profile.title}`,
    description: `${profile.tagline} Based in ${profile.location}.`,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
