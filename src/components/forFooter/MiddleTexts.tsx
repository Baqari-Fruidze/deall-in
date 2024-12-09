import { useMediaQuery } from "@uidotdev/usehooks";

export default function MiddleTexts() {
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1440px)"
  );
  return (
    <div className="flex flex-col gap-[29px] items-center des:flex-row des:gap-[6px]">
      <span className="text-[15px] font-semibold  text-[#fff] underline underline-offset-8 des:no-underline ">
        Products
      </span>
      {isExtraLargeDevice ? (
        <hr className="bg-[#C7D9FF] w-[2px] h-[18px]" />
      ) : null}
      <span className="text-[15px] font-semibold  text-[#fff] underline underline-offset-8 des:no-underline">
        Our Story
      </span>
      {isExtraLargeDevice ? (
        <hr className="bg-[#C7D9FF] w-[2px] h-[18px]" />
      ) : null}
      <span className="text-[15px] font-semibold   text-[#fff] underline underline-offset-8 des:no-underline">
        Get in Touch
      </span>
      {isExtraLargeDevice ? (
        <hr className="bg-[#C7D9FF] w-[2px] h-[18px]" />
      ) : null}
      <span className="text-[15px] font-semibold text-[#fff] underline underline-offset-8 des:no-underline">
        Privacy
      </span>
    </div>
  );
}
