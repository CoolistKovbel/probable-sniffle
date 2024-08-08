"use client";

import { useEffect, useState } from "react";
import LoginModel from "../model/loginModel";

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
    </>
  );
};
