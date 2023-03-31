import React from "react";
import Heading from "../UI/Heading";
import SubHeading from "../UI/SubHeading";
import styles from "./History.module.css";

export default function History() {
  return (
    <section className={styles["history-section"]}>
      <div className={styles["history-content"]}>
        <Heading style={{ color: "#495e57" }}>Little Lemon</Heading>
        <SubHeading style={{ color: "#444444" }}>Chicago</SubHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          aliquam, tortor eu cursus imperdiet, tortor justo interdum purus, eu
          congue tellus dolor id sapien. Sed vel nibh bibendum, blandit augue
          vel, lacinia enim.
        </p>
        <p>
          Phasellus sagittis ante sit amet dui dignissim rhoncus. Nullam a
          libero enim. Nam hendrerit, erat nec aliquet blandit, velit nibh
          auctor nibh, sit amet luctus justo velit eu tortor. Phasellus sagittis
          ante sit amet dui dignissim rhoncus. Nullam a libero enim. Nam
          hendrerit, erat nec aliquet blandit, velit nibh auctor nibh, sit amet
          luctus justo velit eu tortor.
        </p>
      </div>
      <div className={styles["history-images"]}>
        {/* <img
          src="history-image1.jpg"
          alt="History Image 1"
          class="history-image-1"
        />
        <img
          src="history-image2.jpg"
          alt="History Image 2"
          class="history-image-2"
        /> */}
        <div className={styles["history-image-box-1"]}></div>
        <div className={styles["history-image-box-2"]}></div>
      </div>
    </section>
  );
}
