
import "./App.css";
import { Link } from 'react-router-dom';
// import CountriesTable from "./components/CountriesTable";
import useCountries from "./custom-hooks/useCountries";
import CountryTable from "./components/CountryTable";
import Country from "./Pages/Country";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const [error, countries] = useCountries();
  
  return (
   

    <div className="App">
       <Router>
       
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
         <switch>
            <Routes>
              <Route path='/' element ={<Home />}  />
              <Route path='/:country' element ={<Country />}/>
              </Routes>
              </switch>
            </Router>
        
        
      
       
    {/* < CountryTable countries={countries} />; */}
      <CountryTable countries={countries} />
    </div>  
  ); 
}



export default App;
