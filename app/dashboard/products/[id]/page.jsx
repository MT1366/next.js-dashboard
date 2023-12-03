import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

export default function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        iPhone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <lable>Title</lable>
          <input type="text" name="title" placeholder="John Doe" />

          <lable>Price</lable>
          <input type="number" name="price" placeholder="$1230" />

          <lable>Stock</lable>
          <input type="number" name="stock" placeholder="23" />

          <lable>Color</lable>
          <input type="text" name="color" placeholder="red" />

          <lable>Size</lable>
          <input type="text" name="size" placeholder="Medium" />

          <lable>Category</lable>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>

          <lable>Description</lable>
          <textarea
            name="desc"
            id="desc"
            placeholder="description"
            rows="10"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
