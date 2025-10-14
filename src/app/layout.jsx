import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const navbarOptions = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/uses", label: "Uses" },
];

export const metadata = {
  title: "Portfolio",
  description: "by Renan Borsato",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar options={navbarOptions} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
