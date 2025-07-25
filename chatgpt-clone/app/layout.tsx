import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Providers from "./providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "j15 by Cultura",
  description: "AI Coding Assistant",
  icons: {
    icon: "/myLogo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers> {children}</Providers>
        </body>
    </html>
  )
}
