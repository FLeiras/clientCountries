import React from "react";
import Styles from "../Styles/SobreMi.module.css";
import Imagen from "./Img/PERN.png";
import { Link } from "react-router-dom";
import JS from "./Img/js.png";
import RE from "./Img/react.png";
import RED from "./Img/redux.png";
import NOD from "./Img/node.png";
import EX from "./Img/express.png";
import POS from "./Img/pos.png";
import CSS from "./Img/css.png";
import HTML from "./Img/html.png";

export default function SobreMi() {
  return (
    <div className={Styles.about_container}>
      <div className={Styles.principal}>
        <div className={Styles.titulo2}>
          <h1 className={Styles.h}>Sobre Mi</h1>
        </div>

        <div className={Styles.datos}>
          <ul>
            <span>Nombre: Federico Leiras</span>
            <br />
            <span>Tecnologías Aplicadas:</span>

            <ul className={Styles.js}>
              {<img src={JS} alt="JS" />}
              JS
            </ul>
            <ul className={Styles.re}>{<img src={RE} alt="RE" />}React.js</ul>
            <ul className={Styles.red}>{<img src={RED} alt="RED" />}Redux</ul>
            <ul className={Styles.red}>{<img src={NOD} alt="NOD" />}Node.js</ul>
            <ul className={Styles.ex}>{<img src={EX} alt="EX" />}Express</ul>
            <ul className={Styles.red}>
              {<img src={POS} alt="POS" />}PostgreSQL
            </ul>
            <ul className={Styles.red}>{<img src={CSS} alt="CSS" />}CSS</ul>
            <ul className={Styles.red}>{<img src={HTML} alt="HTML" />}HTML</ul>

            <span>
              Contacto:
              <ul>Email: fleiras18@gmail.com</ul>
              <ul>Tel: 11-66067670</ul>
              <ul>
                <a
                  href="https://www.linkedin.com/in/fede-leiras"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3 className={Styles.htres}>LinkeDin</h3>
                </a>
                <div className={Styles.git}>
                  <a
                    href="https://github.com/FLeiras"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className={Styles.htres}>GitHub</h3>
                  </a>
                </div>
              </ul>
            </span>
          </ul>
        </div>
        <div className={Styles.imagen}>
          <img src={Imagen} alt="Nada" />
        </div>
        <div className={Styles.volver}>
          <Link className={Styles.LinkSobreMi} to="/home">
            <h3>Home</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
