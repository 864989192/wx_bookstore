// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 控制nav的导航
    classindex: '0',
    // 控制页面导航
    rnav: true,
    // 控制编辑全选
    select: true,
    // redio选择
    allchecked:"",
    // 选择的值
    allcheckvalues:[]
  },
// 导航点击事件
  changeindex(e) {
    this.setData({
      classindex: e.target.dataset.index
    })
    if (e.target.dataset.index == '1') {
      this.setData({
        rnav: false
      })
    } else {
      this.setData({
        rnav: true
      })
    }
  },
  // 编辑点击事件
  change(e) {
    if (e.target.dataset.select == "0") {
      this.setData({
        select: false
      })
    } else {
      this.setData({
        select: true
      })
    }
  },
  // 全部选择
  allselect(){
    this.setData({allchecked:true})
  },
  allcheckvalue(e){
    console.log(e.detail.value)
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

  }
})