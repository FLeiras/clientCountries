import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryById /* , clearState */ } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Styles from "../Styles/CountryDetail.module.css";
import giphy from "../images/giphy.gif";
import ActivityCard from "./ActivityCard";

function CountryDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryDetails);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  if (!country.img && loading) {
    setLoading(!loading);
  }

  return (
    <div className={Styles.containerDetails}>
      <div className={Styles.cardDetails}>
        <div className={Styles.nav}>
          <li className={Styles.li}>
            <Link className={Styles.link} to="/home">
              Go Home
            </Link>
          </li>
        </div>

        <div className={Styles.card}>
          {!!country.img ? (
            <img
              src={country.img}
              width="430px"
              height="220px"
              alt={country.name}
              className={Styles.img}
            />
          ) : (
            <img
              src={giphy}
              alt="Loading"
              className={Styles.img}
              width="430"
              height="350px"
            />
          )}
          <h3 className={Styles.titleone}>{country.name}</h3>
          <div className={Styles.letter}>
            <p>
              <strong>ID : </strong>
              {country.id}
            </p>
            <p>
              <strong>Capital : </strong>
              {country.capital}
            </p>
            <p>
              <strong>Continent : </strong>
              {country.continent}
            </p>
            <p>
              <strong>Subregion : </strong>
              {country.subregion}
            </p>
            <p>
              <strong>Area : </strong>
              {country.area} km²
            </p>
            <p>
              <strong>Population : </strong>
              {country.population}
            </p>
          </div>
        </div>

        {country.activities?.map((e) => (
          <ActivityCard
            id={e.id}
            name={e.name}
            difficult={e.difficult}
            duration={e.duration}
            season={e.season}
            key={e.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CountryDetail;
