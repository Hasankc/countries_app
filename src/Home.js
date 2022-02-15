import React from "react";
import TableHead from "./components/TableHead"
import TableBody from "./components/TableBody";

import { TabContainer } from "react-bootstrap";

const Home = () => {
    return (
        <TabContainer>
            <Table >
                <TableHead />
                <TableBody />
            </Table>
           </TabContainer>
    )
}


export default Home;
