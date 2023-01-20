import React from "react";
import styles from "./card.module.css";
import { Ubuntu } from "@next/font/google";
import { useRouter } from "next/navigation";

const ubuntu = Ubuntu({ weight: "500" });

function Card({ data }) {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      onClick={() => router.push(`/home/download/${data.name}`)}
    >
      <img src={data.img}></img>
      <h3 className={ubuntu.className}>{data.name}</h3>
    </div>
  );
}

export default Card;
