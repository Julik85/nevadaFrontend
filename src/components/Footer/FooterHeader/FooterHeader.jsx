//global imports
//local imports
import React from "react";
import { Logo } from "@/components/Icons";
import FooterForm from "./FooterForm/FooterForm";

export default function Footer() {
  return (
    <div className="container flex justify-between py-[48px]">
      <div>
        <a className="cursor-pointer flex gap-[8px] items-center" href="#">
          <Logo />
          <div>
            <p className="text-[18px] font-bold text-mainWhite leading-[20px]">
              Prime Preparation Center
            </p>
            <p className="text-[18px] text-captionalGrey leading-[24px]">
              Warehouse
            </p>
          </div>
        </a>
      </div>
      <FooterForm />
    </div>
  );
}
