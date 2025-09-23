import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Mafia Project",
  description: "An open-source reimagining of the classic Mafia game with customizable rules and interactive play",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
