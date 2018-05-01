//logs.js
const util = require('../../utils/util.js')
const app = getApp()
const AV = require('../../libs/av-weapp-min.js')
class TFNUser extends AV.Object { }
AV.Object.register(TFNUser);
Page({
  data: {
    chineseName:"",
    familyName:"",
    givenName:"",
    australianPhone:"",
    chinesePhone:"",
    email:"",
    entryTime:"",
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
    console.log(this.data)
    console.log(util.formatTime(new Date))
  },
  bindChineseName: function(e) {
    this.setData({
      chineseName: e.detail.value
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

  commit: function(e) {
    console.log("好像获取到userInfo了")
    this.setData({
      userInfo: e.detail.userInfo,
    })
    // 新建一个 Todo 对象
    var user = new TFNUser();
    console.log(this.data.chineseName);
    user.set('chineseName',this.data.chineseName);
    user.set('familyName',this.data.familyName);
    user.set('givenName',this.data.givenName);
    user.set('australianPhone',this.data.australianPhone);
    user.set('chinesePhone',this.data.chinesePhone);
    user.set('email',this.data.email);
    user.set('userInfo',this.data.userInfo);
    user.set('entryTime',this.data.entryTime);
    user.save().then(function (todo) {
      // 成功保存之后，执行其他逻辑.
      console.log('New object created with objectId: ' + user.id);
    }, function (error) {
      // 异常处理
      console.error('Failed to create new object, with error message: ' + error.message);
    });
  },
});
