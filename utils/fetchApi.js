import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '5f2296fe45mshcc700e1fbc4102bp171b4fjsn75aae960f3fd',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data
}