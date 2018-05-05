const app = getApp()
const AV = require('../../libs/av-weapp-min.js');
const manager = require('../../model/manager.js');
const util = require('../../utils/util.js')
Page({
  data:{
    att:{},
  },
  onLoad: function () {
    util.showBusy("加载中");
    manager.getObjectId(objectId => {
      wx.hideToast();
      console.log("成功获取objectId " + objectId);
      if (objectId) {
        var query = new AV.Query('TFNUser');
        query.get(objectId).then(user => {
          var att = user.attributes;
          this.setData({
            att:att
          })
        }, function (error) {
          console.log("大概数据库删除过了，所以有error")
          wx.redirectTo({
            url: '../../pages/form/form'
          })
          // 异常处理
          console.error(error);
        });
      } else {
        console.log("应该在这里jump");
        wx.redirectTo({
          url: '../../pages/form/form'
        })
      }
    });
  },




  commit: function (e) {
    console.log("点击信息有误， 重写填写 home.js的commit方法");
    wx.redirectTo({
      url: '../../pages/form/form'
    })
  },
  tapImage: function(e) {
    wx.previewImage({
      urls: [this.data.att.imageURL],
    })
  }
})