import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { fetchUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/actions";

export default async function SingleUserPage({ params }) {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <lable>Username</lable>
          <input type="text" name="username" placeholder={user.username} />

          <lable>Email</lable>
          <input type="email" name="email" placeholder={user.email} />

          <lable>Password</lable>
          <input type="password" name="password" />

          <lable>Phone</lable>
          <input type="text" name="Phone" placeholder={user.phone} />

          <lable>Address</lable>
          <input type="text" name="Address" placeholder={user.address} />

          <lable>Is Admin?</lable>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>

          <lable>Is Active?</lable>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
