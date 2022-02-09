import './App.css'


  this.baseUrl = "https://restcountries.com/v3.1/";

    async getAllCountries   () => {

        const fetchData = await fetch(`${this.baseUrl}/all`)
        .then(res) => {
            if (res.ok) {
                return res.jason();
            } else {
                throw new Error(res.error);
            }
            const resData = await this.getAllCountries.jason();
            return resData;
        } catch (error) {
            return `Error all countries ${error}`;
    }
    
    

