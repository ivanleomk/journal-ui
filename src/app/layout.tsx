import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kaizen",
  description: "Getting 1% better every day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-semibold">
              KAIZEN
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:underline text-lg">
                New
              </Link>
              <Link href="/log" className="hover:underline text-lg">
                Log
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
