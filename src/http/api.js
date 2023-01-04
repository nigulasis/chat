import $http from "./index";

// 登录
export const loginApi = (data) =>$http({url:'/login',method:'post',data})
// 获取列表
export const getlist = () =>$http({url:'/getlist',method:'get'})

