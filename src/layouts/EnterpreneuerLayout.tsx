import { Outlet } from "react-router-dom";
import Header from "../components/forHeader/Header";
import { useMediaQuery } from "@uidotdev/usehooks";
import HeaderDesktop from "../components/forHeader/HeaderDesktop";
import YellowIconCommon from "../components/forEnterpreneuer/YellowIconCommon";
import LeftSideDashboard from "../components/forEnterpreneuer/LeftSideDashboard";
import { useState } from "react";

export default function EnterpreneuerLayout() {
  const desktop = useMediaQuery("only screen and (min-width : 1440px)");
  const [leftDahboardClicked, setLeftDashboardClicked] =
    useState<boolean>(false);
  return (
    <div className="des:pl-[152px] bg-[#C7D9FF]">
      {/* {desktop ? <HeaderDesktop /> : <Header />} */}
      {!desktop ? (
        <YellowIconCommon
          leftDahboardClicked={leftDahboardClicked}
          setLeftDashboardClicked={setLeftDashboardClicked}
        />
      ) : null}
      {desktop ? (
        <LeftSideDashboard
          leftDahboardClicked={leftDahboardClicked}
          setLeftDashboardClicked={setLeftDashboardClicked}
        />
      ) : null}

      <Outlet />
    </div>
  );
}
