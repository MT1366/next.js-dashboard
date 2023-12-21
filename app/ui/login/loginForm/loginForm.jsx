"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useState } from "react";

function LoginForm() {
  const [err, setErr] = useState();

  const hangleLogin = async (formData) => {
    const data = await authenticate(formData);
    data.error && setErr(data.error);
  };

  return (
    <form action={hangleLogin} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {err && err}
    </form>
  );
}

export default LoginForm;
