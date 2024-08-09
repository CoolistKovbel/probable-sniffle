"use client";

import { useModal } from "@/app/hooks/use-modal-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginModel = () => {
  const { isOpen, onClose, type, signature } = useModal();
  const fm = signature;

  const isModalOpen = isOpen && type === "AuthUser";

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("google log");

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const gh = async () => {
      console.log("usering effecing");
    };

    gh();
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <dialog
        open={isModalOpen}
        className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <form onSubmit={onSubmit}>
          <h2 className="text-2xl font-bold mb-4">Sign in</h2>

          <div className="flex items-start justify-between flex-col bg-[#444] p-4 text-white drop-shadow-lg rounded">
            <label htmlFor="metaAddress" className="flex items-center justify-between w-full">
              <span className="text-xl font-bold">Address: </span>
              <input
                type="text"
                placeholder="enter address"
                id="metaAddress"
                name="metaAddress"
                className="p-2 bg-[#111] rounded drop-shadow-lg"
              />
            </label>

            <button className="mt-4 uppercase p-3 font-bold text-sm rounded hover:drop-shadow-lg bg-[#798] hover:bg-[#458]">submit</button>
          </div>
          
        </form>
      </dialog>
    </div>
  );
};

export default LoginModel;
