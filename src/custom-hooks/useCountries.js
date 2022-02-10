// This hook is used to fetch all countries
import { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";

function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  async function foo() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setCountries(json);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    foo();
  }, []);

  return [error, countries];
}

export default useCountries;
