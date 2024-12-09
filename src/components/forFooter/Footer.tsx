import MiddleTexts from "./MiddleTexts";
import Socials from "./Socials";
import logopng from "/test.png";

export default function Footer() {
  return (
    <div className="bg-[#152C5E] flex flex-col items-center  gap-[121px] pt-[52px] pb-[36px] md:flex-row md:px-[18px] md:items-start md:justify-between md:gap-0 des:px-[39px] des:py-[35px] des:items-center">
      <img src={logopng} alt="" className="w-[168px]" />
      <MiddleTexts />
      <Socials />
    </div>
  );
}
