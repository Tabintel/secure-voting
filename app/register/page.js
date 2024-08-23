"use client";
import Register from "./_component";
import { useState, useEffect } from "react";
export default function Root() {
  const [docEnv, setDocEnv] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setDocEnv(true);
    }
  }, []);
  return <div className="relative">{docEnv && <Register />}</div>;
}
