import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingAIChat from "@/components/floating-ai-chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santosh Reddy - DevOps Engineer",
  description: "AI-powered portfolio of Santosh Reddy, DevOps Engineer",
  authors: [{ name: "Santosh Reddy" }],
  creator: "Santosh Reddy",
  openGraph: {
    title: "Santosh Reddy - DevOps Engineer",
    description: "AI-powered portfolio of Santosh Reddy, DevOps Engineer",
    type: "website",
    siteName: "Santosh Reddy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santosh Reddy - DevOps Engineer",
    description: "AI-powered portfolio of Santosh Reddy, DevOps Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${inter.className} h-full bg-white dark:bg-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingAIChat />
        </ThemeProvider>
      </body>
    </html>
  );
}