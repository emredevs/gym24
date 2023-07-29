import React from "react";
import Header from "../../components/header";
import styles from "./styles.module.css";
import Foother from "../../components/foother";
export default function AboutPage() {
  return (
    <div>
      <Header />
      <div className={styles.aboutContainer}>
        <div>
          <h1>About us</h1>
          <div>
            Gym24 is a leading fitness center located near Grushevka metro
            station, offering over 1500 sq. m of space dedicated to
            top-of-the-line workout equipment from leading brands such as Hammer
            Strength, Life Fitness, and TechnoGym. With affordable membership
            options, Gym24 is accessible to everyone who wants to reach their
            fitness goals, whether it's building strength, increasing endurance,
            or losing weight. Certified trainers at Gym24 provide expert
            guidance and support to develop personalized workout plans tailored
            to each individual's needs and goals.{" "}
          </div>
        </div>
        <img src="img/photo.png" alt="" />
      </div>
      <Foother />
    </div>
  );
}
