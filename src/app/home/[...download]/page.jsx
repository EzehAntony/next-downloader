"use client";

import React, { useEffect, useState } from "react";
import styles from "./download.module.css";
import { Ubuntu } from "@next/font/google";
import { twitter } from "social_media_downloader";

const ubuntu = Ubuntu({ weight: "400" });

function page({ params }) {
  const [image, setImage] = useState(null);
  const [input, setInput] = useState("");
  const name = params.download[1];

  useEffect(() => {
    switch (true) {
      case name === "instagram":
        setImage("/instagram.svg");
        break;
      case name === "whatsapp":
        setImage("/whatsapp.svg");
        break;
      case name === "twitter":
        setImage("/twitter.svg");
        break;
      case name === "youtube":
        setImage("/youtube.svg");
        break;
      case name === "facebook":
        setImage("/facebook.svg");
        break;
      case name === "tiktok":
        setImage("/tiktok.svg");
        break;
    }
  }, []);

  const instagram = () => {
    console.log("validating instagram");
  };
  const facebook = () => {
    console.log("validating facebook");
  };
  const tiktok = () => {
    console.log("validating tiktok");
  };
  const whatsapp = () => {
    console.log("validating whatsapp");
  };
  const twitter = () => {
    console.log("validating twitter");
  };
  const youtube = () => {
    console.log("validating youtube");
  };

  const validate = () => {
    if (input !== "") {
      switch (true) {
        case name === "instagram":
          instagram();
          break;
        case name === "whatsapp":
          whatsapp();
          break;
        case name === "twitter":
          twitter();
          break;
        case name === "youtube":
          youtube();
          break;
        case name === "facebook":
          facebook();
          break;
        case name === "tiktok":
          tiktok();
          break;
      }
    }
  };

  return (
    <div className={styles.download}>
      <div className={styles.top}>
        {image && <img src={image} alt="" />}
        <h1 className={ubuntu.className}>{name}</h1>
      </div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder={`paste ${name} link here`}
      />
      <button className={ubuntu.className} onClick={validate}>
        Downlaod
      </button>
    </div>
  );
}

export default page;
