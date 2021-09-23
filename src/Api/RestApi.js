
import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://dn.wcprojects.in/api/',
});

export default instance