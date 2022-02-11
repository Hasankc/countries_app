
import "./App.css";
// import CountriesTable from "./components/CountriesTable";
import useCountries from "./custom-hooks/useCountries";
import CountryTable from "./components/CountryTable";

function App() {
  const [error, countries] = useCountries();

  return (
    <div className="App">
    {/* < CountryTable countries={countries} />; */}
      <CountryTable countries={countries} />
    </div>  
  ); 
}

export default App;
