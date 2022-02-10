import "./App.css";
import CountryTable from "./components/CountryTable";
import useCountries from "./custom-hooks/useCountries";

function App() {
  const [error, countries] = useCountries();

  return <CountryTable countries={countries} />;
}

export default App;
