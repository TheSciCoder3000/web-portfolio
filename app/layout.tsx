import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./global.css";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Juvi | Web Developer",
  description: "Online Web Portfolio built by John Juvi De Villa",
  keywords: [
    "Full Stack",
    "Software Developer",
    "Next.js",
    "React",
    "Frontend",
    "Computer Engineer",
  ],
  openGraph: {
    title: "John Juvi De Villa",
    description: "Full Stack Developer with over 4 years of experience",
    url: "https://nuerocoder.work",
    siteName: "neurocoder",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className={`${jetbrains.variable} w-screen overflow-x-hidden`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-9QD800C3XD" />
    </html>
  );
}
