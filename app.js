//app.js
const AV = require('./libs/av-weapp-min.js');
const app = getApp()
AV.init({
  appId: 'HXy3XwayJULSBRPV2MhgBLAE-gzGzoHsz',
  appKey: 'S9r3Pkv3hsF6xR8eR02hjWqs',
});
class TFNUser extends AV.Object { }

App({
  
  onLaunch: function () {
    //这样你就可以在应用中使用 AV.User.loginWithWeapp() 方法来使用当前用户身份登录了。
    // AV.User.loginWithWeapp().then(user => {
    //   this.globalData.user = user.toJSON();
    // }).catch(console.error);

    
  },
  globalData: {
    openid:'',
    objectId: null
  }
})