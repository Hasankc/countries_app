import useCountries from "../custom-hooks/useCountries";

import CountriesTable from "../components/CountriesTable";

function Home() {
  const [error, countries, isLoading] = useCountries();

  if (error) {
    return <div>Error</div>;
  }
  return (
    <>
      {!isLoading ? (
        <div>
          <CountriesTable countries={countries} />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
export default Home;
