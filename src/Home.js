import React from "react";
import { TabContainer } from "react-bootstrap";
import Table from "@mui/material/Table";

import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import CountryTable from "./components/CountryTable"



const Home = () => {
  return (
    <>
      {" "}
      <h1>All countries</h1>
      <TabContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          
          <CountryTable/>
          <TableHead />
          <TableBody />
        </Table>
      </TabContainer>
    </>
  );
};

export default Home;
