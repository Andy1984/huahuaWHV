const util = require('../../utils/util.js')
const app = getApp()
const AV = require('../../libs/av-weapp-min.js')
const manager = require('../../model/manager.js')

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
    status:"未处理",
  },
  
  bindChineseName: function(e) {
    this.setData({
      chineseName: e.detail.value
    })
  },
  bindFamilyName: function(e) {
    this.setData({
      familyName: e.detail.value
    })
  },
  bindGivenName: function (e) {
    this.setData({
      givenName: e.detail.value
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
    util.showBusy('提交中')
    this.setData({
      userInfo: e.detail.userInfo,
    })
    var query = new AV.Query('TFNUser');
    query.equalTo('openid', app.globalData.openid);
    query.first().then(function (aUser) {
      // data 就是符合条件的第一个 AV.Objec
      if (aUser == undefined) {
        console.log("aUser is undefined ");
        return null;
      } else {
        console.log("aUser.openid =",aUser.attributes.openid);
        return aUser.id;
      }
    }, function (error) {
      wx.hideToast();
      util.showModel("失败: "+error.message);
      console.log("我不知道这个error什么时候触发， 反正数据库没有的时候是不会触发的 " + error);
    }).then((objectId) => {
      var user = AV.Object.createWithoutData('TFNUser', objectId);
      user.set('chineseName', this.data.chineseName);
      user.set('familyName', this.data.familyName);
      user.set('givenName', this.data.givenName);
      user.set('australianPhone', this.data.australianPhone);
      user.set('chinesePhone', this.data.chinesePhone);
      user.set('email', this.data.email);
      user.set('userInfo', this.data.userInfo);
      user.set('entryTime', this.data.entryTime);
      user.set('openid', app.globalData.openid);
      user.set('status', this.data.status);
      user.set('imageURL', '');
      user.set('tfn','');
      user.save().then(function (todo) {
        // 成功保存之后，执行其他逻辑.
        console.log('New object created with objectId: ' + user.id);
        wx.hideToast();
        wx.redirectTo({
          url: '../../pages/home/home',
        })
      }, function (error) {
        // 异常处理
        console.error('Failed to create new object, with error message: ' + error.message);
      });
    });
  },
});
