import test from 'japa'

const { chromium } = require('playwright')

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Welcome', () => {
  test('ensure home page works', async (assert) => {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/')
    await page.screenshot({ path: `example.png` })
    await browser.close()
  }).timeout(5000)
})
