import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

import TableHead from "./TableHead";
import TableBody from "./TableBody";

function CountriesTable(props: any) {
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

