import axios from 'axios';
import apiObj from "../../public/static/config/cfg";
console.log(process.env.NODE_ENV)
let baseUrl = '';
//如果是开发环境，或者没有命令参数 或者打包环境为开发环境走开发地址
if(process.env.NODE_ENV == 'development' || !process.env.VUE_SERVER_ENV || process.env.VUE_SERVER_ENV == 'dev'){
    baseUrl = apiObj.httpApiRootDev
    // baseUrl = apiObj.httpApiRootTest
// 打包环境为正式环境走正式地址
}else if(process.env.VUE_SERVER_ENV == 'pro'){
    baseUrl = apiObj.httpApiRootPro
// 打包环境为测试环境走测试地址
}else if(process.env.VUE_SERVER_ENV == 'test'){
    baseUrl = apiObj.httpApiRootTest
}
const http = axios.create({
    baseURL:baseUrl,
    timeout:10000
})
//请求拦截
http.interceptors.request.use((config)=>{
    config.headers['Content-Type'] = 'application/json';
    config.headers['X-KeyTech-Domain'] = 'ctest.education.adasplus.com';
    config.headers['X-user-userid'] = 24;
    config.headers['X-KeyTech-Session'] = "SZgLuh3fCzjpyEKb9VQicsO5nM6GITte";
    return config;
},(error)=>{
    Promise.reject(error);
})
//相应拦截
http.interceptors.response.use((response)=>{

    return response;
},(error)=>{
    return Promise.reject(error);
})
export default http