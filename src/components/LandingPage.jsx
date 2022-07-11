import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/LandingPage.module.css";

function LandingPage() {
  return (
    <div className={Styles.landing_container}>
      <div className={Styles.titlelanding}>
        <h3>Welcome to</h3>
        <h1>Country-App</h1>
        <div className={Styles.p_container}>
          <p>
            SPA(Simple Page Application),donde podras hacer un recorrido por
            todos los paises del Planeta,en la cual podras ordenarlos segun
            varios criterios,filtrarlos segun su continente o actividad
            turistica.Tambien podras crear una actividad turistica para el o los
            paises que desees. Espero la disfrutes...Vamos?!
          </p>
        </div>
        <Link to="/home">
          <button className={Styles.btn}>
            <span>Go!</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
