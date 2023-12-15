"use client";
import React from "react";
import styles from "./sidebar.module.css";

import Image from "next/image";
import MenuLink from "./menuLink/MenuLink";

import { HiInboxStack } from "react-icons/hi2";
import { HiMiniUsers } from "react-icons/hi2";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { HiMiniCog8Tooth } from "react-icons/hi2";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import Dashboard from "@/app/dashboard/page";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <HiInboxStack />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <HiMiniUsers />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <HiMiniShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <HiMiniCurrencyDollar />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <HiMiniSquare3Stack3D />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <HiMiniCog8Tooth />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <HiMiniChatBubbleLeftEllipsis />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <HiMiniCurrencyDollar />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <HiMiniSquare3Stack3D />,
      },
    ],
  },
];

export default function NestedList() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          width="50"
          height="20"
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logOut}>
        <p>ICON</p>
        Logout
      </button>
    </div>
  );
}
