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
  const { nameId } = useParams();
  const country = useCountry(nameId);
console.log("name", country)
  return (
    <div>hello</div>
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
