import React from "react";
import { DarkLogo } from "../Icons";
import NavBar from "./NavBar";
import { LanguageSwitcher } from "../UIElements";

function DBHeader() {
  return (
    <header
      className="
    fixed top-0 left-0
    bg-mainWhite w-full 
    pt-[16px] pb-[12px] 
     text-mainBlack
    "
    >
      <div className="container md:flex justify-between">
        <a
          href="#"
          className="flex gap-[5px] items-center justify-start
          leading-[19px] text-[18px]  font-bold
        mb-[12px] "
        >
          <DarkLogo />
          Prime Preparation Center
        </a>
        <div className="flex items-center justify-center lg:gap-[24px]">
          <p className="hidden md:block md:leading-[16px] font-medium	text-[16px] md:mr-[24px]">
            Main
          </p>
          <div className="hidden md:block md:mr-[37px]">
            <LanguageSwitcher page="db" />
          </div>
          <button
            className="hidden lg:block
         bg-captionBlue text-mainWhite text-[16px] font-bold  leading-[16px]
         w-[179px] h-[48px] rounded-[8px]"
            type="button"
          >
            Logout
          </button>
          <div className="lg:hidden">
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default DBHeader;
