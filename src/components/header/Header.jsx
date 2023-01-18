import React from "react";
import styles from "./header.module.css";
import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "500" });

function Header() {
  return (
    <div className={styles.header}>
      <img src="/logoWhite.png" alt="" />
      <div className={styles.text}>
        <p className={ubuntu.className}>Category Download</p>
      </div>
      <div className={styles.bell}>
        <img src="/bell.svg" alt="" />
        <div className={styles.bellCount}>
          <p className={ubuntu.className}>5</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
