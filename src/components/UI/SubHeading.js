import React from "react";
import styles from "./SubHeading.module.css";

export default function SubHeading(props) {
  return (
    <h5 className={styles["sub-heading"]} style={{ ...props.style }}>
      {props.children}
    </h5>
  );
}
