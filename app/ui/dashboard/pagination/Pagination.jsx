import React from "react";
import styles from "@/app/ui/dashboard/pagination/pagination.module.css";

export default function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button} disabled>
        Next
      </button>
    </div>
  );
}
