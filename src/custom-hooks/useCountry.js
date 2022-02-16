// This hook is used to fetch one specific country
import { useState } from "react";

// import url from './useCountries.js'

async function useCountry(name) {
  const [country, useCountry] = useState([]);
  const [error, setError] = useState(null);

  // const useCountry = async (name) => {
  let response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  let data = await response.data;
  console.log(data);
  return data;
}

// }

export default useCountry;
