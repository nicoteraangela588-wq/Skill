import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import { KeychainProvider } from "@/components/KeychainProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-raw",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans-raw",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Allterra — Shield skincare pour la montagne",
  description:
    "Des soins Shield conçus pour protéger et réparer la peau dans les conditions extrêmes de la montagne : vent, froid, soleil, effort.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-graphite">
        <KeychainProvider>
          <Nav />
          <main id="top" className="flex-1">
            {children}
          </main>
          <Footer />
        </KeychainProvider>
      </body>
    </html>
  );
}
