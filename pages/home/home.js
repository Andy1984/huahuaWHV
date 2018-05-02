const app = getApp()
const AV = require('../../libs/av-weapp-min.js');
const manager = require('../../model/manager.js');
const util = require('../../utils/util.js')
Page({
  data:{
    att:{}
  },
  onLoad: function () {
    util.showBusy("加载中");
    manager.getObjectId(objectId => {
      // util.showModel();
      console.log("成功获取objectId " + objectId);
      if (objectId) {
        var query = new AV.Query('TFNUser');
        query.get(objectId).then(user => {
          var att = user.attributes;
          this.setData({
            att:att
          })
        }, function (error) {
          console.log("异常")
          // 异常处理
          console.error(error);
        });
      } else {
        wx.navigateTo({
          url: '../../pages/logs/logs'
        })
      }
    });
  },
  commit: function (e) {
    console.log("home.js的commit方法");
    wx.navigateTo({
      url: '../../pages/logs/logs'
    })
  }
})