import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import reducer from "./reducer";
import favoritesReducer from './Reducer/favorites'
import userReducer from './Reducer/user'

const rootRedicer = combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
})

type RootState = ReturnType<typeof rootRedicer>

export type InitialState = {
  favorites: {
    favoriteCountries: string[]
  }
  user: {
    user: null | {firstName: string; lastName: string}
  }
}

const initialState: InitialState = {
favorites:  { favoriteCountries: [] },
user: { user: null },
}


const storeFactory = () => {
const favoritelist = localStorage.getItem('countries')
if (favoritelist){
  initialState.favorites.favoriteCountries = JSON.parse(favoritelist)
}

  const store = createStore(rootRedicer, initialState,  composeWithDevTools());

  store.subscribe(() => {
    const currentState = store.getSate()
    const favoritelist = currentState.favorite.favoriteCountries
    localStorage.setItem('countries', JSON.stringify(favoritelist))

  })

  return store;
};

export default storeFactory;
