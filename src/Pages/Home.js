import React, { useEffect, useState } from "react";
import useCountries from "../custom-hooks/useCountries";

import TableHead from "../components/TableHead";

function Home() {
  const [countryData, SetCountryData] = useState();
  const [error, data] = useCountries();

  useEffect(() => {
    if (!data) return;

    const countries =
      data &&
      data.map((country) => ({
        name: country.name.common,
        population: country.population,
        region: country.countries,
        language: country.language,
      }));
    SetCountryData(countries);
  }, [data]);

  return <div> country </div>;
}
export default Home;
