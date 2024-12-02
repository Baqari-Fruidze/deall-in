"use client";
import { Link, useNavigate } from "react-router-dom";
export default function Congrats({
  setSuccess,
}: {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const foo = () => {
    setSuccess(false);
    navigate("/login");
  };
  return (
    <div className="bg-[#152C5E] max-w-[500px] h-fit py-[60px] px-[24px] flex flex-col items-center gap-[16px] rounded-lg mt-[50px]">
      <h1 className="text-[40px] text-white font-[600] w-[18ch] text-center">
        Thank you for registering with us! 🎉🎉
      </h1>
      <div className="flex gap-[16px] items-center max-w-[300px]  m-auto">
        <div className="flex items-center gap-[15px]">
          <span className="text-white text-[16px] font-normal">Go back to</span>
          <span
            className="text-white text-[17px] font-[600] underline underline-offset-4 cursor-pointer"
            onClick={() => foo()}
          >
            Log In
          </span>
        </div>
        <span className="text-white text-[16px] font-normal">or</span>
        <Link
          to={"/"}
          className="text-white text-[17px] font-[600] underline underline-offset-4 cursor-pointer"
        >
          Home page
        </Link>
      </div>
    </div>
  );
}
