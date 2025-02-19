import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Providers } from "@/components/Query";

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
      <body className={`${inter.className} flex flex-col max-w-full min-w-full min-h-svh overflow-y-auto`}>
        <div className="flex-1">
          <Providers>{children}</Providers>
        </div>
        <Nav />
      </body>
    </html>
  );
}
