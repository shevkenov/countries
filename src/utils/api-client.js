import axios from 'axios';

const client = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2'
});

export const getCountries = async() => {
    return await client.get(`/all`).then(res => res.data);
}