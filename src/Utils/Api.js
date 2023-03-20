import axios from "axios";

const BASE_URL = 'https://api.tvmaze.com';

const fetchDataFromApi = async (url, params) => {
    // alert(BASE_URL + url);
    try { 
        const  data = await axios.get(BASE_URL + url, {
            params
        })

        return data;

    }
    catch (err) { 
        alert(err);
        return err;
    } 
}

export default fetchDataFromApi;
