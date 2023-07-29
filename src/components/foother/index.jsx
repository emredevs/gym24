import React from "react";
import styles from "./styles.module.css";
export default function Foother() {
  return (
    <div className={styles.foother}>
      <div className={styles.footherBox}>
        <h3 className={styles.logo}>
          GYM<span>24</span>
        </h3>
        <span>
          Build strength and confidence at our gym with state-of-the-art
          equipment, personalized training, and a motivating community
        </span>
      </div>
      <div className={styles.footherBox}>
        <h2>Address</h2>
        <span>Republic of Belarus Minsk city Dzerzhinsky Avenue 15</span>
      </div>
      <div className={styles.footherBox}>
        <h2>Contact</h2>
        <span>
          <img
            style={{ width: "15px", height: "15px" }}
            src="img/call.png"
            alt=""
          />
          +375(44)-777-24-12
        </span>
        <span>
          <img
            style={{ width: "15px", height: "15px" }}
            src="img/email.png"
            alt=""
          />{" "}
          gym24@gmail.com
        </span>
        <span className={styles.socialIcon}>
          <img src="img/inst.png" alt="" />
          <img src="img/face.png" alt="" />
          <img src="img/twitter.png" alt="" />
          <img src="img/youtube.png" alt="" />
        </span>
      </div>
    </div>
  );
}
