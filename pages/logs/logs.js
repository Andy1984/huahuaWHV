//logs.js
const util = require('../../utils/util.js')
const app = getApp()
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
    userInfo:"",
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
  getUserInfo: function (e) {
    console.log("好像获取到userInfo了")
    console.log(e.detail.userInfo.nickName)
    this.setData({
      wechat: e.detail.userInfo.nickName
    })
  }
})
