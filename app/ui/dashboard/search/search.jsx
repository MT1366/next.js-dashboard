import React from "react";
import styles from "./search.module.css";

export default function Search({ placeholder }) {
  return (
    <div className={styles.container}>
      <p>ICON</p>
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
}
