import facebookLogo from "/socialsIcons/facebook-circle-fill.svg";
import youtubeLogo from "/socialsIcons/youtube-fill.svg";
import instagranLogo from "/socialsIcons/instagram-fill.svg";

export default function Socials() {
  return (
    <div className="flex flex-col gap-[16px] items-center">
      <div className="flex items-center gap-[36px]">
        <img
          src={facebookLogo}
          alt=""
          className="w-[14px] h-[14px] cursor-pointer"
        />
        <img
          src={youtubeLogo}
          alt=""
          className="w-[16px] h-[16px] cursor-pointer"
        />
        <img
          src={instagranLogo}
          alt=""
          className="w-[14px] h-[14px] cursor-pointer"
        />
      </div>
      <span className="text-[15px] font-semibold text-[#C7D9FF] underline underline-offset-8 text-decoration-thickness-2 cursor-pointer">
        info@dealin.ge
      </span>
    </div>
  );
}
