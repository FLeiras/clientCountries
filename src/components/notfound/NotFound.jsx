import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import NotFoundImg from "../../images/tierra.gif";

const NotFound = () => {
  return (
    <div className={styles.page}>
      <Link to="/home">
        <button className={styles.button}>Go Home</button>
      </Link>
      <img src={NotFoundImg} alt="NF" />
    </div>
  );
};

export default NotFound;
