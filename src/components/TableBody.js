import React from "react";
import MuiTableBody from "@mui/material/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function TableBody({ countries }) {
  // const navigate = useNavigate();
  
  return (
    <MuiTableBody>
    {countries.map(country => {
      return(
        <TableRow key={country.name.common}>
        <TableCell>
          <img src={country.flags.png} alt= 'flag' />
        </TableCell>
        <TableCell><Link to={`/country/${country.name.common}`}>{country.name.common}</Link></TableCell>
        <TableCell>{country.population}</TableCell>
        <TableCell>{country.region}</TableCell>
        <TableCell>{country.languages? Object.values(country.languages).map(value => <p key={value}>{value}</p>) : 'N/A'}</TableCell>
        </TableRow>
      )
    })}
     
        {/* {/* onClick={() => {
          navigate(`/${country.name.common}`);
           */}
        
   
    </MuiTableBody>
  );
}
export default TableBody;
