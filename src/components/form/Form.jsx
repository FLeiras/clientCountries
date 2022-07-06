import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../redux/actions";
import styles from "./Form.module.css";
import imgHome from "../../images/menuForm.png";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const country = useSelector((state) => state.countries);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    difficult: "",
    duration: "",
    season: [],
    country: [],
  });

  useEffect(() => {
    dispatch(getCountries(""));
  }, [dispatch]);

  function handleOnChange(e) {
    setInput((state) => {
      const newState = {
        ...state,
        [e.target.name]: e.target.value,
      };
      setError(validate(newState));
      return newState;
    });
  }

  function handleSelect(e) {
    if (!input.country.includes(e.target.value)) {
      setInput({
        ...input,
        country: [...input.country, e.target.value],
      });
      setError(
        validate({ ...input, country: [...input.country, e.target.value] })
      );
    } else {
      alert("Este pais ya fue seleccionado");
    }
  }

  function handleSubmit(e) {
    console.log(input);
    if (
      input.name.length < 3 ||
      !input.name.match(/^[A-Za-z]+$/) ||
      !input.difficult ||
      !input.duration ||
      !input.season ||
      input.country.length === 0
    ) {
      e.preventDefault();
      alert("Debe completar todos los campos");
    } else {
      e.preventDefault();
      dispatch(postActivity(input));
      alert("Actividad creada correctamente");
      setInput({
        name: "",
        difficult: "",
        duration: "",
        season: "",
        country: [],
      });
      navigate("/home");
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      country: input.country.filter((c) => c !== e),
    });
  }

  function validate(input) {
    let error = {};
    if (input.name.length < 3) {
      error.name = "Ingrese un nombre valido";
    }
    if (!input.name.match(/^[A-Za-z]+$/)) {
      error.name = "El nombre debe contener solo letras";
    }
    if (!input.duration) {
      error.duration = "La duracion debe especificarse en Horas";
    }
    if (!input.season) {
      error.season = "Season es un campo obligatorio";
    }
    if (!input.difficult) {
      error.difficult = "Difficult es un campo obligatorio";
    }
    return error;
  }

  return (
    <div className={styles.major}>
      <div className={styles.containerForm}>
        <div className={styles.closebtn}>
          <li className={styles.li}>
            <Link className={styles.LinkForm} to="/home">
              <img src={imgHome} alt="Home" />
            </Link>
          </li>
        </div>
        <h1 className={styles.h1}>Create Activity</h1>
        <div className={styles.container1}>
          <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
            <div>
              <div className={styles.actName}>
                <label> Name of the activity</label>
                <input
                  placeholder="Activity"
                  type="text"
                  value={input.name}
                  name="name"
                  autoComplete="off"
                  onChange={handleOnChange}
                />
                <div className={styles.error}>
                  {error.name && <p>{error.name}</p>}
                </div>
              </div>
              <div className={styles.actDifficult}>
                <div className={styles.diffi}>
                  <label>Difficult</label>
                </div>
                <div className={styles.dif}>
                  <label>
                    <input
                      type="radio"
                      value="1"
                      name="difficult"
                      onChange={handleOnChange}
                    />
                    1
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="2"
                      name="difficult"
                      onChange={handleOnChange}
                    />
                    2
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="3"
                      name="difficult"
                      onChange={handleOnChange}
                    />
                    3
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="4"
                      name="difficult"
                      onChange={handleOnChange}
                    />
                    4
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="5"
                      name="difficult"
                      onChange={handleOnChange}
                    />
                    5
                  </label>
                </div>
                <div className={styles.errorDif}>
                  {error.difficult && <p>{error.difficult}</p>}
                </div>
              </div>
              <div className={styles.actDuration}>
                <div className={styles.duration}>
                  <label>Duration</label>
                </div>
                <div className={styles.dur}>
                  <input
                    placeholder="Time in hours"
                    type="number"
                    value={input.duration}
                    name="duration"
                    autoComplete="off"
                    min="0"
                    onChange={handleOnChange}
                  />
                </div>
                <div className={styles.errorDur}>
                  {error.duration && <p>{error.duration}</p>}
                </div>
              </div>
              <div className={styles.season}>
                <div className={styles.sea}>
                  <label>Season</label>
                </div>
                <div className={styles.se}>
                  <label>
                    <input
                      type="radio"
                      value="Summer"
                      name="season"
                      onChange={handleOnChange}
                    />
                    <p className={styles.temp}>Summer</p>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Spring"
                      name="season"
                      onChange={handleOnChange}
                    />
                    <p className={styles.temp}>Spring</p>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Fall"
                      name="season"
                      onChange={handleOnChange}
                    />
                    <p>Fall</p>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Winter"
                      name="season"
                      onChange={handleOnChange}
                    />
                    <p className={styles.temp}>Winter</p>
                  </label>
                </div>
                <div className={styles.errorSeason}>
                  {error.season && <p>{error.season}</p>}
                </div>
              </div>
              <div className={styles.cou}>
                <div>
                  <label className={styles.country}>Country</label>
                </div>
                <div className={styles.selectores}>
                  <select onChange={(e) => handleSelect(e)}>
                    {country &&
                      country.map((e, i) => (
                        <option value={e.name} key={e.id + i}>
                          {e.name}
                        </option>
                      ))}
                  </select>
                </div>
                {error.country && <p>{error.country}</p>}
              </div>
              <div className={styles.countrySelecto}>
                {input.country.map((e) => (
                  <ul key={e}>
                    <p className={styles.element}>{e}</p>
                    <button
                      className={styles.button}
                      type="button"
                      onClick={() => handleDelete(e)}
                    >
                      X
                    </button>
                  </ul>
                ))}
              </div>
              <div>
                <button className={styles.submitbtn} type="submit">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
