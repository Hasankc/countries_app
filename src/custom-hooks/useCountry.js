// This hook is used to fetch one specific country
import { useState, useEffect } from "react";

// import url from './useCountries.js'

async function useCountry(name) {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  async function foo(name) {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    
      const json = await response.json();
      console.log("we try ", json);
      setCountry(json);
      setIsLoading(false);
    } catch (error) {
      
      setError(error);
      
    }
    setIsLoading(false);
  }

  useEffect(() => {
    foo(name);
  }, [name]);
  return [country, error, isLoading];
  
}



export default useCountry;
