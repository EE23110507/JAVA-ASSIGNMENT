import axios from "axios";

const API_URL = "http://localhost:9090/api/companies";

export const getCompanies = () => axios.get(API_URL);
export const getCompanyById = (id) => axios.get(`${API_URL}/${id}`);
export const createCompany = (company) => axios.post(API_URL, company);
export const updateCompany = (id, company) => axios.put(`${API_URL}/${id}`, company);
export const deleteCompany = (id) => axios.delete(`${API_URL}/${id}`);