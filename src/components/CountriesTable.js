import "./Table.css"


function CountriesTable(props) {
  return (
    
    <table>
      {props.countries.map((country, index) => {
        return (
          <tr key={index}
          className="table">
            <td>
              <img src={country.flags.png} alt="Flag" />
                 
            </td>
            
            <td className='name'>{country.name.common}</td>
            <td className='popluation'>{country.population}</td>
            <td className='region'>{country.region}</td>
            <td className='languages'>{JSON.stringify(country.languages)}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default CountriesTable;
