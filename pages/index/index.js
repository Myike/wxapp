//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [{
      img: "../../images/EmptyBanner.jpg",
      openpath: "../../pages/figure/figure"
    }, {
      img: "../../images/EmptyBanner1.jpg",
      openpath: "../../pages/bankQuery/bankQuery"
    }, {
      img: "../../images/EmptyBanner2.jpg",
      openpath: "../../pages/IDCard/IDCard"
    }, {
      img: "../../images/EmptyBanner3.jpg",
      openpath: "../../pages/MobileHome/MobileHome"
    }],
    server: [
      {
        img: "../../images/sfz.png",
        openpath: "../../pages/IDCard/IDCard",
        text: "应用监控"
      },
      {
        img: "../../images/yhk.png",
        openpath: "../../pages/bankQuery/bankQuery",
        text: "个人账目"
      },
      {
        img: "../../images/gsd.png",
        openpath: "../../pages/MobileHome/MobileHome",
        text: "功能测试"
      },
      {
        img: "../../images/ip.png",
        openpath: "../../pages/IP/IP",
        text: "IP查询"
      }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
