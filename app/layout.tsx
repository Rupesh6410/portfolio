import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rupesh Kumar | Full Stack Developer",
  description:
    "Full Stack Developer building scalable web apps with Next.js, React, Node.js, and AWS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("dark", geistMono.variable, "font-sans", geist.variable)}
    >
      <body className="bg-black text-white font-sans min-h-screen antialiased relative overflow-x-hidden">
        
        
        <div className="fixed inset-0 -z-10">
        
          <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-600/30 blur-3xl rounded-full" />
          <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-600/20 blur-3xl rounded-full" />

        
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <CursorGlow />
      </body>
    </html>
  );
}