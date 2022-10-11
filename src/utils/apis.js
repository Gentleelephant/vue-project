import axios from "axios";
import { ElMessage } from 'element-plus'
import router from "@/router";

const api = axios.create({
    baseURL: "http://localhost:12080/api",
})


api.interceptors.response.use(response => {
    if (response.code === 200 && response.data.code === 500) {
        ElMessage.error(response.data.message);
        return;
    }
    return response.data;
}, error => {
    if (error.response.status === 401) {
        ElMessage.error(error.response.data.message);
        router.push("/");
    } else {
        ElMessage.error(error.response.data.message);
    }
})


// post请求
export const postRequest = (url, params) => {
    return api.post(url, params);
}