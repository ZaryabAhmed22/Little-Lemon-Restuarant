import React from "react";
import styles from "./NavLink.module.css";

export default function NavLink(props) {
  return (
    <a
      href={props.href}
      className={`${styles["nav-link"]} ${
        props.active === true ? styles["active"] : ""
      }`}
    >
      {props.children}
    </a>
  );
}
