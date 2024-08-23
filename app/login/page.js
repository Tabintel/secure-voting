"use client"
import Login from "./_components";
import { useState, useEffect } from "react";
export default function Root() {
  const [docEnv, setDocEnv] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setDocEnv(true);
    }
  }, []);
  return <div className="relative">{docEnv && <Login />}</div>;
}
