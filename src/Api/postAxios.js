
import axios from 'axios'

const PostInstance = axios.create({
    baseURL : 'https://wcprojects.in/api/',
    
    // baseURLMr : 'https://wcprojects.in/api/marathi/',
    // baseURLIn : 'https://wcprojects.in/api/india/'
});

export default PostInstance