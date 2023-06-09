import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Heading from "../UI/Heading";
import SubHeading from "../UI/SubHeading";
import styles from "./About.module.css";
import dish1 from "../../images/dish1.jpg";
import dish2 from "../../images/dish2.jpg";
import dish3 from "../../images/greek salad.jpg";

export default function About() {
  const data = [
    {
      id: 1,
      title: "Sunday Special",
      price: "$19.99",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus sit amet mauris non convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus sit amet mauris non convallis.",
      image: dish1,
    },
    {
      id: 2,
      title: "Special Chieck Staek",
      price: "$29.99",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus sit amet mauris non convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus sit amet mauris non convallis.",
      image: dish2,
    },
    {
      id: 3,
      title: "Greek Salad",
      price: "$24.99",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus sit amet mauris non convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus sit amet mauris non convallis.",
      image: dish3,
    },
  ];

  const cardList = data.map((item) => {
    return (
      <div className={styles["card-container"]}>
        <Card
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          image={item.image}
        />
      </div>
    );
  });
  return (
    <section className={styles["card-section"]}>
      {/* <div className={styles["card"]}>
        <div className={styles["card-image"]}>
          <img src="https://dummyimage.com/600x400/000/fff" alt="Card Image" />
        </div>
        <div className={styles["card-content"]}>
          <h2 className={styles["card-title"]}>Card Title 1</h2>
          <p className={styles["card-price"]}>$19.99</p>
          <p className={styles["card-description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            sit amet mauris non convallis.
          </p>
          <button className={styles["card-button"]}>
            <i className="fas fa-motorcycle"></i>Order a Delivery
          </button>
        </div>
      </div> */}
      <div className={styles["section-start"]}>
        <div>
          <Heading style={{ color: "#495e57" }}>This Week's Specials</Heading>
          <SubHeading style={{ color: "#444444" }}>Chicago</SubHeading>
        </div>
        <Button size="2">Order now</Button>
      </div>
      <div className={styles["cards"]}> {cardList}</div>
    </section>
  );
}
