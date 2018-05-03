const app = getApp()
const AV = require('../libs/av-weapp-min.js')
class TFNUser extends AV.Object {}
AV.Object.register(TFNUser);

const getObjectId = callback => {
  AV.User.loginWithWeapp().then(user => {
    app.globalData.user = user.toJSON();
  }).then(() => {
    var objectId = wx.getStorageSync('objectId');
    var openid = wx.getStorageSync('openid');
    app.globalData.objectId = objectId
    app.globalData.openid = openid;
    console.log('本地objectId' + objectId);
    if (objectId) {
      console.log("本地已经有了objectId");
      callback(objectId);
      return;
    }
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("发送 res.code 到后台换取 openId, sessionKey, unionId");
        console.log("openid = ", AV.User.current().attributes.authData.lc_weapp.openid)
        app.globalData.openid = AV.User.current().attributes.authData.lc_weapp.openid
        wx.setStorageSync("openid", app.globalData.openid)
        var query = new AV.Query(TFNUser);
        query.equalTo('openid', app.globalData.openid);
        query.first().then(aUser => {
          console.log(aUser)
          // data 就是符合条件的第一个 AV.Objec
          if (aUser == undefined) {
            return null;
          } else {
            app.globalData.objectId = aUser.id;
            return aUser.id;
          }
        }, function (error) {
          console.log("我不知道这个error什么时候触发， 反正数据库没有的时候是不会触发的 " + error);
        }).then(callback);
      }
    });
  }).catch(console.error);  
}
module.exports = {
  getObjectId: getObjectId,
}