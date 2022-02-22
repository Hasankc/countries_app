import React from "react";
import TableRow from "./TableRow";
import TableCell from "@mui/material/TableCell";
import MuiTableHead from "@mui/material/TableHead";

const columns = ['Flag', 'Name', 'Population', 'Region', 'Languages']

 function TableHede() {
  return (
    
      <MuiTableHead>
        
          
            {columns.map(columnName => (
              <TableCell key= {columnName}>{columnName}</TableCell>
          
          
          ))}
        
      </MuiTableHead>
    
  );
}
export default TableHede;
