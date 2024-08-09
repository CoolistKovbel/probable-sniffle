"use client";

import { createAdminDash } from "../database/AdminRoute";
import { useModal } from "../hooks/use-modal-store";
import HeaderNav from "./headerNav";

const HeaderMain = () => {

  const {onOpen} =  useModal()


  // Login functions
  const loginFunc = async () => {
    try {
      console.log("loggin");
      onOpen("AuthUser")
    } catch (error) {
      console.log("error");
    }
  };

  // Registers fgunctions
  const registerFunc = async () => {
    try {
      console.log("register");
      onOpen("RegUser")
    } catch (error) {
      console.log("error");
    }
  };

  const createBlock = async () => {
    await createAdminDash()
  }

  return (
    <>
      <header className="flex items-center p-4 bg-[#444] drop-shadow-lg rounded justify-between w-full">
        <h1 className="text-2xl font-bold">SimpleGamish</h1>

        <HeaderNav />
        

      </header>

      <div className="w-full flex justify-start mt-2">
        <button onClick={createBlock} className="bg-[#555] p-2 rounded drop-shadow-lg">createDash</button>
      </div>
    </>
  );
};

export default HeaderMain;
