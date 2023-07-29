import React from "react";
import Header from "../../components/header";
import Foother from "../../components/foother";
import styles from "./styles.module.css";
export default function AdvantagesPage() {
  return (
    <div>
      <Header />
      <h1>Reasons to join</h1>
      <div className={styles.reasons}>
        <div className={styles.reasonsBox}>
          <img src="img/line.png" alt="" />
          <div>
            <h3>15000 sq.m.</h3>
            <div>
              A spacious gym for sports – a safe distance between exercise
              machines
            </div>
          </div>
        </div>
        <div className={styles.reasonsBox}>
          <img src="img/eqipment.png" alt="" />
          <div>
            <h3>More than 200 equipment</h3>
            <div>
              No queues at the simulators. Premium equipment from LifeStyle,
              Hammer Strength, TechnoGym.
            </div>
          </div>
        </div>
        <div className={styles.reasonsBox}>
          <img src="img/fitness.png" alt="" />
          <div>
            <h3>4 fitness zones</h3>
            <div>
              From cardio to functional and cycle. Separate area for boxing and
              mixed martial arts
            </div>
          </div>
        </div>
        <div className={styles.reasonsBox}>
          <img src="img/time.png" alt="" />
          <div>
            <h3>Round-the-clock operation</h3>
            <div>
              The gym is open 24 hours a day, also works on all holidays and
              weekends
            </div>
          </div>
        </div>
      </div>

      <Foother />
    </div>
  );
}
