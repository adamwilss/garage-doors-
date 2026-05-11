import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import { SEOJsonLd } from "./components/SEOJsonLd";
import { ScrollProgress } from "./components/ScrollProgress";
import { OrganicBlobs } from "./components/OrganicBlobs";
import { ThemeProvider } from "./components/ThemeProvider";
import { ChatWidget } from "./components/ChatWidget";

export const metadata: Metadata = {
  title: "Garage Door Repair & Installation Carlisle | Fast Local Service | Quality Garage Doors",
  description:
    "Fast, affordable garage door repair and installation in Carlisle. Broken springs, faulty openers, doors off track. Same day service available. Call for a free quote.",
  keywords: [
    "garage doors",
    "garage door repairs",
    "garage door automation",
    "automated gates",
    "Carlisle",
    "Cumbria",
    "Dumfries and Galloway",
    "Northumberland",
    "Scottish Borders",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${oswald.variable} ${openSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (theme === 'system' && systemDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col relative">
        <ThemeProvider>
          <OrganicBlobs />
          <ScrollProgress />
          <SEOJsonLd type="LocalBusiness" />
          <Header />
          <main className="flex-1 relative z-10 pb-16 lg:pb-0">{children}</main>
          <Footer />
          <StickyMobileCTA />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
