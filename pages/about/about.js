// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginUrl: "../../pages/login/login",
    userInfo: {
      avatarUrl:"../../images/y.jpg"
    },
    hasUserInfo: 0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userTitle:"请先登录哦"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  
  },


  //自定义函数
  userSetting: function(){
    console.log("用户设置")
  },

  userMessage: function(){
    console.log("用户信息");
  },

  userLogin: function(e){
    var status = e.currentTarget.dataset.status;
    console.log(status);
    if(status == 0){
      wx.navigateTo({
        url: '../../pages/login/login',
      })
    }
    
  }


})