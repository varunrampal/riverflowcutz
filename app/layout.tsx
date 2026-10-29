import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RiverFlow Cutz | Men’s Barber",
  description:
    "Luxury men’s barber portfolio website for precision cuts, fade work, and tailored grooming in Langley, BC.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "RiverFlow Cutz | Men’s Barber",
    description:
      "Premium men’s grooming, tailored to you.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#F4F0E8] text-[#263B58]">{children}</body>
    </html>
  );
}
