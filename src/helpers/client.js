import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'https://mern-auth-ej2m.onrender.com',
});