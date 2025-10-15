import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Renan Borsato | Portfolio",
  description: "Full Stack Developer portfolio showcasing projects and skills.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
