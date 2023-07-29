import React from "react";
import styles from "./styles.module.css";
export default function HomeInfo() {
  return (
    <div className={styles.homeInfoBox}>
      <div>
        <span>Free trial session with a trainer</span>
        <button>Detailed</button>
      </div>
      <img src="img/gym.png" alt="" />
    </div>
  );
}
