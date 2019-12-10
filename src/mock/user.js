import Mock from 'mockjs'

Mock.mock('/user/logout',{
  data: "退出成功！",
  status: 100
})