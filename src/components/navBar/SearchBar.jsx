import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountries } from "../../redux/actions";
import Styles from "./SearchBar.module.css";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleButton = (e) => {
    e.preventDefault();
    setName("");
    dispatch(searchCountries(name));
  };
  return (
    <div className={Styles.containerInput}>
      <div>
        <input
          className={Styles.inputSearch}
          type="text"
          value={name}
          placeholder="Search Country..."
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div>
        <button
          className={Styles.btnSearch}
          type="submit"
          onClick={(e) => handleButton(e)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
