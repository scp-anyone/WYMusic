// components/video-item/video-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoItem: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onVideoItemTap() {
      const {id} = this.data.videoItem
      wx.navigateTo({
        url: `/pages/detail-video/detail-video?id=${id}`,
      })
    }
  }
})
