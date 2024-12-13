import arrow from "/forDashboard/arrowDashboard.svg";
import profile from "/forDashboard/profile.svg";
import ideas from "/forDashboard/ideas.svg";
import jobs from "/forDashboard/deals.svg";
import notifications from "/forDashboard/notifications.svg";
import parameters from "/forDashboard/parameters.svg";
import exit from "/forDashboard/exit.svg";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";

export default function LeftSideDashboard({
  leftDahboardClicked,
  setLeftDashboardClicked,
}: {
  leftDahboardClicked: boolean;
  setLeftDashboardClicked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const desktop = useMediaQuery("only screen and (min-width : 1440px)");
  // const [click, setClick] = useState<boolean>(false);
  return (
    <div
      className={`w-screen min-h-screen ${
        desktop ? "" : "bg-[rgba(0,0,0,0.4)]"
      } absolute z-30 left-0 des:w-[131px] des:h-[561px]`}
    >
      <div className="w-[259px] bg-white flex flex-col gap-[20px] px-[23px] z-50 rounded-br-[30px] py-[30px] des:py-[106px] des:w-[131px]">
        {desktop ? null : (
          <img
            src={arrow}
            alt=""
            className="w-[30px] h-[20px] rotate-90 self-end"
          />
        )}
        <div className="flex flex-col gap-[26px]">
          <div className="flex items-center gap-[12px] des:justify-center">
            <img src={profile} alt="" className="w-[53px] h-[47px]" />
            {desktop ? null : (
              <span className="text-[#152C5E] text-[18px] font-semibold">
                პროფილი
              </span>
            )}
          </div>
          <div className="flex items-center gap-[12px] des:justify-center">
            <img src={ideas} alt="" className="w-[53px] h-[47px]" />
            {desktop ? null : (
              <span className="text-[#152C5E] text-[18px] font-semibold">
                იდეები
              </span>
            )}
          </div>
          <div className="flex items-center gap-[12px] des:justify-center">
            <img src={jobs} alt="" className="w-[53px] h-[47px]" />
            {desktop ? null : (
              <span className="text-[#152C5E] text-[18px] font-semibold">
                საქმიანობები
              </span>
            )}
          </div>
          <div className="flex items-center gap-[12px] des:justify-center">
            <img src={notifications} alt="" className="w-[53px] h-[47px]" />
            {desktop ? null : (
              <span className="text-[#152C5E] text-[18px] font-semibold">
                შეტყობინებები
              </span>
            )}
          </div>
          <div className="flex items-center gap-[12px] des:justify-center">
            <img src={parameters} alt="" className="w-[53px] h-[47px]" />
            {desktop ? null : (
              <span className="text-[#152C5E] text-[18px] font-semibold">
                პარამეტრები
              </span>
            )}
          </div>
          <div className="flex items-center gap-[12px] des:justify-center">
            <img src={exit} alt="" className="w-[53px] h-[47px]" />
            {desktop ? null : (
              <span className="text-[#152C5E] text-[18px] font-semibold">
                გასვლა
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
