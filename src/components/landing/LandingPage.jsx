import React from "react";
import { Link } from "react-router-dom";
import Styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={Styles.Pricontainer}>
      <h1>Welcome to Henry-Country-App</h1>
      <Link to="/home">
        <div className={Styles.container}>
          <div className={Styles.center}>
            <button className={Styles.btn}>
              <svg
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
                class="border"
              >
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="hl-line"
                />
              </svg>
              <span>GO!!</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default LandingPage;
