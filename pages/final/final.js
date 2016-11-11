
var app = getApp()
Page({
  data: {
    value_data: [],
    key: null,
    final_value: null
  },
  //事件处理函数
  bindValueButtonTap: function(event) {  
    this.setData({
        final_value: event.target.dataset.value
    })  
  },
  bindValueButtonReturn : function(event) {
    wx.navigateBack()
  },
  onLoad: function (option) {
  
    var that = this
    //调用应用实例的方法获取全局数据
    app.get_values(option.key, function(data){
      console.log(data)
      console.log(option.key)
      that.setData({
        value_data: data,
        key: option.key,
        final_value: ''
      })
    })
  }
})
