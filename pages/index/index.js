//index.js
const app = getApp()

Page({
  data: {
    indexSwiperImgUrls: [
      // 'https://data.whicdn.com/images/312830694/large.jpg',
      // 'https://data.whicdn.com/images/312804411/large.png',
      // 'https://data.whicdn.com/images/82096478/large.jpg'
    ],
    indexMenus: [
      // 'Home', 'Sells', 'Male', 'Female', 'Child'
    ]
  },
  onReady: function() {
    wx.request({
      url: 'http://127.0.0.1:8080/index',
      success: ({ data }) => {
        this.setData({
          ...data
        });
      }
    });
  }
})
