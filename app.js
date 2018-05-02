//app.js
const AV = require('./libs/av-weapp-min.js');
AV.init({
  appId: 'HXy3XwayJULSBRPV2MhgBLAE-gzGzoHsz',
  appKey: 'S9r3Pkv3hsF6xR8eR02hjWqs',
});


App({
  
  onLaunch: function () {
    //这样你就可以在应用中使用 AV.User.loginWithWeapp() 方法来使用当前用户身份登录了。
    AV.User.loginWithWeapp().then(user => {
      this.globalData.user = user.toJSON();
    }).catch(console.error);

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("发送 res.code 到后台换取 openId, sessionKey, unionId")
        console.log("openid = ",AV.User.current().attributes.authData.lc_weapp.openid)
        this.globalData.openid = AV.User.current().attributes.authData.lc_weapp.openid
      }
    })
  },
  globalData: {
    userInfo: null,
    openid:''
  }
})