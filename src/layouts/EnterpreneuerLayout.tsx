import { Outlet } from "react-router-dom";
import Header from "../components/forHeader/Header";
import { useMediaQuery } from "@uidotdev/usehooks";
import HeaderDesktop from "../components/forHeader/HeaderDesktop";
import YellowIconCommon from "../components/forEnterpreneuer/YellowIconCommon";

export default function EnterpreneuerLayout() {
  const desktop = useMediaQuery("only screen and (min-width : 1440px)");
  return (
    <main>
      {/* {desktop ? <HeaderDesktop /> : <Header />} */}
      <YellowIconCommon />

      <Outlet />
    </main>
  );
}
