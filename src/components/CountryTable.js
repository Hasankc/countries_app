function CountryTable(props) {
  return (
    <table>
      {props.countries.map((country, index) => {
        return (
          <tr key={index}>
            <td>
              <img src={country.flags.png} alt="Flag" />
            </td>
            <td>{country.name.common}</td>
            <td>{country.population}</td>
            <td>{country.region}</td>
            <td>{JSON.stringify(country.languages)}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default CountryTable;
