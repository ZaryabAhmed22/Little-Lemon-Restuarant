import React from "react";
import Button from "../UI/Button";
import Heading from "../UI/Heading";
import SubHeading from "../UI/SubHeading";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-content"]}>
        <Heading>Little Lemon Restaurant</Heading>
        <SubHeading>Chicago</SubHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
          metus eget est convallis mattis ac vitae erat. Sed finibus sit amet
          mauris non convallis. Etiam vitae nisl eget dolor dictum hendrerit.
        </p>
        <Button
          version="transparent"
          size="2"
          className={styles["action-button"]}
        >
          Learn More
        </Button>
      </div>
      <div className={styles["hero-image"]}>
        <img
          src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Hero Image"
        />
      </div>
    </section>
  );
}
