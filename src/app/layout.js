import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Web Site",
    template: "Web Page | %s",
  },
  description: "Home page of the web site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* navbar */}
        <NavBar />

        <main className="min-h-[calc(100vh-311px)]">{children}</main>

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
