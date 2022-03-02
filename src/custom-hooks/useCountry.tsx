// This hook is used to fetch one specific country
import { useState, useEffect } from "react";

import { country }  from '../components/types'

export default function useCountry(name: string) {
  const [country, setCountry] = useState<country | null>([]);
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

