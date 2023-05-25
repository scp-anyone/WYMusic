// pages/login/login.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  handlegetuserinfo(e){
    console.log(e)
    app.globalData.userinfo=e.detail.userInfo
    console.log(app.globalData.userinfo)
    wx.showToast({
      title: '登录成功',
    })
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/home-music/home-music',
      })
    }, 1000);

  },
  handleregister(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  handlecancle(){
    wx.showToast({
      title: '请先登陆',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})