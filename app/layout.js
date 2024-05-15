import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });
import Sidebar from "@/components/Sidebar";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(" min-h-screen w-full text-black bg-white flex",inter.className, {
          "debug-screens": process.env.NODE_ENV === "development",
        })}
      >
        {/* sidebar */}
<div className="border"><Sidebar/></div>
{/* main page */}
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
