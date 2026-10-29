import { Krub, Montserrat, Rubik } from "next/font/google";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const krub = Krub({
  variable: "--font-krub",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  metadataBase: new URL("https://www.techcoral.co.in"),
  title: { default: "Techcoral", template: "%s – Techcoral" },
  description:
    "Techcoral Solutions – New Delhi based exporter, manufacturer and supplier of engineering and industrial products since 2010.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={`${krub.variable} ${montserrat.variable} ${rubik.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
