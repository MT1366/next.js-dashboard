import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

export default function SingleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <lable>Username</lable>
          <input type="text" name="username" placeholder="John Doe" />

          <lable>Email</lable>
          <input type="email" name="email" placeholder="JohnDoe@gmail.com" />

          <lable>Password</lable>
          <input type="password" name="password" />

          <lable>Phone</lable>
          <input type="text" name="Phone" placeholder="+9128877805" />

          <lable>Address</lable>
          <input type="text" name="Address" placeholder="Tehran" />

          <lable>Is Admin?</lable>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <lable>Is Active?</lable>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
