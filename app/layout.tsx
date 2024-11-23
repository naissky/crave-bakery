import type { Metadata } from "next";
import "./globals.css";
// Supports weights 400-900
import "@fontsource-variable/playfair-display";
// Supports weights 100-700
import "@fontsource-variable/josefin-sans";
import Navbar from "./components/Navbar";
import { ViewTransitions } from "next-view-transitions";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Crave Bakery - Making sure you really crave it!",
  description: "Making sure you really crave it!. CLASSIC WITH A MODERN TWIST. AN EXPERIENCE FOR THE THASTE BUDS AND THE SOUL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className="bg-background">
          <Navbar />
          <main className="w-full">{children}</main>
          <Footer/>
        </body>
      </html>
    </ViewTransitions>
  );
}
