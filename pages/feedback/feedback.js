// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: [
      { id: 1, title: "功能" }, 
      { id: 2, title: "界面" }, 
      { id: 3, title: "视觉" }, 
      { id: 4, title: "投诉" }, 
      { id: 5, title: "其他" }],
    inputMax:200,
    inputMin:5,
    msg:"",
    flag:false,
    nameCheck:false,
    phoneCheck: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.parameter[0].checked = true;
    this.setData({
      parameter: this.data.parameter
    })
  },

  /**
   * 类型点击事件
   */
  parameterTap: function(e){
    var that = this;
    var this_checked = e.currentTarget.dataset.id
    var parameterList = this.data.parameter;
    for (var i = 0; i < parameterList.length; i++) {
      if (parameterList[i].id == this_checked) {
        parameterList[i].checked = true;//当前点击的位置为true即选中
      }
      else {
        parameterList[i].checked = false;//其他的位置为false
      }
    }
    that.setData({
      parameter: parameterList
    })
  },

  /**
   * 输入框输入事件
   */
  inputs:function(e){
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    if(len < this.data.inputMin){
      this.setData({
        msg:"至少"+this.data.inputMin+"个字才能提交哦！",
        flag:false
      })
    } else{
      this.setData({
        msg: "",
        flag:true
      })
    }

    this.setData({
      currentWordNumber: len
    })

  },

  /**
   * 校验姓名
   */
  nameInput:function(e){
    if (e.detail.value){
      this.setData({
        nameCheck:true
      })
    } else{
      this.setData({
        nameCheck: false
      })
    }
  },

  /**
   * 校验手机号
   */
  phoneInput: function(e){
    if (e.detail.value) {
      this.setData({
        phoneCheck: true
      })
    } else {
      this.setData({
        phoneCheck: false
      })
    }
  },

  /**
   * 提交反馈
   */
  submit: function(e){
    var warn = "";
    if (!this.data.flag){
      warn = "反馈信息不能为空";
    } else if(!this.data.nameCheck){
       warn = "姓名不能为空";
    } else if(!this.data.phoneCheck){
       warn = "手机号不能为空";
    } else{
      console.log("发送请求");
      wx.showToast({
        title: '提交成功',
        icon:"success"
      })
    }
    

    if(warn){
      wx.showModal({
        title: '提示',
        content: warn,
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})