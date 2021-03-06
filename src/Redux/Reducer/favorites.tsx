// import { Actions } from "history";
import {  Actions, ADD_FAVORITE, REMOVE_FAVORITE } from "../action";


type InitState = {
  favoriteCountries: string[]
}

const initialState: InitState = {
  favoriteCountries: [],
};

const reducer = (state = initialState, action: Actions): InitState => {
  switch (action.type) {
    case ADD_FAVORITE:
      const countryName = action.payload;
      const isInList = state.favoriteCountries.some(
        (name) => name === countryName
      );
      if (isInList) {
        return state;
      }

      return {
        ...state,
        favoriteCountries: [...state.favoriteCountries, countryName],
      };

    case REMOVE_FAVORITE:
      const reCountryName = action.payload;
      const newList = state.favoriteCountries.filter(
        (name) => name !== reCountryName
      );
      return {
        ...state,
        favoriteCountries: newList,
      };

    default:
      return state;
  }
};

export default reducer;
