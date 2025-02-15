import { Geist, Geist_Mono } from "next/font/google";
import StoreProvide from "./StoreProvider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapLoader from "./components/Bootstrap";
import "./styles/globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children,hideHeaderFooter }) {
  return (
    <html lang="en">
      <body>
        <StoreProvide>
        {hideHeaderFooter  && <Header/>}
        {children}
        {hideHeaderFooter  && <Footer/>}
        </StoreProvide>
        <BootstrapLoader />
      </body>
    </html>
  );
}
