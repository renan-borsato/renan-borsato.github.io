import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Renan Borsato | Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Showcasing my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
