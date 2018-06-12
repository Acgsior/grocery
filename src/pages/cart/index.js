Page({
  data: {
    goods: [
      {
        img: 'https://data.whicdn.com/images/88100882/large.jpg',
        name: 'Flat White',
        priceBefore: 49,
        price: 39,
        categories: ['Take-away', 'tall', 'extra sugar'],
        promotions: ['Up to 50% off for the icy summer.'],
        quantity: 1,
      },
      {
        img: 'https://data.whicdn.com/images/313283807/large.jpg',
        name: 'Strawberry Pancake',
        priceBefore: 12,
        price: 8.99,
        categories: ['Take-away', 'super sweet'],
        promotions: [],
        quantity: 2,
      },
    ],
    summary: {
      quantity: 3,
      subTotal: (8.99 * 2 + 39).toFixed(2),
      subTotalBefore: (12 * 2 + 49).toFixed(2),
      shipping: 0,
      total: (8.99 * 2 + 39 + 0).toFixed(2),
    },
  },
  handleMinusButtonTap: function(e) {
    const {
      currentTarget: {
        dataset: { index },
      },
    } = e;
    const { goods } = this.data;
    if (goods[index].quantity !== 1) {
      this.setData({
        [`goods[${index}].quantity`]: goods[index].quantity - 1,
      });
      this.repriceSummary();
    }
  },
  handlePlusButtonTap: function(e) {
    const {
      currentTarget: {
        dataset: { index },
      },
    } = e;
    const { goods } = this.data;
    if (goods[index].quantity !== 99) {
      this.setData({
        [`goods[${index}].quantity`]: goods[index].quantity + 1,
      });
      this.repriceSummary();
    }
  },
  handleDeleteButtonTap: function(e) {
    const {
      currentTarget: {
        dataset: { index },
      },
    } = e;
    const { goods } = this.data;
    goods.splice(index, 1);

    this.setData({ goods });
    this.repriceSummary();
  },
  repriceSummary: function() {
    const { goods } = this.data;
    let quantity = 0;
    let subTotal = 0;
    let subTotalBefore = 0;

    goods.forEach(good => {
      quantity += good.quantity;
      subTotal += good.price * good.quantity;
      subTotalBefore += good.priceBefore * good.quantity;
    });

    const shipping = subTotal >= 40 ? 0 : 20;
    let total = (subTotal + shipping).toFixed(2);

    subTotal = subTotal.toFixed(2);
    subTotalBefore = subTotalBefore.toFixed(2);

    this.setData({
      summary: {
        quantity,
        subTotal,
        subTotalBefore,
        shipping,
        total,
      },
    });
  },
});
