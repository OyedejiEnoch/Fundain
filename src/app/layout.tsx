import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: "swap",
//   axes: ["opsz"],
// });

const dmSans = DM_Sans({
  variable: "--font-dm-sans", // Define a CSS variable
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"], // Include only the weights you need
});


export const metadata: Metadata = {
  title: "Fundain",
  description: "Join the future of crowdfunding powered by blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-sans bg-[#040404] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
