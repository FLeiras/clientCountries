import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Nav.module.css";
import SearchBar from "./SearchBar";

function Nav() {
  return (
    <div className={Styles.navContainer}>
      <nav className={Styles.stroke}>
        <Link className={Styles.linkNav} to="/home">
          <p className={Styles.text}>Country-Henry-App</p>
        </Link>
        <ul>
          <Link to="/about">
            <li>
              <span className={Styles.ab}>About Me</span>
            </li>
          </Link>
          <Link to="/post">
            <li>
              <span className={Styles.crea}>Create your activity</span>
            </li>
          </Link>
        </ul>
      </nav>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default Nav;
