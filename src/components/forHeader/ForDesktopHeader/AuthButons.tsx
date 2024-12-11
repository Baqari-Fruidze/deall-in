import translateLogo from "/forBurger/global-line.svg";
import { Link } from "react-router-dom";

export default function AuthButons() {
  return (
    <div className="flex items-center gap-[22px]">
      <div className="w-[97px] h-[37px] bg-[#C7D9FF] flex items-center justify-center rounded-md">
        <Link to={"/register"} className="text-[#152C5E] font-medium">
          Register
        </Link>
      </div>
      <div className="w-[97px] h-[37px]  border-[1px] border-solid border-[#C7D9Ff] flex items-center justify-center rounded-md">
        <Link to={"/login"} className="text-[#C7D9FF] font-medium">
          Sign In
        </Link>
      </div>
      <div className="w-[42px] h-[37px]  border-[1px] border-solid border-[#C7D9Ff] flex items-center justify-center rounded-md">
        <img src={translateLogo} alt="" className="w-[34px] h-[33px]" />
      </div>
    </div>
  );
}
