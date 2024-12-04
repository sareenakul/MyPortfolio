import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Akul Sareen",
  description: "Akul Sareen's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />        
        </head>
      <body className={`${inter.className} ${lato.className}`}>
        {children}
      </body>
    </html>
  );
}
