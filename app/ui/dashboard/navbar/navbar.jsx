"use client";
import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiMiniCubeTransparent } from "react-icons/hi2";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <HiMagnifyingGlass />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <HiMiniCubeTransparent />
        </div>
      </div>
    </div>
  );
}
