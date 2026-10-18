import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tech Groww | Digital Growth & IT Solutions Agency",
  description:
    "Tech Groww is a premium digital growth and IT services agency specializing in Web Development, Mobile Apps, UI/UX Design, Cloud & DevOps, and Digital Marketing. Transform your business with cutting-edge technology solutions.",
  keywords: [
    "Tech Groww",
    "IT services",
    "web development",
    "mobile app development",
    "UI UX design",
    "digital marketing",
    "cloud devops",
    "software agency India",
    "digital transformation",
  ],
  authors: [{ name: "Tech Groww" }],
  creator: "Tech Groww",
  publisher: "Tech Groww",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techgroww.dev",
    title: "Tech Groww | Digital Growth & IT Solutions Agency",
    description:
      "Transform your business with premium digital solutions. Web Development, Mobile Apps, UI/UX Design, Cloud & DevOps, and Digital Marketing.",
    siteName: "Tech Groww",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Groww | Digital Growth & IT Solutions Agency",
    description:
      "Transform your business with premium digital solutions. Web Development, Mobile Apps, Cloud & DevOps, and more.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6366f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
