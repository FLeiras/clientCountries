import { React, Fragment } from "react";
import Styles from "../Styles/Paginado.module.css";

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
  const currentPage = [];

  for (let i = 0; i < Math.ceil(allCountries / countriesPerPage); i++) {
    currentPage.push(i + 1);
  }

  const handleClick = (e) => {
    paginado(e.target.value);
  };

  return (
    <Fragment>
      {currentPage &&
        currentPage.map((page) => {
          return (
            <button
              id={page}
              value={page}
              className={Styles.btn}
              key={page}
              onClick={handleClick}
            >
              {page}
            </button>
          );
        })}
    </Fragment>
  );
}
