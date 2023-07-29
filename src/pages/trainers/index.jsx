import React from "react";
import Header from "../../components/header";
import styles from "./styles.module.css";
import Foother from "../../components/foother";
export default function TrainersPage() {
  return (
    <>
      <Header />
      <h1>Trainers staff</h1>
      <div className={styles.trainers}>
        <div className={styles.trainersBox}>
          <img src="img/trainers1.png" alt="" />
          <div>Victoria Shurpik</div>
          <div className={styles.socialIcon}>
            <img src="img/inst.png" alt="" />
            <img src="img/twitter.png" alt="" />
            <img src="img/youtube.png" alt="" />
          </div>
        </div>
        <div className={styles.trainersBox}>
          <img src="img/trainers1.png" alt="" />
          <div>Victoria Shurpik</div>
          <div className={styles.socialIcon}>
            <img src="img/inst.png" alt="" />
            <img src="img/twitter.png" alt="" />
            <img src="img/youtube.png" alt="" />
          </div>
        </div>
        <div className={styles.trainersBox}>
          <img src="img/trainers1.png" alt="" />
          <div>Victoria Shurpik</div>
          <div className={styles.socialIcon}>
            <img src="img/inst.png" alt="" />
            <img src="img/twitter.png" alt="" />
            <img src="img/youtube.png" alt="" />
          </div>
        </div>
        <div className={styles.trainersBox}>
          <img src="img/trainers1.png" alt="" />
          <div>Victoria Shurpik</div>
          <div className={styles.socialIcon}>
            <img src="img/inst.png" alt="" />
            <img src="img/twitter.png" alt="" />
            <img src="img/youtube.png" alt="" />
          </div>
        </div>
        <div className={styles.trainersBox}>
          <img src="img/trainers1.png" alt="" />
          <div>Victoria Shurpik</div>
          <div className={styles.socialIcon}>
            <img src="img/inst.png" alt="" />
            <img src="img/twitter.png" alt="" />
            <img src="img/youtube.png" alt="" />
          </div>
        </div>
        <div className={styles.trainersBox}>
          <img src="img/trainers1.png" alt="" />
          <div>Victoria Shurpik</div>
          <div className={styles.socialIcon}>
            <img src="img/inst.png" alt="" />
            <img src="img/twitter.png" alt="" />
            <img src="img/youtube.png" alt="" />
          </div>
        </div>
      </div>
      <Foother />
    </>
  );
}
