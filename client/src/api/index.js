import axios from 'axios'

const API = axios.create({ baseRUL: 'http://localhost:8000'})

// if local Storage has profile object, we put it into request's header,
//back end can get the token by fetching request' header
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile').token)}`;
    }

    return req;
})

// call different api 

    // ask back-end manipulate user schema
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

    // ask back-end manipulate articles/posts schema
