import { useMediaQuery } from "@uidotdev/usehooks";
import { Outlet } from "react-router-dom";
import HeaderDesktop from "../components/HeaderDesktop";
import Header from "../components/Header";
import Footer from "../components/forFooter/Footer";

export default function MainLayout() {
  const desktop = useMediaQuery("only screen and (min-width : 1440px)");
  return (
    <>
      {desktop ? <HeaderDesktop /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
}
