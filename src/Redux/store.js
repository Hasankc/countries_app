import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";


const initialState = {
  favoriteCountries: [],
}


const storeFactory = () => {
const favoritelist = localStorage.getItem('countries')
if (favoritelist){
  initialState.favoriteCountries = JSON.parse(favoritelist)
}



  const store = createStore(reducer, initialState,  composeWithDevTools());

  store.subscribe(() => {
    const currentState = store.getSate()
    const favoritelist = currentState.favoriteCountries
    localStorage.setItem('countries', JSON.stringify(favoritelist))

  })

  return store;
};

export default storeFactory;
