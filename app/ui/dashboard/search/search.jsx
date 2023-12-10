"use client";
import React from "react";
import styles from "./search.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set("q", e.target.value);
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <p>ICON</p>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
}
