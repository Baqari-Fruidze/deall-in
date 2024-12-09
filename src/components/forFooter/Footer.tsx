import MiddleTexts from "./MiddleTexts";
import Socials from "./Socials";
import logo from "/dealinLogo.svg";

export default function Footer() {
  return (
    <div className="bg-[#152C5E] flex flex-col items-center gap-[121px] pt-[52px] pb-[36px]">
      <img src={logo} alt="" className="w-[168px] h-[31px]" />
      <MiddleTexts />
      <Socials />
    </div>
  );
}
