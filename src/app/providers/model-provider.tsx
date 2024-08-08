"use client";

import { useEffect, useState } from "react";
import RegisterModel from "../model/RegisterModel";
import LoginModel from "../model/LoginModel";

export const ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <LoginModel />
      <RegisterModel />
    </>
  );
};
