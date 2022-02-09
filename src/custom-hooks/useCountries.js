// This hook is used to fetch all countries
import  {useState, useEffect} from "react";

const url = "https://restcountries.com/v3.1/all";

const useCountries = function () {

    const [data, setData] = useState();

    const [error, setError] = useState();

    const getData = async function () {
        const resp = await fetch(url);
        if(resp.ok) {
            throw new Error("Response not ok!");

        }

        const data = await Response.jason();

        setData(data);

    } catch (err) {
        setError(err.message);
    }
    useEffect(() => {
        getData();
    }, []);
    return [data, error];

}


export default useCountries;