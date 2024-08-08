"use client";

import { useModal } from "@/app/hooks/use-modal-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginModel = () => {

  const { isOpen, onClose, type, signature } = useModal();
  const [currentUser, setCurrerntUser] = useState<any>("");
  const fm = signature;

  const isModalOpen = isOpen && type === "AuthUser";

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    try {
      console.log("google log")

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const gh = async () => {
      console.log("usering effecing")
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

            {/* install ethers. */}

          
        </form>
      </dialog>
    </div>
  );
};

export default LoginModel;
