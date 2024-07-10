import axiosInstance from "./axiosInstance";

const endPoint = 'auth/users/';

const postSignup = async (item) => {
    try{
        const response = await axiosInstance.post(endPoint, item)
        return response.data
    }catch(error){
        console.error('API da xatolik yuz berdi', error);
        throw error;
    }
}

const ApiSignup = {postSignup};

export default ApiSignup;