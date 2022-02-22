import "./App.css";
// import useCountries from "./custom-hooks/useCountries";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import CountryDeatails from "./components/CountryDetails";
import { Container } from "react-bootstrap";
// import { TableBody } from "@mui/material";

function App() {

  return (
    
      <Container>
        <Router>
          {/* <input type={text} placeholder="search..."/>
        {countries.map((val, key) => {
          return <div>{val.Country}</div>
        })} */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="country/:name" element={<CountryDeatails />} />
          </Routes>
        </Router>

        
         
      </Container>
  );
}

export default App;
