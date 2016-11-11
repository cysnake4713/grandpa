//app.js
App({
  onLaunch: function () {
    
  },
  get_keys:function(cb){
    var keys = []
    var action_data = this.globalData.action_data 
    for (var key in action_data ) {
      // console.log(key)
      keys.push(key)
    }
    typeof cb == "function" && cb(keys) 
  },
  get_values: function(key, cb){
    typeof cb == "function" && cb(this.globalData.action_data[key]) 
  },
  globalData:{
    //action_data:[
    //    {"key": "eat", "values": ["water", "food"]},
     //   {"key": "drink", "values": ["water", "food"]},
    //  ]
    action_data:{
      "eat": ["water", "food","1","2","3","4","5","6","7","8","9","10"],
      "drink": ["aaa","bbb"],
      "drink1": ["aaa","bbb"],
      "drink2": ["aaa","bbb"],
      "drink4": ["aaa","bbb"],
      "drink5": ["aaa","bbb"],
      "drink6": ["aaa","bbb"],
      "drink7": ["aaa","bbb"],
      "drink8": ["aaa","bbb"],
      "drink9": ["aaa","bbb"],
      "drink0": ["aaa","bbb"],
      "drink-": ["aaa","bbb"],
      "drink22": ["aaa","bbb"],
      "drink33": ["aaa","bbb"],
      "drink44": ["aaa","bbb"],
      "drink55": ["aaa","bbb"]
    }
  }
})