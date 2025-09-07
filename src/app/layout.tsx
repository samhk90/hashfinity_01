import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hashfinity - Transform Your Vision Into Digital Excellence",
    template: "%s | Hashfinity"
  },
  description: "Leading software development company specializing in custom web applications, mobile apps, and digital solutions. We help businesses grow with Flutter, Node.js, React, and modern technology stacks.",
  keywords: [
    "software development",
    "web development", 
    "mobile app development",
    "custom software solutions",
    "Flutter development",
    "Node.js development",
    "React development",
    "digital transformation",
    "SaaS development",
    "API integration",
    "e-commerce solutions",
    "startup development",
    "business automation",
    "cloud solutions",
    "Hashfinity",
    "Software Development in Pune",
    "Software Development in India",
    "Software Company in Pune",
    "Software Company in India",  
    "custom software development in Pune",
    "custom software development in India",
    "Saas development in Pune",
    "Saas development in India",
    "web application development in Pune",
    "web application development in India",
    "mobile app development in Pune",
    "mobile app development in India",
    "API development in Pune",
    "API development in India",
    "e-commerce development in Pune",
    "e-commerce development in India",
    "startup technology solutions in Pune",
    "startup technology solutions in India",
    "business automation software in Pune",
    "business automation software in India",
    "digital transformation consulting in Pune",
    "digital transformation consulting in India",
    "cloud application development in Pune",
    "cloud application development in India",
    "database design and development in Pune",
    "database design and development in India",
    "UI/UX design services in Pune",
    "UI/UX design services in India"


  ],
  authors: [{ name: "Hashfinity" }],
  creator: "Hashfinity",
  publisher: "Hashfinity",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hashfinity.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hashfinity.tech",
    title: "Hashfinity - Transform Your Vision Into Digital Excellence",
    description: "Leading software development company specializing in custom web applications, mobile apps, and digital solutions. We help businesses grow with modern technology stacks.",
    siteName: "Hashfinity",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Hashfinity - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashfinity - Transform Your Vision Into Digital Excellence",
    description: "Leading software development company specializing in custom web applications, mobile apps, and digital solutions.",
    images: ["/logo1.png"],
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
