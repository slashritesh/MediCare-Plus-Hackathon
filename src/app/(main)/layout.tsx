import Navbar from "@/components/Navbar"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import {Poppins} from "next/font/google"

const poppins = Poppins({
    weight : ["200","300","400","500","600","700","800"],
    subsets : ["latin"]
})

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={cn(poppins.className,"antialiased")}>
          <main>
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    )
  }