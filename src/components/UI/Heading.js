import React from "react";
import styles from "./Heading.module.css";

export default function Heading(props) {
  return (
    <h1 style={{ ...props.style }} className={styles["heading"]}>
      {props.children}
    </h1>
  );
}
