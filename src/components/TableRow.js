import React from "react";
import { useNavigate } from "react-router-dom";

function TableRow({country}) {
  const navigate = useNavigate();
  function determineLanguages(languagesObj) {
    return Object.values(languagesObj || {}).join(", ");
  }
  console.log("here ", country);
  return (
    <tr className="table">
       <td>
        <img
          className="country-flag"
          src={country.flags.png}
          alt={"Flag of " + country.name.common}
        />
      </td> 
      <td onClick={() => {navigate(`/${country.name.common}`);}} >
        {country.name.common}
      </td>
      <td className="popluation">{country.population}</td>
      <td className="region">{country.region}</td>
      <td className="languages">
        {determineLanguages(country.languages)}
      </td>
    </tr>
  );
}
export default TableRow;
