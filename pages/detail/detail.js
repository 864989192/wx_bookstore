// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  details:[],
  coms:[],
  length:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: `https://api.zhuishushenqi.com/book/${options.id}`,
      method:"GET",
      success:(res)=>{
        this.setData({details:res.data})
      },
      fail:(e)=>{
        wx.showToast({
          title: '加載錯誤',
          icon:'loading',
          duration:2000
        })
      }
    })
    wx.request({
      url: 'https://api.zhuishushenqi.com/post/review/by-book',
      method:"GET",
      data:{
        book:options.id,
        sort:"updated",
        start:'0',
        limit:'20'
      },
      success:(res)=>{
       this.setData({length:res.data.total,coms:res.data.reviews})
       console.log(this.data.coms)
      },
      fail:(e)=>{
        wx.showToast({
          title: '加載錯誤',
          icon:'loading',
          duration:2000
        })
      }
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