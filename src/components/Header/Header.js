import React from "react";
import Button from "../UI/Button";
import styles from "./Header.module.css";
import NavLink from "./NavLink";
import logoImage from "../../images/Logo.svg";

export default function () {
  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles.logo}>
        <img src={logoImage} alt="Company Logo" />
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
