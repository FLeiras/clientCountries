import axios from "axios";

export const getCountries = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/countries");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: response.data,
    });
  };
};

export const getActivity = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/activity");
    return dispatch({
      type: "GET_ACTIVITY",
      payload: response.data,
    });
  };
};

export const getCountryById = (id) => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/countries/" + id);
    return dispatch({
      type: "GET_COUNTRY_BY_ID",
      payload: response.data,
    });
  };
};

export function sortByName(payload) {
  return {
    type: "SORT_COUNTRIES",
    payload,
  };
}

export function filterByContinent(order) {
  return {
    type: "FILTER_BY_CONTINENT",
    payload: order,
  };
}

export function searchCountries(name) {
  return {
    type: "SEARCH_COUNTRIES",
    payload: name,
  };
}

export function filterByActivity(payload) {
  return {
    type: "FILTER_BY_ACTIVITY",
    payload,
  };
}

export function postActivity(payload) {
  return async function () {
    const json = await axios.post("http://localhost:3001/activity", payload);
    return json;
  };
}

export function deleteActivity(payload) {
  return async function (dispatch) {
    const response = await axios.delete(
      `http://localhost:3001/activity/${payload}`
    );
    return dispatch({
      type: "DELETE_ACTIVITY",
      payload: response.data,
    });
  };
}

export function filtroNuevo(payload) {
  return {
    type: "FILTER_NUEVO",
    payload,
  };
}

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const SORT_COUNTRIES = "SORT_COUNTRIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const FILTER_NUEVO = "FILTER_NUEVO";
