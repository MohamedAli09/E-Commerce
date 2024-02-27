import React from "react";
import styles from "./NotFound.module.css";
import NotFoundImg from "../../Assets/Imgs/233.jpg";

export default function NotFound() {
  return (
    <div>
      <div className={`${styles.minHeight}`}>
           <img src={NotFoundImg} alt="" />
       </div>
    </div>
  );
}
