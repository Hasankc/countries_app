import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

// import './CountryTable.css';
// import {DataGrid} from '@material-ui/data-grid'
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function CountriesTable(props) {
  return (

    <TableContainer className="container-xl container-lg container-md container-sm container">
    
      <Table sx={{ minWidth: 650 }} aria-label="country table">
        <TableHead />
        <TableBody countries={props.countries} />
      </Table>
    
    </TableContainer>
  );
}

export default CountriesTable;
