import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer class={styles["footer"]}>
      <div class={styles["footer-wrapper"]}>
        <div class={styles["logo-column"]}>
          <img src="company-logo.png" alt="Company Logo" />
          <p>A short description of the company.</p>
          <div class={styles["social-icons"]}>
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class={styles["about-column"]}>
          <h4>About</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class={styles["community-column"]}>
          <h4>Community</h4>
          <ul>
            <li>
              <a href="#">Forums</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
          </ul>
        </div>
        <div class={styles["socials-column"]}>
          <h4>Socials</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className={styles["line-break"]} />
      <div class={styles["footer-info"]}>
        <p>
          &copy; 2023 <span>Little Lemon Restaurant.</span> All Rights Reserved.
        </p>
        <div class={styles["footer-links"]}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}
