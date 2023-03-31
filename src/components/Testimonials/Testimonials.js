import React from "react";
import Heading from "../UI/Heading";
import SubHeading from "../UI/SubHeading";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonials.module.css";

const data = [
  {
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
    malesuada odio ut ligula blandit, eu scelerisque quam varius.`,
    name: "John Doe",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
    malesuada odio ut ligula blandit, eu scelerisque quam varius.`,
    name: "Jane Smith",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
    malesuada odio ut ligula blandit, eu scelerisque quam varius. `,
    name: "Peter Johnson",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
];

export default function Testimonials() {
  const testimonialList = data.map((item) => {
    return (
      <TestimonialCard
        name={item.name}
        comment={item.comment}
        rating={item.rating}
        image={item.image}
      />
    );
  });
  return (
    <section class={styles["testimonials-section"]}>
      <Heading style={{ color: "#495e57" }}>Testimonials</Heading>
      <SubHeading style={{ color: "#444444" }}>
        Hear from our Regular Guests
      </SubHeading>
      <div class={styles["testimonials-grid"]}>{testimonialList}</div>
    </section>
  );
}
