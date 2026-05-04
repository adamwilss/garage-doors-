import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import { SEOJsonLd } from "./components/SEOJsonLd";
import { ScrollProgress } from "./components/ScrollProgress";
import { OrganicBlobs } from "./components/OrganicBlobs";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Garage Doors and Automated Gates in Carlisle | Quality Garage Doors Carlisle",
  description:
    "Family run specialists supplying, installing, repairing and automating garage doors and gates across Carlisle, Cumbria, Dumfries and Galloway, Northumberland and the Scottish Borders. 25 years experience. Free quotes.",
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
    <html lang="en" suppressHydrationWarning>
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
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
          <StickyMobileCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
