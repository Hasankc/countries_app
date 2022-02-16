import React from "react";
import { useNavigate } from "react-router-dom";

function TableRow(props) {
  const navigate = useNavigate();
  function determineLanguages(languagesObj) {
    return Object.values(languagesObj || {}).join(", ");
  }
  return (
    <tr className="table">
      <td>
        <img
          className="country-flag"
          src={props.country.flags.png}
          alt={"Flag of " + props.country.name.common}
        />
      </td>
      <td
        className="name"
        onClick={() => {
          navigate(`/${props.country.name.common}`);
        }}
      >
        {props.country.name.common}
      </td>
      <td className="popluation">{props.country.population}</td>
      <td className="region">{props.country.region}</td>
      <td className="languages">
        {determineLanguages(props.country.languages)}
      </td>
    </tr>
  );
}
export default TableRow;
