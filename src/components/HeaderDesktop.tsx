import logo from "/test.png";

export default function HeaderDesktop() {
  return (
    <div className="flex justify-between items-center px-[36px] py-[18px] bg-[#152C5E]">
      <img src={logo} alt="" className="  w-[190px]" />
    </div>
  );
}
