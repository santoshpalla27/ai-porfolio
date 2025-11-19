import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Santosh Reddy Portfolio",
  description: "Interactive DevOps portfolio with an AI-powered Memoji that answers questions about my infrastructure projects and skills",
  keywords: [
    "Santosh Reddy",
    "Portfolio",
    "DevOps Engineer",
    "Cloud",
    "CI/CD",
    "Infrastructure",
    "Kubernetes",
    "AWS",
    "Terraform",
    "Interactive"
  ],
  authors: [
    {
      name: "Santosh Reddy",
      url: "https://santosh.bio",
    },
  ],
  creator: "Santosh Reddy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://santosh.bio",
    title: "Santosh Reddy Portfolio",
    description: "Interactive DevOps portfolio with an AI-powered Memoji",
    siteName: "Santosh Reddy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santosh Reddy Portfolio",
    description: "Interactive DevOps portfolio with an AI-powered Memoji",
    creator: "@santoshreddy",
  },
  icons: {
    icon: [
      {
        url: "/logo-yuvi.svg",
        sizes: "any",
      }
    ],
    shortcut: "/logo-yuvi.svg?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo-yuvi.svg" sizes="any" />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QTH2CN2YRQ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window['dataLayer'] = window['dataLayer'] || [];
              function gtag(){window['dataLayer'].push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QTH2CN2YRQ');
            `,
          }}
        />
      </head>
      <body
        className={cn(
          // "min-h-screen bg-background font-sans antialiased",
          "min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans antialiased transition-colors duration-500 ease-in-out",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          {/* <Toaster /> */}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
