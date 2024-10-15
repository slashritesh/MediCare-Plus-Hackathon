import React from "react";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={cn(poppins.className)}>{children}</body>
    </html>
  );
};

export default Authlayout;
