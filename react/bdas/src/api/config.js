// 封装 ajax 请求
import axios from 'axios';
import { baseUrl } from '../../../vite-react-app/src/api/config';

// 设置统一地址前缀
export default baseUrl = 'http://localhost:3000';

const axiosInstance = axios.create({
  baseURL: baseUrl
})

export {
  axiosInstance
}
