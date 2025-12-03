import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}

