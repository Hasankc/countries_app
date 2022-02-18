// This hook is used to fetch all countries
import { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";

function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoding, setIsLoading]= useState(true);
  async function foo() {
    try {
      const response = await fetch(url);
      console.log("response", response);
      const json = await response.json();
      setCountries(json);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    foo();
  }, []);
  console.log("from hook", countries);
  return [error, countries, isLoding];
}

export default useCountries;
