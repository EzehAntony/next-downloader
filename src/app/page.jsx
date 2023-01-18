"use client";

import Image from "next/image";
import { Ubuntu } from "@next/font/google";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import styles from "./splash.module.css";

const ubuntu = Ubuntu({ weight: "500" });

export default function splash() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 3000);
  }, []);

  return (
    <div className={styles.splash}>
      <img src={"/logoWhite.png"} alt="logo" />
      <h3 className={ubuntu.className}>Next downloader</h3>
    </div>
  );
}
