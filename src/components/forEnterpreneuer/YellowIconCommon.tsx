import yellowIcon from "/forDashboard/dashboardIcon.svg";
import arrow from "/forDashboard/arrowDashboard.svg";

export default function YellowIconCommon() {
  return (
    <div className="bg-[#C7D9FF]">
      <div className="flex items-center gap-[23px] w-[83px] h-[53px] bg-[#fff] rounded-br-[10px] px-[8px]">
        <img src={yellowIcon} alt="" className="w-[28px] h-[31px]" />
        <img src={arrow} alt="" className="w-[30px] h-[20px] -rotate-90" />
      </div>
    </div>
  );
}
