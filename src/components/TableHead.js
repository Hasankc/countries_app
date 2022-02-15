import React from 'react'
import TableRow from './TableRow';
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'


function TableHead() {
    return (
        <TableRow>
            <TableHead>
                <TableCell align="center">Flag</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Population</TableCell>
                <TableCell align="center">Region</TableCell>
                <TableCell align="center">Languages</TableCell>
            </TableHead>
        </TableRow>
    );
}

export default TableHead;