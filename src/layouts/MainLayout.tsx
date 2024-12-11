import { useMediaQuery } from "@uidotdev/usehooks";
import { Outlet } from "react-router-dom";
import HeaderDesktop from "../components/forHeader/HeaderDesktop";
import Header from "../components/forHeader/Header";
import Footer from "../components/forFooter/Footer";
import { useEffect } from "react";

export default function MainLayout() {
  const desktop = useMediaQuery("only screen and (min-width : 1440px)");
  useEffect(() => {});
  // uselocation pagebis dasacaval usefectshi

  return (
    <>
      {desktop ? <HeaderDesktop /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
}
