"use client";
import React from "react";
import styles from "./sidebar.module.css";

// import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { HiInboxStack } from "react-icons/hi2";
import { HiMiniUsers } from "react-icons/hi2";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { HiMiniCog8Tooth } from "react-icons/hi2";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";

export default function NestedList() {
  return (
    <>
      <div className={styles.user}>
        <image
          className={styles.userImage}
          src="/IMG_7570.JPG"
          alt="user iamge"
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <div component="div" id="nested-list-subheader">
            Pages
          </div>
        }
      >
        <ListItemButton className={styles.container}>
          <div>
            <HiInboxStack />
          </div>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton className={styles.container}>
          <div>
            <HiMiniUsers />
          </div>
          <ListItemText primary="Users" />
        </ListItemButton>
        <ListItemButton className={styles.container}>
          <div>
            <HiMiniShoppingBag />
          </div>
          <ListItemText primary="Products" />
        </ListItemButton>
        <ListItemButton className={styles.container}>
          <div>
            <HiMiniCurrencyDollar />
          </div>
          <ListItemText primary="Transaction" />
        </ListItemButton>
      </List>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <div component="div" id="nested-list-subheader">
            Analitycs
          </div>
        }
      >
        <ListItemButton className={styles.container}>
          <div>
            <HiMiniShoppingBag />
          </div>
          <ListItemText primary="Revnue" />
        </ListItemButton>

        <ListItemButton className={styles.container}>
          <div>
            <HiMiniSquare3Stack3D />
          </div>
          <ListItemText primary="Transaction" />
        </ListItemButton>

        <ListItemButton className={styles.container}>
          <div>
            <HiMiniUsers />
          </div>
          <ListItemText primary="Teams" />
        </ListItemButton>
      </List>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <div component="div" id="nested-list-subheader">
            User
          </div>
        }
      >
        <ListItemButton className={styles.container}>
          <div>
            <HiMiniCog8Tooth />
          </div>
          <ListItemText primary="Setting" />
        </ListItemButton>

        <ListItemButton className={styles.container}>
          <div>
            <HiMiniChatBubbleLeftEllipsis />
          </div>
          <ListItemText primary="Help" />
        </ListItemButton>

        <ListItemButton className={styles.container}>
          <div>
            <HiMiniArrowLeftOnRectangle />
          </div>
          <ListItemText primary="Log out" />
        </ListItemButton>
      </List>
    </>
  );
}
