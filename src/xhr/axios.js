import Vue from 'vue';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
var baseUrl = '';
//响应拦截
axios.interceptors.response.use(
  function(response) {
    console.log(response);
    if (response.data.code == '200') {
      Vue.prototype.$message.success(response.data.msg);
    } else {
      Vue.prototype.$message.error(response.data.msg);
    }
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    this.$message.error('系统错误');
    return Promise.reject(error);
  }
);
// 多环境配置
if (process.env.NODE_ENV == 'development') {
  // 开发环境
  baseUrl = 'api';
} else {
  // 生产环境
  baseUrl = process.env.VUE_APP_API_DEV;
}
export const ajax = function(params) {
  console.log(params);
  let p = params;
  p.url = baseUrl + p.url;
  return axios(p);
};
