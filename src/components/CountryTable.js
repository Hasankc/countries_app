import React from "react"
import './CountryTable.css';
// import {DataGrid} from '@material-ui/data-grid'
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function CountryTable(props) {
  return (
    <div className='container'>
      <table>
        <TableHead />
        <TableBody countriesList={props.countries} />
      </table>
    </div>
  )
}

export default CountryTable;