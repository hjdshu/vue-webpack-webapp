
import store from './../store/index';
//if npm install axios
// import axios from 'axios';


// Add a request interceptor
axios.interceptors.request.use(function (config) {
  store.ajax_pending = true;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  store.ajax_pending = false;
  if(response.data.status){
    return response.data.data;
  }else{
    if(response.data.description == '没有该用户'){
      return tips(response.data.description,'long');
    }
    return tips(response.data.description);
  }
}, function (error) {
  store.ajax_pending = false;
  if(error.response.data.description){
    tips(error.response.data.description);
  }else{
    tips('网络请求错误，请退出后重试！');
  }
  return Promise.reject(error);
});

axios.defaults.baseURL = '';

function catchError(err) {
  console.log(err);
  return tips('网络异常，请稍后再试！','long')
}

export const UserInfo = (cb) => {
  axios.get('user_info')
    .then(function (res) {
      cb(res)
    })
    .catch(function (err) {
      catchError(err)
    })
}

