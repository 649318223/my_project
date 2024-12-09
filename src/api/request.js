import axios from 'axios';

const service = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 60000, // 请求超时时间
})

service.interceptors.request.use( config => {

    return config
}, error => {

})
service.interceptors.response.use( response => {

    return response.data
}, error => {

})

export default service
