"use client";

import { useModal } from "../hooks/use-modal-store";

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

  return (
    <header className="flex items-center p-4 bg-[#444] drop-shadow-lg rounded justify-between w-full ">
      <h1 className="text-2xl font-bold">SimpleGamish</h1>
      <nav className="w-[30%] flex items-center justify-between drop-shadow-lg bg-[#444] p-2">
        <button onClick={loginFunc} className="hover:drop-shadow-lg">
          Login
        </button>
        <button onClick={registerFunc} className="hover:drop-shadow-lg">
          Register
        </button>
      </nav>
    </header>
  );
};

export default HeaderMain;
