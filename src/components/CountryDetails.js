import React from "react";

import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import useCountry from "../custom-hooks/useCountry";
import { useParams } from "react-router-dom";
// import useCountries from "../custom-hooks/useCountries";

function CountryDetails() {
  //   const  {countries} = () => {
  //     const navigate = useNavigate();
  //      const { error, country } = useCountry(countries);
  //   }
  const { name } = useParams();
  const [country, error] = useCountry(name)
  if (error) {
    return <p>Some problem</p>
  }
  if (!country) {
    return <p>Looding...</p>
  }
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        {country.languages? Object.values(country.languages).map(value => <p>{value}</p>) : 'N/A'}
      </div>
    </div>
    // <TableBody>
    //   {country?.map((rows) => (
    //     <TableRow
    //       key={rows?.name?.common}
    //       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //     >
    //       <TableCell
    //         // onClick={() => navigate(`/${rows?.name?.common}`)}
    //         algin="center"
    //       >
    //         {rows.name}
    //       </TableCell>
    //     </TableRow>
    //   ))}
    // </TableBody>
  );
}
export default CountryDetails;
