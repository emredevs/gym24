import React from "react";
import Sidebar from "../sidebar/index";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className={styles.headerBox}>
      <div className={styles.logo}>
        <Link to={"/"}>
          GYM<span>24</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Advantages"}>Reasons</Link>
        </li>
        <li>
          <Link to={"/Membership"}>Membership</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"/Trainers"}>Trainers</Link>
        </li>
      </ul>
      <Sidebar />
    </div>
  );
}
