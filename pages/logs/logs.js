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
    // new AV.Query(TFNUser).first().then(function(user) {
    //   // return user.save(null, {
    //   //   query: new AV.query(TFNUser).equalTo(this.data.openid),
    //   //   fetchWhenSave: true,
    //   // })
    //   console.log(user)
    //   return 
    // }).then(function(){
    //   console.log("成功" + e);
    // }).catch(function(error){
    //   console.log("失败" + error);
    // });
    var query = new AV.Query(TFNUser);
    query.equalTo('openid', app.globalData.openid);
    query.first().then(function (data) {
      // data 就是符合条件的第一个 AV.Objec
      console.log(data);
      if (data == undefined) {
        // console.log("哈哈undefined");
        // this.insertOrUpdateTNFUser();
        console.log("insertOrUpdate ");
        
      } else {
        console.log("else");
      }
    }, function (error) {
      console.log("我不知道这个error什么时候触发， 反正数据库没有的时候是不会触发的 " + error);
    });
    this.setData({
      userInfo: e.detail.userInfo,
    })
    var user = new TFNUser();
    console.log(this.data.chineseName);
    user.set('chineseName', this.data.chineseName);
    user.set('familyName', this.data.familyName);
    user.set('givenName', this.data.givenName);
    user.set('australianPhone', this.data.australianPhone);
    user.set('chinesePhone', this.data.chinesePhone);
    user.set('email', this.data.email);
    user.set('userInfo', this.data.userInfo);
    user.set('entryTime', this.data.entryTime);
    user.set('openid', app.globalData.openid)
    user.save().then(function (todo) {
      // 成功保存之后，执行其他逻辑.
      console.log('New object created with objectId: ' + user.id);
    }, function (error) {
      // 异常处理
      console.error('Failed to create new object, with error message: ' + error.message);
    });
  },

  insertOrUpdateTNFUser: function (objectId) {
    console.log("insertOrUpdate " + objectId)
    var user = new TFNUser();
    console.log(this.data.chineseName);
    user.set('chineseName', this.data.chineseName);
    user.set('familyName', this.data.familyName);
    user.set('givenName', this.data.givenName);
    user.set('australianPhone', this.data.australianPhone);
    user.set('chinesePhone', this.data.chinesePhone);
    user.set('email', this.data.email);
    user.set('userInfo', this.data.userInfo);
    user.set('entryTime', this.data.entryTime);
    user.set('openid', app.globalData.openid)
    user.save().then(function (todo) {
      // 成功保存之后，执行其他逻辑.
      console.log('New object created with objectId: ' + user.id);
    }, function (error) {
      // 异常处理
      console.error('Failed to create new object, with error message: ' + error.message);
    });
  }
});
