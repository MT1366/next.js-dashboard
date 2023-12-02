import React from "react";
import styles from "@/app/ui/login/login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" id="username" />
        <input type="text" placeholder="password" id="password" />
        <button>Login</button>
      </form>
    </div>
  );
}
