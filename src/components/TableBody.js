import React from "react";
import Card from "@mui/material/Card";
import MuiTableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {addFavorite} from '../Redux/action'

function TableBody({ countries }) {
  const dispatch = useDispatch()

  const addToFavorite = countryName =>{
    dispatch(addFavorite(countryName))
  }
  
  return (
    <MuiTableBody>
      {countries?.map((country) => {
        return (
          <TableRow key={country.name.common}>
            <TableCell>
              <Card sx={{ maxHeight: 160, maxWidth: 320 }}>
                <img src={country.flags.png} alt="flag" />
              </Card>
            </TableCell>
            <TableCell>
              <Link to={`/country/${country?.name?.common}`}>
                {country.name.common}
              </Link>
            </TableCell>
            <TableCell>{country.population}</TableCell>
            <TableCell>{country.region}</TableCell>
            <TableCell>
              {country.languages
                ? Object.values(country.languages).map((value) => (
                    <p key={value}>{value}</p>
                  ))
                : "N/A"}
            </TableCell>
            <TableCell>
              <Button variant="outlined" size="small" onClick={() => addToFavorite(country.name.common)}>Add</Button>
            </TableCell>
            
          </TableRow>
        );
      })}
    </MuiTableBody>
  );
}
export default TableBody;
