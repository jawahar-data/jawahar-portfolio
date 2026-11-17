import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  fallback: ["Inter", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Jawahar.R | Data Engineer & System Builder",
  description:
    "Portfolio of Jawahar.R — B.Tech Artificial Intelligence & Data Science student building high-throughput ELT pipelines, spatiotemporal satellite systems, and streaming data architectures.",
  keywords: [
    "Data Engineer",
    "Jawahar.R",
    "FlowMatrix",
    "CELESTIAL X",
    "NASA Space Apps",
    "Kafka",
    "PySpark",
    "Airflow",
    "dbt",
    "AWS S3",
    "Python",
    "SQL",
  ],
  authors: [{ name: "Jawahar.R" }],
  openGraph: {
    title: "Jawahar.R | Data Engineer & System Builder",
    description:
      "B.Tech AI & Data Science student — building end-to-end data pipelines, streaming architectures, and spatiotemporal analytics.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawahar.R | Data Engineer & System Builder",
    description:
      "B.Tech AI & Data Science student — building end-to-end data pipelines, streaming architectures, and spatiotemporal analytics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#080c14" />
      </head>
      <body className="min-h-screen antialiased selection:bg-sky-500/20 selection:text-sky-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
