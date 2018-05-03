const app = getApp()
const AV = require('../../libs/av-weapp-min.js');
const manager = require('../../model/manager.js');
const util = require('../../utils/util.js')
Page({
  data:{
    att:{},
    additionalMethod:"",
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
            url: '../../pages/logs/logs'
          })
          // 异常处理
          console.error(error);
        });
      } else {
        console.log("应该在这里jump");
        wx.redirectTo({
          url: '../../pages/logs/logs'
        })
      }
    });
  },




  commit: function (e) {
    console.log("点击信息有误， 重写填写 home.js的commit方法");
    wx.redirectTo({
      url: '../../pages/logs/logs'
    })
  },

  radioChange: function(e) {
    console.log("radioChange");
    console.log(e.detail.value);
    this.setData({
      additionalMethod: e.detail.value
    })

  },
  selectAdditionalMethod: function(e) {
    console.log(this.data.additionalMethod)
    var objectId = app.globalData.objectId;
    var user = AV.Object.createWithoutData('TFNUser', objectId);
    user.set('additionalMethod', this.data.additionalMethod)
    util.showBusy('提交中')
    user.save().then(function (todo) {
      util.showSuccess("提交成功");
      // 成功保存之后，执行其他逻辑.
      console.log('New object created with objectId: ' + user.id);
    }, function (error) {
      // 异常处理
      util.showModel("提交失败" + error.message);
      console.error('Failed to create new object, with error message: ' + error.message);
    });
  },
  showMoneyQRCode:function(e) {
    wx.previewImage({
      urls: ["https://image.ibb.co/eDfsR7/Screen_Shot_2018_05_03_at_12_48_36_PM.png"],
    })
  },
  tapImage: function(e) {
    wx.previewImage({
      urls: [this.data.att.imageURL],
    })
  }
})