// This hook is used to fetch one specific country

import url from './useCountries.js'


    function useCountry() {
        const [country, useCountry] = useState([]);
        const [error, setError] = useState(null);

    const useCountry = async (name) => {
        let response = await url.get(`/name/${name}?fullText=true`)
        let data = await response.data
        return data
        
    }

}
