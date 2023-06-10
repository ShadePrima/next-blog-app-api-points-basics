"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/prifile";

  return (
    <div onClick={() => signIn("google", { callbackUrl })}>
      <button>Sign In with Google</button>
    </div>
  );
};

export default GoogleButton;
