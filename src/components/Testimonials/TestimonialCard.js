import React from "react";
import styles from "./TestimonialCard.module.css";
export default function TestimonialCard(props) {
  return (
    <div class={styles["testimonial-card"]}>
      <div class={styles["testimonial-image"]}>
        <img src={props.image} alt="Customer 1" />
      </div>
      <div class={styles["testimonial-content"]}>
        <p class={styles["testimonial-comment"]}>{props.comment}</p>
        <p class={styles["testimonial-name"]}>{props.name}</p>
        <div class={styles["testimonial-rating"]}>
          {Array.from({ length: 5 }, (_, index) => {
            if (props.rating) {
              return (
                <span style={{ color: "#f4ce14" }} class="star-icon">
                  &#9733;
                </span>
              );
            } else {
            }
          })}
        </div>
      </div>
    </div>
  );
}
