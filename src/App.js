import "./App.css";
// import { Link } from "react-router-dom";
// import CountriesTable from "./components/CountriesTable";
import useCountries from "./custom-hooks/useCountries";
//  import CountryTable from "./components/CountryTable";
// import Country from "./Pages/Country";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CountryDeatails from "./components/CountryDetails";
import { Container } from "react-bootstrap";

function App() {
  // const [searchTerm, setSearchTerm] = useState(" ");
  // const [error, countries] = useCountries();

  return (
    <div>
      <Container>
        <Router>
          {/* <input type={text} placeholder="search..."/>
        {countries.map((val, key) => {
          return <div>{val.Country}</div>
        })} */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:nameId" element={<CountryDeatails />} />
          </Routes>
        </Router>

        
        {/* <CountryTable countries={countries} /> */}
      </Container>
    </div>
  );
}

export default App;
