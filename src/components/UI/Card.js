import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-image"]}>
        <img src="https://dummyimage.com/600x400/000/fff" alt="Card Image" />
      </div>
      <div className={styles["card-content"]}>
        <div className={styles["card-header"]}>
          <h2 className={styles["card-title"]}>{props.title}</h2>
          <p className={styles["card-price"]}>{props.price}</p>
        </div>
        <p className={styles["card-description"]}>{props.description}</p>
        <button className={styles["card-button"]}>
          <i className="fas fa-motorcycle"></i>Order a Delivery
        </button>
      </div>
    </div>
  );
}
