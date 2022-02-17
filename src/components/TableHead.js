import React from "react";
import TableRow from "./TableRow";

import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";

export default function TableHeder() {
  return (
    <div>
      <TableHead>
        <TableRow>
          <TableCell align="center">Flag</TableCell>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center">Population</TableCell>
          <TableCell align="center">Region</TableCell>
          <TableCell align="center">Languages</TableCell>
        </TableRow>
      </TableHead>
    </div>
  );
}
