import "./globals.css";
import "./menu-burguer.css";
import type { Metadata } from "next";
import { Inter, Courgette, Amiko } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});
const courgette = Courgette({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-courgette'
})
const amiko = Amiko({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-amiko'
})

export const metadata: Metadata = {
  title: "King Pizza",
  description: "A melhor pizza de Capela Nova",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="pt-br" className="dark">
        <head>
          <link
            rel="shortcut icon"
            href="./favicon-dark.png"
            type="image/x-icon"
            as="image"
          />
        </head>
        <body className={`dark:text-white text-black ${inter.variable} ${courgette.variable} ${amiko.variable} transition-all ease-linear dark:bg-black h-screen overflow-x-hidden`}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
