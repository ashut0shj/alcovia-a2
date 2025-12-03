import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alcovia - Dare to become everything you were born to be",
  description: "Alcovia is a premier community of passion-driven teenagers building the leaders of tomorrow, today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CustomCursor />
        {/* Header with Logo */}
        <header className="fixed top-0 left-0 right-0 z-50 w-full">
          <div className="w-full px-6 sm:px-8 lg:px-12 py-6">
            <Image
              src="/images/logo/alcovia-logo.svg"
              alt="Alcovia Logo"
              width={200}
              height={60}
              priority
              className="h-10 w-auto md:h-12"
            />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

