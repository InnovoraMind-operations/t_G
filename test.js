import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('http://localhost:5173/events/evt_012', { waitUntil: 'networkidle0' });
  
  const bodyHTML = await page.evaluate(() => document.body.outerHTML);
  console.log("HTML length:", bodyHTML.length);
  if (bodyHTML.length < 500) {
      console.log(bodyHTML);
  }
  
  await browser.close();
})();
