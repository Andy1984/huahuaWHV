const app = getApp()
const AV = require('../../libs/av-weapp-min.js');
const manager = require('../../model/manager.js');
const util = require('../../utils/util.js')
Page({
  data:{

  },
  onLoad: function () {
    
    manager.getObjectId(objectId => {
      console.log("成功获取objectId " + objectId);
    });
    
    console.log(util.formatTime(new Date))
    var objectId = app.globalData.objectId
    if (objectId == null) {
      console.log("null")
    } else {
      console.log("query")
      var query = new AV.query('TFNUser');
      query.get(objectId).then((user) => {
        console.log("user")
        console.log(user)
      })
    }
  }
})