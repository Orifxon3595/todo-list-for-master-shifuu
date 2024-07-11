import axiosInstance from './axiosInstance'

const endPoint = 'todos/'

const getTodo = async () => {
    try {
        const response = await axiosInstance.get(endPoint);
        return response.data;
    } catch (error) {
        console.error("Api error:", error);
    }
}

const getByIdTodo = async (id) => {
    try {
        const response = await axiosInstance.get(`${endPoint}${id}/`);
        return response.data;
    } catch (error) {
        console.error("Api error:", error);
    }
}

const postTodo = async (item) => {
    try {
        const response = await axiosInstance.post(endPoint, item);
        return response.data;
    } catch (error) {
        console.error("Api error:", error);
    }
}

const putTodo = async (id, item) => {
    try {
        const response = await axiosInstance.put(`${endPoint}${id}/`, item);
        return response.data;
    } catch (error) {
        console.error("Api error:", error);
    }
}

const deleteTodo = async (id) => {
    try {
        const response = await axiosInstance.delete(`${endPoint}${id}/`);
        return response.data;
    } catch (error) {
        console.error("Api error:", error);
    }
}

const APITodo = {getTodo, getByIdTodo, postTodo, putTodo, deleteTodo}

export default APITodo;