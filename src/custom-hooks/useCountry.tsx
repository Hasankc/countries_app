// This hook is used to fetch one specific country
import { useState, useEffect } from "react";

import { Country }  from '../types'

type Return = [Country | null, Error | null, isLoding | null]

 const useCountry = (name: string): Return => {
  const [country, setCountry] = useState<Country | null>([]);
  const [error, setError] = useState<Error | null>(null);
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

export default useCountry
