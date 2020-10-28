//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    epub: [],
  },
  // 自定义事件
  search(){
    wx.navigateTo({
      url: '/pages/search/search',
      fail:()=>{
        wx.showToast({
          title: '请稍后重试',
          icon:"loading",
          duration:2000
        })
      }
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let _epub = this.data.epub
    wx.request({
      url: 'https://api.zhuishushenqi.com/ranking/gender',
      method: 'GET',
      success: (res) => {
        res.data.epub.forEach(v => {
          wx.request({
            url: `https://api.zhuishushenqi.com/ranking/${v._id}`,
            method: 'GET',
            success: (book) => {
              _epub.push({
                id: v._id,
                title: v.title,
                books: book.data.ranking.books.slice(0, 2)
              })
              this.setData({
                epub: _epub
              })
            },
            fail: (error) => {
              throw Error('获取数据失败')
            }
          })
        })
      },
      fail: (error) => {
        throw Error('获取数据失败')
      }
    })

  },
  getUserInfo: function (e) {}
})