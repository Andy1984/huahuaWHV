//logs.js
const util = require('../../utils/util.js')
const app = getApp()
const Todo = require('../../model/user.js')
const AV = require('../../libs/av-weapp-min.js')
Page({
  data: {
    chineseName:"",
    familyName:"",
    givenName:"",
    australianPhone:"",
    chinesePhone:"",
    email:"",
    entryTime:"",
    wechat:"",
    userInfo:{},
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  
  gotoShowCode: function(e) {
    console.log("UserInfo")
    console.log(app.globalData)
    console.log(this.data.wechat)
    console.log(this.data)
    console.log(util.formatTime(new Date))
  },
  bindChineseName: function(e) {
    this.setData({
      chineseName: e.detail.value
    })
  },
  bindWechat: function(e) {
    this.setData({
      wechat: e.detail.value
    })
  },
  bindFamilyName: function(e) {
    this.setData({
      australianPhone: e.detail.value
    })
  },
  bindGivenName: function (e) {
    this.setData({
      familyName: e.detail.value
    })
  },
  bindAustralianPhone: function (e) {
    this.setData({
      australianPhone: e.detail.value
    })
  },
  bindChinesePhone: function (e) {
    this.setData({
      chinesePhone: e.detail.value
    })
  },
  bindEmail: function (e) {
    this.setData({
      email: e.detail.value
    })
  },
  bindEntryTime: function (e) {
    this.setData({
      entryTime: e.detail.value
    })
  },
  bindGivenName: function (e) {
    this.setData({
      familyName: e.detail.value
    })
  },

  commit: function(e) {
    console.log("好像获取到userInfo了")
    this.setData({
      wechat: e.detail.userInfo,
      userInfo: e.detail.userInfo
    })
    console.log(e.detail.userInfo.nickName)
    console.log(e.detail.userInfo)


    // // 声明一个 Todo 类型
    // var Todo = AV.Object.extend('Todo');
    // // 新建一个 Todo 对象
    // var todo = new Todo();
    // todo.set('title', '工程师周会');
    // todo.set('content', '每周工程师会议，周一下午2点');
    // todo.save().then(function (todo) {
    //   // 成功保存之后，执行其他逻辑.
    //   console.log('New object created with objectId: ' + todo.id);
    // }, function (error) {
    //   // 异常处理
    //   console.error('Failed to create new object, with error message: ' + error.message);
    // });
  },
});
