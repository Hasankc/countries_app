import TableRow from "./TableRow";

function TableBody({countries}) {
  return (
    <tbody>
      {countries?.map((country, index) => {
        return <TableRow key={index} index={index} country={country} />;
      })}
    </tbody>
  );
}

export default TableBody;
