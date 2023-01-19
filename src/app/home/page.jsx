"use client";

import React from "react";
import styles from "./home.module.css";
import { Ubuntu } from "@next/font/google";
import Card from "@/components/card/Card";

const ubuntu = Ubuntu({ weight: "500" });
function home() {
  const socialMedia = [
    "instagram",
    "whatsapp",
    "facebook",
    "twitter",
    "tiktok",
    "youtube",
  ];
  return (
    <div className={styles.home}>
      <h1 className={ubuntu.className}></h1>
      <div className={styles.socials}>
        {socialMedia.map((e) => (
          <Card data={e} />
        ))}
      </div>
    </div>
  );
}

export default home;
