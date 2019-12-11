import Mock from 'mockjs'

Mock.mock('/user/logout',{
  data: "退出成功！",
  status: 100
})
Mock.mock('/user/login',{
  data: {
    userName:'金大光',
    userId:'101',
    portraitUrl:'https://tvax3.sinaimg.cn/crop.0.0.996.996.50/861d0ce7ly8g8byd0ocsmj20ro0ro0u8.jpg'
  },
  code:0,
  status: 100
})