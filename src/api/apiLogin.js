import axiosInstance from "./axiosInstance";


const postLogin = async (item) => {
  try {
    const response = await axiosInstance.post(andPoint, item);
    return response.data;
  } catch (error) {
    console.error("Api da xatolik yuz berdi", error);
    throw error;
  }
};

const ApiLogin = { postLogin };

export default ApiLogin;
