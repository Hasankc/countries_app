// import React, { useEffect, useState } from "react";
import useCountries from "../custom-hooks/useCountries";
import Table from "@mui/material/Table";
import { TabContainer } from "react-bootstrap";

import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
 import CountryTable from "../components/CountryTable";


function Home() {
  const [error, countries, isLoading] = useCountries();

  console.log("from Home", countries);
  if  (error) {
    return <div>Error</div>

  }
  return (
    <>
      <div>{isLoading}</div>
      <CountryTable countries={countries} />

      {/* <h1>All countries</h1>
      <TabContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          
          {/* <CountryTable/> */}
          {/* <TableHead />
          <TableBody countries={countries} />
        </Table>
      </TabContainer>  */}
    </>  
  );
}
export default Home;
