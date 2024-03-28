import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from './styles.module.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Julia Hoarau's Portfolio",
  description: "Check out all of my graphic designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
