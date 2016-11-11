//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    keys_data: []
    
  },
  //事件处理函数
  binKeyButtonTip: function(event) {
    var key = event.target.dataset.key
    wx.navigateTo({
      url: '../final/final?key='+key
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.get_keys(function(keys_data){
      //更新数据
      that.setData({
        keys_data:keys_data
      })
    })
  }
})
