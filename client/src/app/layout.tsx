import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/utils/shadcn";
import { Inter as FontSans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Youtube",
  description:
    "The clone version of Youtube 2022, which is the most popular sharing video platform!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
