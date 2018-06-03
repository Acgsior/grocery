//index.js
const app = getApp()

Page({
  data: {
    indexSwiperImgUrls: [
      'https://data.whicdn.com/images/312830694/large.jpg',
      'https://data.whicdn.com/images/312804411/large.png',
      'https://data.whicdn.com/images/82096478/large.jpg'
    ],
    indexMenus: [
      'Home', 'Sells', 'Male', 'Female', 'Child'
    ],
    indexTips: [
      'Evaluation',
      'Free Shipping for $49',
      'Return Allowance'
    ],
    indexGoods: [{
      name: 'Flat White',
      price: 39,
      priceBefore: 49,
      img: 'https://data.whicdn.com/images/29671466/large.jpg'
    }, {
      name: 'Cat',
      price: 89,
      priceBefore: 78,
      img: 'https://data.whicdn.com/images/313355192/large.jpg'
    }, {
      name: 'Doggy',
      price: 5570000,
      priceBefore: 500000,
      img: 'https://data.whicdn.com/images/313325092/large.jpg'
    }, {
      name: 'Strawberry Piece',
      price: 19,
      priceBefore: 18.88,
      img: 'https://data.whicdn.com/images/313296838/large.jpg'
    }, {
      name: 'Rose',
      price: 26,
      priceBefore: 23,
      img: 'https://data.whicdn.com/images/313288450/large.jpg'
    }, {
      name: 'Strawberry Pancake',
      price: 12,
      priceBefore: 8.99,
      img: 'https://data.whicdn.com/images/313283807/large.jpg'
    }]
  },
  onReady: function() {
    // wx.request({
    //   url: 'http://127.0.0.1:8080/index',
    //   success: ({
    //     data
    //   }) => {
    //     this.setData({
    //       ...data
    //     });
    //   }
    // });
  }
})
