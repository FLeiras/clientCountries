import React from "react";
import { Link } from "react-router-dom";
import Styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={Styles.Pricontainer}>
      <div className={Styles.titleLanding}>
        <h3>Welcome to</h3>
        <h1>Country-App</h1>
        <p>
          SPA(Simple Page Application),<br></br>donde podras hacer un recorrido
          por todos los paises del Planeta,<br></br> en la cual podras
          ordenarlos segun varios criterios,<br></br> filtrarlos segun su
          continente o actividad turistica.<br></br> Tambien podras crear una
          actividad turistica<br></br> para el o los paises que desees.<br></br>{" "}
          Espero la disfrutes...Vamos?!
        </p>
      </div>
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
