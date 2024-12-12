import { Outlet } from "react-router-dom";
import Header from "../components/forHeader/Header";
import { useMediaQuery } from "@uidotdev/usehooks";
import HeaderDesktop from "../components/forHeader/HeaderDesktop";
import YellowIconCommon from "../components/forEnterpreneuer/YellowIconCommon";
import LeftSideDashboard from "../components/forEnterpreneuer/LeftSideDashboard";

export default function EnterpreneuerLayout() {
  const desktop = useMediaQuery("only screen and (min-width : 1440px)");
  return (
    <main>
      {/* {desktop ? <HeaderDesktop /> : <Header />} */}
      {!desktop ? <YellowIconCommon /> : null}
      {desktop ? <LeftSideDashboard /> : null}

      <Outlet />
    </main>
  );
}
