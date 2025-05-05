import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SidebarProvider from "./components/SideBarContext/SideBarContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Muhamad Sodikin",
  description: "Muhamad Sodikin's Personal Website",
  icons: '/images/experiences/dikin11.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <SidebarProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </SidebarProvider>
  );
}
