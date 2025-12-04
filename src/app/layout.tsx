import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "Alcovia - Dare to become everything you were born to be",
  description: "Alcovia is a premier community of passion-driven teenagers building the leaders of tomorrow, today.",
  icons: {
    icon: "/images/logo/alcovia-logo.svg",
    shortcut: "/images/logo/alcovia-logo.svg",
    apple: "/images/logo/alcovia-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${dancingScript.variable} font-sans antialiased`}>
        <CustomCursor />
        {/* Header with Logo */}
        <header className="fixed top-0 left-0 right-0 z-50 w-full">
          <div className="w-full px-6 sm:px-8 lg:px-12 py-6">
            <Image
              src="/images/logo/alcovia-logo.svg"
              alt="Alcovia Logo"
              width={300}
              height={90}
              priority
              className="h-16 w-auto md:h-20"
            />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

