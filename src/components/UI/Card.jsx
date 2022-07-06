import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ img, name, continent, population, id, subregion }) {
  return (
    <div className="container">
      <div className="card">
        <div className="image">
          <Link to={"/home/" + id}>
            <img href="#" src={img} alt="Img not found" />
          </Link>
        </div>

        <div className="content">
          <h3>{name}</h3>
          <h3>{continent}</h3>
          <h3>{subregion}</h3>
          <h3>{population}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
