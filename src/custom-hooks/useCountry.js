// This hook is used to fetch one specific country
import { useState, useEffect } from "react";

// import url from './useCountries.js'

async function useCountry(name) {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);

  async function foo(name) {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    
      const json = await response.json();
      console.log("we try ", json);
      setCountry(json);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    foo(name);
  }, [name]);
  console.log("response country12", country);
  return country;
  
}

// }

export default useCountry;
