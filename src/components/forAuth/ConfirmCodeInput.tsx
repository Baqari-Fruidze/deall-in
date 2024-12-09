"use client";
import React, { useState } from "react";
// import Congrats from "./Congrats";
import { ILogin } from "../../types/Auth";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../utils/contexts/ContextProvider";
// import { useTranslation } from "react-i18next";

export default function ConfirmCodeInputForLogin({
  email,
  password,
}: {
  email: string;
  user: ILogin;
  password: string;
}) {
  const navigate = useNavigate();
  // const { t } = useTranslation("confirm");
  const [value, setValue] = useState("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [erori, setErori] = useState<boolean>(false);
  // const [success, setSuccess] = useState<boolean>(false);
  // const path = usePathname();
  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const { enterpreneuerData, setEnterpreneuerData } = MyContext();
  const inputData = async () => {
    setClicked(true);

    try {
      const res = await fetch(
        "https://dealin-api-production.up.railway.app/api/dj-rest-auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            code: value,
          }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setEnterpreneuerData(data);

        navigate("/EnterpreneuerDashboard");
      } else {
        setErori(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErori(true);
    }
  };
  console.log(enterpreneuerData);

  return (
    // <>
    //   {success ? (
    //     <Congrats setSuccess={setSuccess} />
    //   ) : (
    <div className="bg-[#152C5E] px-[16px] flex flex-col gap-8 items-center w-[400px] h-fit p-5 rounded-xl mt-[50px] relative">
      <h1 className="text-white text-[20px] font-normal text-center">
        Please enter the code, sent to your email
      </h1>
      <input
        type="text"
        className={`inputsINStart w-full ${
          value.length === 0 && clicked
            ? "border-2 border-red-500"
            : "border-2 border-[#d9a34a]"
        } `}
        onChange={inputValue}
      />
      <button
        className="bg-white py-[14px] text-[#152C5E] text-[18px] font-medium w-full rounded-lg"
        onClick={inputData}
      >
        confirm
      </button>
      {erori ? (
        <span className="text-red-500 text-[15px] absolute top-[135px] left-5 des:top-[143px]">
          Please enter valid code
        </span>
      ) : null}
    </div>
    //   )}
    // </>
  );
}
