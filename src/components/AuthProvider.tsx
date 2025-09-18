"use client";

type Props = {
  children: React.ReactNode;
};

import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
