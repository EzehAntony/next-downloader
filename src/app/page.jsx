"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import styles from "./splash.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function splash() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 3000);
  }, []);

  return (
    <div className={styles.splash}>
      <img src={"/logo.png"} alt="logo" />
    </div>
  );
}
