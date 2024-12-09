import facebookLogo from "../../../public/socialsIcons/facebook-circle-fill.svg";
import youtubeLogo from "../../../public/socialsIcons/youtube-fill.svg";
import instagranLogo from "../../../public/socialsIcons/instagram-fill.svg";

export default function Socials() {
  return (
    <div className="flex flex-col gap-[16px] items-center">
      <div className="flex items-center gap-[36px]">
        <img src={facebookLogo} alt="" className="w-[14px] h-[14px]" />
        <img src={youtubeLogo} alt="" className="w-[16px] h-[16px]" />
        <img src={instagranLogo} alt="" className="w-[14px] h-[14px]" />
      </div>
      <span className="text-[15px] font-semibold text-[#C7D9FF] underline underline-offset-8 text-decoration-thickness-2">
        info@dealin.ge
      </span>
    </div>
  );
}
