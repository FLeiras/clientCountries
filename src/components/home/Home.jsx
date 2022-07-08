import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  getActivity,
  sortByName,
  filterByContinent,
  filterByActivity,
  filtroNuevo,
} from "../../redux/actions";
import Card from "../UI/Card";
import Paginado from "../home/Paginado";
import Styles from "./Home.module.css";
import Nav from "../navBar/Nav";
import Recarga from "../../images/recarga.png";
import giphy from "../../images/giphy.gif";

function Home() {
  const [, setRefreshState] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const allActivity = useSelector((state) => state.activity);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;
  /* console.log(allCountries); */
  let currentCountry = [];
  parseInt(currentPage) === 1
    ? (currentCountry = allCountries.slice(0, 9))
    : (currentCountry = allCountries.slice(firstIndex - 1, lastIndex - 1));
  /* console.log(currentPage); */

  const paginado = (numPage) => {
    setCurrentPage(numPage);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivity());
  }, [dispatch]);

  const pageHandler = (page) => {
    setCurrentPage(page);
  };

  function handleClick() {
    window.location.reload();
  }

  function handleSort(e) {
    dispatch(sortByName(e.target.value));
    setRefreshState((prevState) => !prevState);
    setCurrentPage(1);
  }

  function handleSortByContinent(e) {
    dispatch(filterByContinent(e.target.value));
    setCurrentPage(1);
    setRefreshState((prevState) => !prevState);
  }

  function handleFilterByActivity(e) {
    e.preventDefault();
    dispatch(filterByActivity(e.target.value));
    setCurrentPage(1);
    setRefreshState((prevState) => !prevState);
  }

  if (currentCountry && loading) {
    setLoading(false);
  }

  return (
    <div className={Styles.container}>
      <div>
        <Nav />
      </div>
      <div>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
          className={Styles.buttonRecarga}
        >
          <div className={Styles.imgRecarga}>
            <img src={Recarga} alt="Country" className={Styles.recarga} />
          </div>
        </button>
      </div>
      <div>
        <select
          onChange={(e) => {
            handleSort(e);
          }}
          className={Styles.filterPopu}
        >
          <option> Order by population </option>
          <option value="may"> Elderly </option>
          <option value="men"> Minor </option>
        </select>
        <select
          onChange={(e) => {
            handleSort(e);
          }}
          className={Styles.filterName}
        >
          <option> Order by name </option>
          <option value="asc">A-Z</option>
          <option value="des">Z-A</option>
        </select>
        <select
          onChange={(e) => {
            handleSortByContinent(e);
          }}
          className={Styles.filterContinent}
        >
          <option value="All">All Continents</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Antarctic">Antartica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
        </select>
        <select
          onChange={(e) => handleFilterByActivity(e)}
          className={Styles.filterAct}
        >
          <option hidden value="All">
            All Activities
          </option>
          {allActivity?.map((e) => (
            <option value={e.name} key={e.id}>
              {" "}
              {e.name.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div>
        {
          <Paginado
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            paginado={paginado}
            onSetPage={pageHandler}
          />
        }
      </div>
      <div className={Styles.cards}>
        {currentCountry.length > 0 && !loading ? (
          currentCountry.map((e) => (
            <Card
              name={e.name}
              continent={e.continent}
              img={e.img}
              subregion={e.subregion}
              population={e.population}
              id={e.id}
              key={e.id}
            />
          ))
        ) : !currentCountry && loading ? (
          <img
            src={giphy}
            alt="Loading"
            className={Styles.gif}
            width="500px"
            height="500px"
          />
        ) : (
          <div className={Styles.notFound}>
            <h1>"Oops!! No hay resultados..."</h1>
            <h3>Recarga tu pagina</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
