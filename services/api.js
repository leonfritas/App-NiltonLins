import axios from "axios";

const api = axios.create({
    baseURL: "http://apirest.niltonlins.br:8093/api"
})

export default api;

// const BASE_URL = "http://apirest.niltonlins.br:8093/api";

// export const createStudent = async (studentData) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/hep/student`, studentData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// console.warn(studentData)

// export const getStudent = async (studentId) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/hep/student?id=${studentId}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Outras funções de API aqui...

// export default {
//   createStudent,
//   getStudent,
//   // Outras funções de API aqui...
// };
