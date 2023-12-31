import React from "react";
import Header from "../../components/header";
import styles from "./styles.module.css";
import Foother from "../../components/foother";
export default function MembershipPage() {
  const iconTick = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M8.83342 11.8332L7.02091 10.0207C6.86814 9.86793 6.67703 9.79488 6.44758 9.80154C6.21814 9.80821 6.0273 9.88821 5.87508 10.0415C5.7223 10.1943 5.64591 10.3888 5.64591 10.6249C5.64591 10.861 5.7223 11.0554 5.87508 11.2082L8.25008 13.5832C8.40286 13.736 8.5973 13.8124 8.83342 13.8124C9.06953 13.8124 9.26397 13.736 9.41675 13.5832L14.1459 8.85404C14.2987 8.70127 14.3717 8.51016 14.3651 8.28071C14.3584 8.05127 14.2784 7.86043 14.1251 7.70821C13.9723 7.55543 13.7779 7.47904 13.5417 7.47904C13.3056 7.47904 13.1112 7.55543 12.9584 7.70821L8.83342 11.8332ZM10.0001 18.6665C8.8473 18.6665 7.76397 18.4477 6.75008 18.0099C5.73619 17.5721 4.85425 16.9785 4.10425 16.229C3.35425 15.479 2.76064 14.5971 2.32341 13.5832C1.88619 12.5693 1.6673 11.486 1.66675 10.3332C1.66675 9.18043 1.88564 8.0971 2.32341 7.08321C2.76119 6.06932 3.3548 5.18738 4.10425 4.43738C4.85425 3.68738 5.73619 3.09377 6.75008 2.65654C7.76397 2.21932 8.8473 2.00043 10.0001 1.99988C11.1529 1.99988 12.2362 2.21877 13.2501 2.65654C14.264 3.09432 15.1459 3.68793 15.8959 4.43738C16.6459 5.18738 17.2398 6.06932 17.6776 7.08321C18.1154 8.0971 18.334 9.18043 18.3334 10.3332C18.3334 11.486 18.1145 12.5693 17.6767 13.5832C17.239 14.5971 16.6454 15.479 15.8959 16.229C15.1459 16.979 14.264 17.5729 13.2501 18.0107C12.2362 18.4485 11.1529 18.6671 10.0001 18.6665ZM10.0001 16.9999C11.8473 16.9999 13.4204 16.3507 14.7192 15.0524C16.0181 13.754 16.6673 12.181 16.6667 10.3332C16.6667 8.48599 16.0176 6.91293 14.7192 5.61404C13.4209 4.31516 11.8479 3.66599 10.0001 3.66654C8.15286 3.66654 6.5798 4.31571 5.28091 5.61404C3.98203 6.91238 3.33286 8.48543 3.33341 10.3332C3.33341 12.1804 3.98258 13.7535 5.28091 15.0524C6.57925 16.3513 8.1523 17.0004 10.0001 16.9999Z"
        fill="white"
      />
    </svg>
  );
  return (
    <>
      <Header />
      <h1>Gym membership</h1>
      <div className={styles.membership}>
        <div className={styles.membershipBox}>
          <div>
            <h3>Pass ‘Trial’</h3>
            <h3>$ 0</h3>
          </div>
          <div className={styles.membershipBoxin}>
            <span>{iconTick}Access to the gym from 8:00 to 14:00</span>
            <span>
              {iconTick}The trainer on duty will introduce you to the gym
            </span>
            <button>Buy</button>
          </div>
        </div>

        <div className={styles.membershipBox}>
          <div>
            <h3>Pass ‘Trial’</h3>
            <h3>$ 0</h3>
          </div>
          <div className={styles.membershipBoxin}>
            <span>{iconTick}Access to the gym from 8:00 to 14:00</span>
            <span>
              {iconTick}The trainer on duty will introduce you to the gym
            </span>
            <button>Buy</button>
          </div>
        </div>
        <div className={styles.membershipBox}>
          <div>
            <h3>Pass ‘Trial’</h3>
            <h3>$ 0</h3>
          </div>
          <div className={styles.membershipBoxin}>
            <span>{iconTick}Access to the gym from 8:00 to 14:00</span>
            <span>
              {iconTick}The trainer on duty will introduce you to the gym
            </span>
            <button>Buy</button>
          </div>
        </div>
        <div className={styles.membershipBox}>
          <div>
            <h3>Pass ‘Trial’</h3>
            <h3>$ 0</h3>
          </div>
          <div className={styles.membershipBoxin}>
            <span>{iconTick}Access to the gym from 8:00 to 14:00</span>
            <span>
              {iconTick}The trainer on duty will introduce you to the gym
            </span>
            <button>Buy</button>
          </div>
        </div>
        <div className={styles.membershipBox}>
          <div>
            <h3>Pass ‘Trial’</h3>
            <h3>$ 0</h3>
          </div>
          <div className={styles.membershipBoxin}>
            <span>{iconTick}Access to the gym from 8:00 to 14:00</span>
            <span>
              {iconTick}The trainer on duty will introduce you to the gym
            </span>
            <button>Buy</button>
          </div>
        </div>

        <div className={styles.membershipBox}>
          <div>
            <h3>Pass ‘Trial’</h3>
            <h3>$ 0</h3>
          </div>
          <div className={styles.membershipBoxin}>
            <span>{iconTick}Access to the gym from 8:00 to 14:00</span>
            <span>
              {iconTick}The trainer on duty will introduce you to the gym
            </span>
            <button>Buy</button>
          </div>
        </div>
      </div>
      <Foother />
    </>
  );
}
