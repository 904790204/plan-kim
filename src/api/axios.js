import axios from "axios";

let base = "/";

// 请求前拦截
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    console.log("请求超时");
    return Promise.reject(err);
  }
);

// 返回后拦截
axios.interceptors.response.use(
  data => {
    if(data.data.status === 100){
      return data.data;
    }else{
      return Promise.reject(data);
    }
  },
  err => {
    console.log(err);
    if(!err.response){
      console.log("系统错误");
    } else if (err.response.status === 504 || err.response.status === 404) {
      console.log("服务器被吃了⊙﹏⊙∥");
    } else if (err.response.status === 401) {
      console.log("登录信息失效⊙﹏⊙∥");
    } else if (err.response.status === 500) {
      console.log("服务器开小差了⊙﹏⊙∥");
    }
    return Promise.reject(err);
  }
);

// @RequestBody请求
const post = (url, params) => {
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8"
    }
  });
};

const get = (url, params) => {
  return axios({
    method: "get",
    url: `${base}${url}`,
    params
  });
};

const all = function(requsetArray, callback) {
  axios.all(requsetArray).then(axios.spread(callback));
};
let $axios = {
  post,
  get,
  all
}
export default $axios