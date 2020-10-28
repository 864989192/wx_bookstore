// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotList: [],
    // 补全的数据
    replenish: [],
    searchvalue:""
  },
  // 自定義函數

  // 热词跳转页面
  detail(e) {
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.target.dataset.id}`,
      fail: () => {
        wx.showToast({
          title: '请稍后重试',
          icon: "loading",
          duration: 2000
        })
      }
    })
  },
  // 自动补全
  replenish() {
    wx.request({
      url: `https://api.zhuishushenqi.com/book/auto-complete?query=${this.data.searchvalue}`,
      method: 'GET',
      success: (res) => {
        this.setData({
          replenish: res.data.keywords
        })
        console.log(this.data.replenish)
      },
      fail: () => {
        wx.showToast({
          title: '请稍后重试',
          icon: "loading",
          duration: 2000
        })
      }
    })
  },
  inp(e){
this.setData({searchvalue:e.detail.value})
this.replenish()
  },
  // image触发query
  btnquery(){
    wx.navigateTo({
      url: `/pages/index_list/index_list?query=${this.data.searchvalue}`,
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.request({
      url: 'https://api.zhuishushenqi.com/book/hot-word',
      method: 'GET',
      success: (v) => {
        this.setData({
          hotList: v.data.newHotWords
        })
      },
    })
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