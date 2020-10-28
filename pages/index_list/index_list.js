// pages/index_list/index_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 图书列表
    bookList: [],
    // 总数
    total: 0,
    start: 0,
    limit: 5,
    btnShow: false,
    // 模糊搜索
    query: ""
  },
  // 继续加载book
  load() {
    wx.showLoading({
      title: "加载中"
    })
    // 搜索书籍
    wx.request({
      url: 'https://api.zhuishushenqi.com/book/fuzzy-search',
      method: 'GET',
      // data:{query:options.query,
      data: {
        query: this.data.query,
        start: this.data.start,
        limit: this.data.limit
      },
      success: (v) => {
        let _list = this.data.bookList
        _list = _list.concat(v.data.books)
        this.setData({
          bookList: _list,
        })
        if (this.data.total <= this.data.start + this.data.limit) {
          this.setData({
            btnShow: false
          })
        } else {
          let _c = this.data.start + this.data.limit
          this.setData({
            start: _c,
            btnShow: true
          })

        }
        wx.hideLoading({
          success: (res) => {},
        })
      }

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      query: options.query
    })
    wx.showLoading({
      title: "加载中"
    })
    if (options.id) {
      wx.request({
        url: `https://api.zhuishushenqi.com/ranking/${options.id}`,
        method: 'GET',
        success: (book) => {
          this.setData({
            bookList: book.data.ranking.books,
            btnShow: false
          })
          wx.hideLoading({
            success: (res) => {},
          })
        },
        fail: (error) => {
          throw Error('获取数据失败')
        }
      })
    } else {
      // 搜索书籍
      wx.request({
        url: 'https://api.zhuishushenqi.com/book/fuzzy-search',
        method: 'GET',
        // data:{query:options.query,
        data: {
          query: this.data.query,
          start: this.data.start,
          limit: this.data.limit
        },
        success: (v) => {
          wx.hideLoading({
            success: (res) => {},
          })
          console.log(v)
          this.setData({
            bookList: v.data.books,
            total: v.data.total,
          })
          if (this.data.total <= this.data.start + this.data.limit) {
            this.setData({
              btnShowid: false
            })
          } else {
            let _c = this.data.start + this.data.limit
            this.setData({
              start: _c,
              btnShow: true
            })
            console.log(this.data.btnShow)
          }
        }

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