import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Andalan Team",
    description: "Sound and Broadcasting Specialist",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-sans bg-white text-gray-800 m-0 p-0`}
                style={{ margin: 0, padding: 0 }}
            >
                <Navbar />
                <main className="bg-white min-h-screen">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
