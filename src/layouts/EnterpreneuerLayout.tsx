import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useMediaQuery } from "@uidotdev/usehooks";
import HeaderDesktop from "../components/HeaderDesktop";

export default function EnterpreneuerLayout() {
  const desktop = useMediaQuery("only screen and (min-width : 1440px)");
  return (
    <main>
      {desktop ? <HeaderDesktop /> : <Header />}

      <Outlet />
    </main>
  );
}
