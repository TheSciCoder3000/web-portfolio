import type { Metadata } from "next";
import "./global.scss";
import { GoogleAnalytics } from "@next/third-parties/google";

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
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-9QD800C3XD" />
    </html>
  );
}
