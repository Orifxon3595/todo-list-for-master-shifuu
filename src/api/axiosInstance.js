import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.example.com',
    headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
    },
    timeout: 10000,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    async (request) => {
        const token = localStorage.getItem("token");
        if(token){
            request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if(error.response){
            
        }
    }
)

