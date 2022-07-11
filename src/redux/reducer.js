import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_ID,
  GET_ACTIVITY,
  SORT_COUNTRIES,
  FILTER_BY_CONTINENT,
  SEARCH_COUNTRIES,
  FILTER_BY_ACTIVITY,
  DELETE_ACTIVITY,
  UPDATE_ACTIVITY,
} from "./actions";
import {
  sortCountries,
  countryByContinent,
  filterByActivity,
  searchCountry,
} from "./utils";

const initialState = {
  countries: [],
  copyCountries: [],
  activity: [],
  countryDetails: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        copyCountries: action.payload,
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        countryDetails: action.payload,
      };
    case SORT_COUNTRIES:
      return {
        ...state,
        countries: sortCountries(action.payload, state.countries),
      };
    case FILTER_BY_CONTINENT:
      return {
        ...state,
        countries: countryByContinent(action.payload, state.copyCountries),
      };
    case FILTER_BY_ACTIVITY:
      return {
        ...state,
        countries: filterByActivity(action.payload, state.copyCountries),
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        countries: searchCountry(action.payload, state.copyCountries),
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
      };
    case UPDATE_ACTIVITY:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default rootReducer;
