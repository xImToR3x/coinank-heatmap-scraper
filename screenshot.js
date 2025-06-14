const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'], headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 600 });
  await page.goto('https://coinank.com/heatmap', { waitUntil: 'networkidle2', timeout: 0 });
  await page.waitForTimeout(5000);
  if (!fs.existsSync('public')) fs.mkdirSync('public');
  await page.screenshot({ path: 'public/coinank-heatmap.png' });
  await browser.close();
})();
