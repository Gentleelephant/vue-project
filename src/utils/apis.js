import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:12080/api",
})


// api.interceptors.response.use(response => {
//     if (response.status === 200) {
//         return response.data;
//     }
// })


// post请求
export const postRequest = (url, params) => {
    return api.post(url, params);
}