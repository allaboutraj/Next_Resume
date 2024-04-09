import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/Components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Manish's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
