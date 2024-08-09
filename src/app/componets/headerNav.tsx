"use client";

import { useModal } from "../hooks/use-modal-store";

const HeaderNav = () => {
  const { onOpen } = useModal();

  const loginFunc = async () => {
    try {
      console.log("loggin");
      onOpen("AuthUser");
    } catch (error) {
      console.log("error");
    }
  };

  // Registers fgunctions
  const registerFunc = async () => {
    try {
      console.log("register");
      onOpen("RegUser");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <nav className="w-[30%] flex items-center  rounded justify-around drop-shadow-lg bg-[#444] ">
      <button
        onClick={loginFunc}
        className="transition delay-200 ease-in 500ms p-2 hover:drop-shadow-lg hover:bg-[#242] p-2"
      >
        Login
      </button>
      <button
        onClick={registerFunc}
        className="transition delay-200 ease-in 500ms p-2 hover:drop-shadow-lg hover:bg-[#465] p-2"
      >
        Register
      </button>
    </nav>
  );
};

export default HeaderNav;
