import axios from 'axios'

// Creates customized instance of axios with default properties that can be applied universally inside the project

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
    }
})