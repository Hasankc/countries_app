import "./App.css";

import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import CountryDeatails from "./components/CountryDetails";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Favorites from './components/Favorite/favorites'

function App() {
  return (
    <>
    <Container style={{ backgroundColor: "#9db0f2" }}>
      

      
      <Link to ='/country/favorites'>Favorites </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/:name" element={<CountryDeatails />} />
        <Route path="/country/favorites" element={<Favorites />} />
      </Routes>
    </Container>
    </>
  );
}

export default App;
