import axios from 'axios'
// 创建axios实例
const service = axios.create({
    baseURL: ' https://www.easy-mock.com/mock/5c1329e37ab16c3d781eb769/verynavi', // api的base_url
    timeout: 30000 // 请求超时时间
  })
export default service