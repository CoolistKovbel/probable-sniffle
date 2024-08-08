"use client";

import { useModal } from "@/app/hooks/use-modal-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createUser } from "../database/UserRoute";

const RegisterModel = () => {
  const { isOpen, onClose, type, signature } = useModal();
  const [handleToggle, setHandleToggle] = useState<any>("");
  const fm = signature;

  const isModalOpen = isOpen && type === "RegUser";

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const metaAddy = e.target[0].value;
    const metaUser = e.target[1].value;

    try {
      console.log("powerrrr", metaAddy, metaUser);

      const gg = await createUser(metaUser, metaAddy, 14);

      console.log(gg);

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
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <div className="flex items-start justify-between gap-5 flex-col bg-[#444] p-4 text-white drop-shadow-lg rounded">
            {/* install ethers. */}
            <label
              htmlFor="metaAddress"
              className="flex items-center justify-between w-full"
            >
              <span>Address: </span>
              <input
                type="text"
                placeholder="enter address"
                className="p-2 bg-[#111] rounded drop-shadow-lg"
                id="metaAddress"
                name="metaAddress"
              />
            </label>

            <label
              htmlFor="username"
              className="flex items-center justify-between w-full"
            >
              <span>Username: </span>
              <input
                type="text"
                placeholder="enter username"
                className="p-2 bg-[#111] rounded drop-shadow-lg"
                id="username"
                name="username"
              />
            </label>

            <label
              htmlFor=""
              className="flex items-center justify-between w-full"
            >
              <span className="flex items-center justify-between w-full">
                Signature:{" "}
                <span
                  onClick={() => {
                    console.log("getting sig");
                    setHandleToggle((prev: any) => !prev);
                  }}
                >
                  💡
                </span>
              </span>
              {handleToggle && (
                <input
                  type="text"
                  value=""
                  disabled
                  className="p-2 bg-[#111] rounded drop-shadow-lg"
                />
              )}
            </label>

            <button className="mt-4 uppercase p-3 font-bold text-sm rounded hover:drop-shadow-lg bg-[#798] hover:bg-[#458]">
              submit
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default RegisterModel;
