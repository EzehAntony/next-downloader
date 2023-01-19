import React from "react";
import styles from "./card.module.css";
import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({ weight: "500" });

function Card({ data }) {
  return <div className={styles.card}><h3 className={ubuntu.className}>{data}</h3></div>;
}

export default Card;
