const couponCode = require('./couponCode')
const expirationDate = require('./expirationDate')
const randomDiscount = require('./randomDiscount')

module.exports = (discount = randomDiscount(), date = new Date()) => {
  const coupon = couponCode(discount, date)
  const expiration = expirationDate(date)

  const texts = [
    `[🤖] Enjoy ${discount}% off all our juicy products with this #coupon code: ${coupon} (valid until ${expiration})`,
    `[🤖] Save ${discount}% during your next shopping frenzy with #coupon code: ${coupon} (expires ${expiration})`,
    `[🤖] All your favorite juices are now ${discount}% off! Only with #coupon code: ${coupon} (use before ${expiration})`
  ]

  return texts[Math.floor(Math.random() * texts.length)]
}
