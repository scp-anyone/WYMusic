App({
  globalData: {
    statusBarHeight: 0,
    innerHeight: 0,
    userinfo:null
  },

  onLaunch() {
    wx.getSystemInfo({
      success: (res) => {
        const {screenHeight, statusBarHeight} = res
        this.globalData = {
          statusBarHeight: statusBarHeight,
          innerHeight: screenHeight - statusBarHeight - 44
        }
      },
    })
    if(this.globalData.userinfo==null){
      wx.showLoading({
        title: '还未登录',
      })
      setTimeout(() => {
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }, 1000);


    }
  }
})