import "./App.css";

import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import CountryDeatails from "./components/CountryDetails";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
  return (
    <Container style={{ backgroundColor: "#9db0f2" }}>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/:name" element={<CountryDeatails />} />
        <Route path="/country/Favorites" element={<CountryDeatails />} />
      </Routes>
    </Container>
  );
}

export default App;
