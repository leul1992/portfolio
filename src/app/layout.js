import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/header/theme-provider";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap', // Better font loading
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
});

export const metadata = {
  title: {
    default: "Leulseged | Developer Portfolio",
    template: "%s | Leulseged"
  },
  description: "Innovative developer creating modern web experiences",
  keywords: [
    "Leulseged",
    "Developer",
    "Portfolio",
    "Web Development",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
  },
  metadataBase: new URL('https://www.leul.tech'), // Add your domain
  openGraph: {
    title: "Leulseged | Developer Portfolio",
    description: "Innovative developer creating modern web experiences",
    url: "https://www.leul.tech",
    siteName: "Leulseged",
    images: [
      {
        url: "/public/images/mid.png", // Add your OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Leulseged | Developer Portfolio",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background selection:bg-primary selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
