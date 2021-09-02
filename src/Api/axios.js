
import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://wcprojects.in/api/eng/',
    
    // baseURLMr : 'https://wcprojects.in/api/marathi/',
    // baseURLIn : 'https://wcprojects.in/api/india/'
});

export default instance