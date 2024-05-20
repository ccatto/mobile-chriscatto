import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileHeaderCatto from "./components/MobileHeaderCatto";
import MobileFooterCatto from "./components/MobileFooterCatto";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`inter.className absolute m-0 flex w-screen flex-col overflow-x-hidden bg-gray-800 antialiased`}>
        <div className="overflow-y-auto h-screen mb-16">
          <MobileHeaderCatto />
          <main className="flex h-full flex-col items-center justify-between p-2 mb-[-2em]">
            {children}
          </main>
        </div>
        <MobileFooterCatto />
      </body>
    </html>
  );
}
