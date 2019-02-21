const colors = require('colors')

module.exports = (discount, coupon, expiryDate) => {
  const texts = [
    `[🤖] Enjoy ${discount}% off all our juicy products with this #coupon code: ${coupon} (valid until ${expiryDate})`,
    `[🤖] Save ${discount}% during your next shopping frenzy with #coupon code: ${coupon} (expires ${expiryDate})`,
    `[🤖] All your favorite juices are now ${discount}% off! Only with #coupon code: ${coupon} (use before ${expiryDate})`
  ]
  const status = texts[Math.floor(Math.random() * texts.length)]
  console.log(`[${colors.green('✔')}] Status prepared: ${colors.cyan(status)}`)
  return status
}
