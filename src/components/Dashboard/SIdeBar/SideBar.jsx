"use client";
import { CloseMenuIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import React from "react";

function SideBar({ toggleSideBar, children }) {
  return (
    <motion.div
      className="fixed top-0 left-0
      h-full w-full px-[9px] py-[16px]
      bg-mainBlack
  "
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        type: "tween",
        stiffness: 100,
      }}
    >
      SideBar
      <button
        className="w-[24px] h-[24px] absolute top-[24px] left-[12px] flex items-center justify-center"
        onClick={toggleSideBar}
        type="button"
      >
        <CloseMenuIcon />
      </button>
      <div> {children}</div>
    </motion.div>
  );
}

export default SideBar;
