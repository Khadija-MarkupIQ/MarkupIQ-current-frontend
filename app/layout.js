import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Define fonts here (self-contained)
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist" });
export const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="prose prose-lg">
          {children}
        </div>
      </body>
    </html>
  );
}
