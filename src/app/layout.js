import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Nazaridev",
  description: "This is My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <div className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">{children}</div>
        </div>
      </body>
    </html>
  );
}
