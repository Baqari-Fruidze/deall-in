import arrow from "/forDashboard/arrowDashboard.svg";
import profile from "/forDashboard/profile.svg";
import ideas from "/forDashboard/ideas.svg";
import jobs from "/forDashboard/deals.svg";
import notifications from "/forDashboard/notifications.svg";
import parameters from "/forDashboard/parameters.svg";
import exit from "/forDashboard/exit.svg";

export default function LeftSideDashboard() {
  return (
    <div className="w-screen min-h-screen bg-[rgba(0,0,0,0.4)] absolute z-30">
      <div className="w-[259px] bg-white flex flex-col gap-[20px] px-[23px] z-50 rounded-br-[30px] py-[30px]">
        <img
          src={arrow}
          alt=""
          className="w-[30px] h-[20px] rotate-90 self-end"
        />
        <div className="flex flex-col gap-[26px]">
          <div className="flex items-center gap-[12px]">
            <img src={profile} alt="" className="w-[53px] h-[47px]" />
            <span className="text-[#152C5E] text-[18px] font-semibold">
              პროფილი
            </span>
          </div>
          <div className="flex items-center gap-[12px] ">
            <img src={ideas} alt="" className="w-[53px] h-[47px]" />
            <span>იდეები</span>
          </div>
          <div className="flex items-center gap-[12px]">
            <img src={jobs} alt="" className="w-[53px] h-[47px]" />
            <span>საქმიანობები</span>
          </div>
          <div className="flex items-center gap-[12px]">
            <img src={notifications} alt="" className="w-[53px] h-[47px]" />
            <span>შეტყობინებები</span>
          </div>
          <div className="flex items-center gap-[12px]">
            <img src={parameters} alt="" className="w-[53px] h-[47px]" />
            <span>პარამეტრები</span>
          </div>
          <div className="flex items-center gap-[12px]">
            <img src={exit} alt="" className="w-[53px] h-[47px]" />
            <span>გასვლა</span>
          </div>
        </div>
      </div>
    </div>
  );
}
