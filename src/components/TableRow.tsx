import React from "react";

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";

import TableBody from "./TableBody";
import TableHead from "./TableHead"


function index({ countries }) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="country table">
          <TableHead />
          <TableBody countries={countries} />
      </Table>
    </TableContainer>
  );
}

export default index;
