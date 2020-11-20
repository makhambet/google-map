import axios from 'axios'
import Cookies from 'js-cookie'

const service = axios.create({
    baseURL: process.env.BASE_URL + 'api/',
    timeout: 60*24*60
})



service.interceptors.request.use(
    config => {
        // do something before request is sent

        //   if (store.getters.token) {
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
        config.headers['token'] = Cookies.get('colos-token')
        //   }
        return config
    },
    error => {
        // do something with request error
        alert(error) // for debug
        return Promise.reject(error)
    }
)

export default service;
