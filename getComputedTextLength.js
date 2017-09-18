const puppeteer = require('puppeteer')
const PORT = process.env.PORT || 8080

puppeteer.launch({args: ['--no-sandbox']}).then(function (browser) {
  browser.newPage().then(function (page) {
    page.on('console', function () {
      console.log.apply(console, [].slice.call(arguments))
    })

    return page.goto(`http://localhost:${PORT}`, {waitUntil: 'networkidle'})
  }).then(function () {
    browser.close()
  }).catch(function () {
    browser.close()
  })
})
