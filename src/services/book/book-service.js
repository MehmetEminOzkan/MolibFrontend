import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

// COMMON ENDPOINTS
export const getBookById = () => { };
export const getBooks = async () => {
    const response = await axios.get(`${API_URL}/car/visitors/all`);
    return response.data;
};
export const getBooksByPage = async (page = 0, size = 6, sort = "model", direction = "ASC") => {
    const response = await axios.get(`${API_URL}/car/visitors/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`);
    return response.data;
};

// ADMIN ENDPOINTS
export const addBook = () => { };
export const deleteBook = () => { };
export const deleteBookImage = () => { };
export const downloadBookReports = () => { };
export const updateBook = () => { };
export const uploadBookImage = () => { };