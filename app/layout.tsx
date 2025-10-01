import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./global.css";

export const metadata: Metadata = {
  title: "John Juvi | Web Developer",
  description: "Online Web Portfolio built by John Juvi De Villa",
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
      <body className="font-jet w-screen overflow-x-hidden">{children}</body>
      <GoogleAnalytics gaId="G-9QD800C3XD" />
    </html>
  );
}
