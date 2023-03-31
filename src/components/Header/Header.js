import React from "react";
import Button from "../UI/Button";
import styles from "./Header.module.css";
import NavLink from "./NavLink";

export default function () {
  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles.logo}>
        <img src="https://dummyimage.com/100x50/000/fff" alt="Company Logo" />
      </div>
      <div className={styles.link}>
        <NavLink href="#about-sction" active={true}>
          About
        </NavLink>
        <NavLink href="#contact-sction">Menu</NavLink>
        <NavLink href="#about-sction">Testimonials</NavLink>
        <Button size="1" version="">
          Order now
        </Button>
      </div>
    </nav>
  );
}
