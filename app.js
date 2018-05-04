//app.js
const AV = require('./libs/av-weapp-min.js');
const app = getApp()
AV.init({
  appId: 'HXy3XwayJULSBRPV2MhgBLAE-gzGzoHsz',
  appKey: 'S9r3Pkv3hsF6xR8eR02hjWqs',
});

App({
  onLaunch: function () {
  },
  globalData: {
    openid:'',
    objectId: null
  }
})