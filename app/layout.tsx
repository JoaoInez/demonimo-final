import type { Metadata } from "next";
import Melodrama from "next/font/local";
import "./globals.css";

const font = Melodrama({
  src: "./Melodrama-Variable.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Demonimo",
  description: "Demonimo's nook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
