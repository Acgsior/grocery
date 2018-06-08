Page({
  data: {
    goodSwiperImgUrls: [
      'https://data.whicdn.com/images/29671466/large.jpg',
      'https://data.whicdn.com/images/88100882/large.jpg',
      'https://data.whicdn.com/images/126023343/large.jpg',
      'https://data.whicdn.com/images/313413008/large.jpg',
    ],
    good: {
      name: 'Flat White',
      priceBefore: 49,
      price: 39,
      promotion: {
        type: 'SALE',
        description: 'Up to 50% off for the icy summer.',
      },
      categories: [
        {
          name: 'type',
          pictorial: true,
          values: [
            {
              name: 'Enjoy here',
              img: 'https://data.whicdn.com/images/126023343/large.jpg',
            },
            {
              name: 'Take-away',
              img: 'https://data.whicdn.com/images/88100882/large.jpg',
            },
          ],
        },
        {
          name: 'size',
          values: [{ name: 'short' }, { name: 'tall' }, { name: 'grande' }, { name: 'venti' }],
        },
        {
          name: 'extra',
          values: [{ name: 'milk' }, { name: 'sugar' }, { name: 'espresso' }],
        },
      ],
    },
    goodTips: [
      'Most praise',
      'Free shipping for $49',
      '7 days no reason to return',
      'Return allowance',
      '24 hours customer service support',
    ],
    goodReviews: [
      {
        location: 'Chengdu',
        name: 'Master Wang',
        date: '2018-06-05',
        content: 'Perfect coffee bean with fresh milk makes the excellent flat white. I like it.',
      },
      {
        location: 'HaiNan',
        name: 'Miss Yang',
        date: '2018-06-03',
        content: 'Possibility for a small (healthy) snack with a great coffee.',
      },
      {
        location: 'Unknown',
        name: 'Anonymouse',
        date: '2018-06-03',
        content:
          "Obviously every Costa will be different, with different levels of training and knowledge - but generally, they are pretty good, and the coffee usually tastes nice. That's the main thing :)",
      },
    ],
    selected: {},
  },
  onLoad: function() {
    const {
      good: { categories },
    } = this.data
    const defaultPictorialCategoryValue = categories.find(cat => cat.pictorial).values[0]
    console.log(defaultPictorialCategoryValue)
    this.setData({
      selected: {
        img: defaultPictorialCategoryValue.img,
        categories: [defaultPictorialCategoryValue],
        quantity: 1,
      },
    })
  },
})
