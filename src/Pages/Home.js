// import React, { useEffect, useState } from "react";
import useCountries from "../custom-hooks/useCountries";
// import Table from "@mui/material/Table";
// import { TabContainer } from "react-bootstrap";

// import TableHead from "../components/TableHead";
// import TableBody from "../components/TableBody";
 import CountriesTable from "../components/CountriesTable";


function Home() {
  const [error, countries, isLoading] = useCountries();

  if  (error) {
    return <div>Error</div>

  }
  return (
    <>
     {!isLoading ? (
        <div>
          <CountriesTable countries={countries} />
        </div>
      ) : (
        <div>Loading</div>
      )}

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
