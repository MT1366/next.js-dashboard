import React from "react";
import styles from "./card.module.css";

export default function Card() {
  return (
    <div className={styles.container}>
      <p>ICON</p>
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.723</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> More than previouse week
        </span>
      </div>
    </div>
  );
}
