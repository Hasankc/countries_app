// This hook is used to fetch all countries
import { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";

function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  async function foo() {
    try {
      const response = await fetch(url);
      console.log("response", response);
      const json = await response.json();
      setCountries(json);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    foo();
  }, []);
  console.log("from hook", countries);
  return countries;
}

export default useCountries;
