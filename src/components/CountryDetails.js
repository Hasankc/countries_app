import React from "react";

import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'

import useCountries from "../custom-hooks/useCountries";

function countryDetails() {
    const {countries} = useCountries()
    
    return(
        <TableBody>
            {countries.map(row => (
                <TableBody key={row?.name?.common}
                sx={{'&:last-child td, &:last-child th': {border: 0} }}>
                    <TableCell onClick={() => navigator(`/${row.name}`)} algin="left">
                        {row.name}
                    </TableCell>
            ))}
        </TableBody>
    )
}
export default countryDetails;
