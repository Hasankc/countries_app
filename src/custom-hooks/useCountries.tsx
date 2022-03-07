// This hook is used to fetch all countries
import { useState, useEffect } from "react";
import { Country } from "../types";

const url = "https://restcountries.com/v3.1/all";

// type Return = [Country[], Error | error]

function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoding, setIsLoading]= useState(true);
  async function foo() {
    try {
      const response = await fetch(url);
      console.log("response", response);
      const json = await response.json();
      setCountries(json);
      setIsLoading(false);
    } catch (error) {
     
      setError(error as Error);
      
    }
    setIsLoading(false);
  }

  useEffect(() => {
    foo();
  }, []);
  return [error, countries, isLoding];
}

export default useCountries;
