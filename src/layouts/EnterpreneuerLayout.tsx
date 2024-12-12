import { Outlet } from "react-router-dom";
import Header from "../components/forHeader/Header";
import { useMediaQuery } from "@uidotdev/usehooks";
import HeaderDesktop from "../components/forHeader/HeaderDesktop";
import YellowIconCommon from "../components/forEnterpreneuer/YellowIconCommon";
import LeftSideDashboard from "../components/forEnterpreneuer/LeftSideDashboard";

export default function EnterpreneuerLayout() {
  const desktop = useMediaQuery("only screen and (min-width : 1440px)");
  return (
    <div className="des:pl-[152px] bg-[#C7D9FF]">
      {/* {desktop ? <HeaderDesktop /> : <Header />} */}
      {!desktop ? <YellowIconCommon /> : null}
      {desktop ? <LeftSideDashboard /> : null}

      <Outlet />
    </div>
  );
}
