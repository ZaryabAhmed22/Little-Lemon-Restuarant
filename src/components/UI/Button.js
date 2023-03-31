import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      style={{ ...props.style }}
      role={props.role}
      className={`${
        props.size === "2" ? styles["button-large"] : styles["button-small"]
      } ${
        props.version === "transparent"
          ? styles["button-transparent"]
          : styles["button-fill"]
      }`}
    >
      {props.children}
    </button>
  );
}
