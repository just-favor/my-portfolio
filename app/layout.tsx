import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/navigation/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Favour Ogbewe | Frontend Developer",
  description:
    "Portfolio of Favour Ogbewe, a frontend developer building modern web applications with Next.js, React, and TypeScript.",
  keywords: [
    "Favour Ogbewe",
    "Frontend developer",
    "Next.js portfolio",
    "React developer",
  ],
  authors: [{ name: "Favour Ogbewe" }],
  creator: "Favour Ogbewe",

  openGraph: {
    title: "Favour Ogbewe | Frontend Developer",
    description:
      "Portfolio of Favour Ogbewe, showcasing projects, skills, and contact information.",
    url: "https://your-domain.com", // replace with real domain later
    siteName: "Favour Ogbewe Portfolio",
    images: [
      {
        url: "/8B196245-CF10-4B40-B51A-B629B51D274A.PNG",
        width: 1200,
        height: 630,
        alt: "Favour Ogbewe Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Favour Ogbewe | Frontend Developer",
    description:
      "Portfolio of Favour Ogbewe, showcasing projects, skills, and contact information.",
    images: ["/8B196245-CF10-4B40-B51A-B629B51D274A.PNG"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
