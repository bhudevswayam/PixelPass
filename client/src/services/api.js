import axios from 'axios';
const API_URL = 'http://localhost:8080'
export const uploadFile = async (data) => {
    try {
        let response = await axios.post(`${API_URL}/upload`, data)
        return response.data;
    }catch(err){

        console.error(err.message + ' error while fetching the api');
    }
}