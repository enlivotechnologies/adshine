import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Adshine Pharmaceuticals | Creating Healthy Lives",
  description:
    "Adshine Pharmaceuticals delivers GMP-certified, science-backed medicines across General Physician and Gynecology specialties across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${dmSans.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
