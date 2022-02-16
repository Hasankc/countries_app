import TableRow from "./TableRow";

function TableBody(props) {
  return (
    <tbody>
      {props.countriesList.map((country, index) => {
        return <TableRow key={index} index={index} country={country} />;
      })}
    </tbody>
  );
}

export default TableBody;
