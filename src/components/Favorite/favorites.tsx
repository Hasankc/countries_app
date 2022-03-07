
import React from 'react'
import {useSelector} from 'react-redux'
import { InitialState } from '../../Redux/store'

function Favorites() {
    const favoriteCountries = useSelector((state: InitialState) => state.favorites.favoriteCountries)
  return (
    <div>
        <ul>
            {favoriteCountries.map(country => {
                <li key={country}>{country}</li>
            })}
        </ul>
        </div>
  )
}

export default Favorites
