import axios from "axios";

// const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY'

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        // Authorization: `Bearer ${BEARER_TOKEN}`,
    },
    timeout: 1000,
});
    
// Request Interceptor
// axiosInstance.interceptors.request.use(
//     async (request) => {
//         const token = localStorage.getItem("token");
//         if(token){
//             request.headers.Authorization = `Bearer ${token}`;
//         }
//         return request;
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )

// // Response Interceptor
// axiosInstance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//         const originalRequest = error.config;

//         if(error.response){
//             if(error.response.status === 401 && !originalRequest._retry){
//                 originalRequest._retry = true;
//                 const refreshed = await refreshToken()
//                 if(refreshed){
//                     const token = localStorage.getItem("token");
//                     originalRequest.headers.Authorization = `Bearer ${token}`;
//                     return axiosInstance(originalRequest);
//                 }
//             } else if(error.response.status === 403){
//                 console.error("Access denied. You do not have the necessary permissions.");
//             }
//         } else{
//             console.error("Network error. Please check internet connection.");
//         }

//         return Promise.reject(error);
//     }
// )

// // Refresh Tokin
// const refreshToken = async () => {
//     try {
//         const refreshToken = localStorage.getItem("refreshToken");
//         const response = await axios.post("http://localhost:3000/", {
//             refresh: refreshToken,
//         });
//         const {access} = response.data;
//         if(access) {
//             localStorage.setItem("token", access);
//             return true;
//         }
//         return false;
//     } catch (error) {
//         console.error("Failed to refresh token", error);
//         return false;
//     }
// };

export default axiosInstance;