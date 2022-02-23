// This hook is used to fetch one specific country
import { useState, useEffect } from "react";


export default function useCountry(name) {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [isLoding, setIsLoading] = useState(true);
  useEffect(() => {
    function foo() {
      setIsLoading(true);
      fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((response) => response.json())
        .then((json) => setCountry(json))
        .catch((error) => setError(error))
        .then(() => setIsLoading(false));
    }
    foo();
  }, [name]);

  
  return [country, error, isLoding];
}

