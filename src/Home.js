import React from "react";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";

import Table from "@mui/material/Table";
import { TabContainer } from "react-bootstrap";

const Home = () => {
  return (
    <>
      {" "}
      <h1>All countries</h1>
      <TabContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          
          <TableHead />
          <TableBody />
        </Table>
      </TabContainer>
    </>
  );
};

export default Home;
