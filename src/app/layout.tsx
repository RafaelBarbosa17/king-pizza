import "./globals.css";
import type { Metadata } from "next";
import { Inter, Courgette } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});
const allura = Courgette({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-allura'
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
      <html lang="pt-br">
        <head>
          <link
            rel="shortcut icon"
            href="./favicon-dark.png"
            type="image/x-icon"
          />
        </head>
        <body className={`${inter.variable} ${allura.variable} transition-all ease-linear dark:bg-black h-screen`}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
