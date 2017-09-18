const puppeteer = require('puppeteer')

puppeteer.launch({args: ['--no-sandbox']}).then(function (browser) {
  browser.newPage().then(function (page) {
    page.on('console', function () {
      console.log.apply(console, [].slice.call(arguments))
    })

    return page.goto('http://localhost:8080', {waitUntil: 'networkidle'})
  }).then(function () {
    browser.close()
  }).catch(function () {
    browser.close()
  })
})
