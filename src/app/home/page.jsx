"use client";

import React from "react";
import styles from "./home.module.css";
import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({ weight: "500" });
function home() {
  return (
    <div className={styles.home}>
      <h1 className={ubuntu.className}>
        The social media cards would be displayed here
      </h1>
    </div>
  );
}

export default home;
