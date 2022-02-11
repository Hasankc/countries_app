function TableRow(props) {
    function determineLanguages(languagesObj) {
        return Object.values(languagesObj || {}).join(', ');
    };
    return(
        <tr className='table'>
            <td>
                <img className='country-flag' src={props.country.flags.png} alt={'Flag of ' + props.country.name.common} />
            </td>
            <td className='name'>{props.country.name.common}</td>
            <td className='popluation'>{props.country.population}</td>
            <td className='region'>{props.country.region}</td>
            <td className='languages'>{determineLanguages(props.country.languages)}</td>
        </tr>
    )
}
export default TableRow;