import "./App.css";
// import useCountries from "./custom-hooks/useCountries";
import Home from "./Pages/Home";
import {Route, Routes } from "react-router-dom";
import CountryDeatails from "./components/CountryDetails";
import { Container } from "react-bootstrap";


function App() {

  return (
    
      <Container style={{ backgroundColor: "#9db0f2" }}>
        
         

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="country/:name" element={<CountryDeatails />} />
            {/* <Route path="/country/fav" element={<Favorites />} /> */}
          </Routes>
        

        
         
      </Container>
  );
}

export default App;
