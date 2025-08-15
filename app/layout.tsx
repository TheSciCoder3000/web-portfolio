import type { Metadata } from "next";
import "./global.scss";

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
    </html>
  );
}
