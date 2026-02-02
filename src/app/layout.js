import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hassan Ali - MERN Stack & Node.js Developer | Portfolio",
  description:
    "Hassan Ali is a MERN Stack Developer specializing in Node.js, React, MongoDB & scalable backend systems.",

  keywords: [
    "MERN Stack Developer",
    "Node.js Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "MongoDB Developer",
    "REST API Developer",
    "JavaScript Developer",
    "Web Developer Pakistan",
    "Karachi Web Developer",
  ],

  authors: [{ name: "Hassan Ali" }],
  creator: "Hassan Ali",
  publisher: "Hassan Ali",

  openGraph: {
    title: "Hassan Ali - MERN Stack & Node.js Developer",
    description:
      "Professional MERN Stack Developer specializing in Node.js backend & full-stack applications.",
    url: "https://hassan-ali-dev.vercel.app",
    siteName: "Hassan Ali Portfolio",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Hassan Ali MERN Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hassan Ali - MERN Stack & Node.js Developer",
    description:
      "MERN Stack Developer | Node.js Backend Specialist | Portfolio",
    images: ["/og-image.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
