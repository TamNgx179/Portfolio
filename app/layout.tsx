import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const displayFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"]
});

const bodyFont = Manrope({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Nguyễn Minh Tâm — Software Engineer",
  description:
    "Software engineer building reliable backend, full-stack, and AI-powered products in Ho Chi Minh City.",
  openGraph: {
    title: "Nguyễn Minh Tâm — Software Engineer",
    description: "Backend, full-stack, and AI-powered product engineering.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
