import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import SmoothScrollProvider from "@/components/SmoothScrollProvider"
import CustomCursor from "@/components/CustomCursor"
import ScrollProgressBar from "@/components/ScrollProgressBar"

const displayFont = Bebas_Neue({ weight:["400"], subsets:["latin"], variable:"--font-display", display:"swap" })
const bodyFont    = Inter({ subsets:["latin"], variable:"--font-body", display:"swap" })
const monoFont    = JetBrains_Mono({ subsets:["latin"], variable:"--font-mono", display:"swap" })

export const metadata = { title:"Tania — Web Developer", description:"Full Stack Web Developer" }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="bg-darker text-[#e8e0d4] overflow-x-hidden">
        <CustomCursor />
        <ScrollProgressBar />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}