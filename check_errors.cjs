/* eslint-disable @typescript-eslint/no-require-imports */
const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error')
      console.log(`Error text: "${msg.text()}"`);
  });
  
  page.on('pageerror', exception => {
    console.log(`Uncaught exception: "${exception}"`);
  });

  await page.goto('http://localhost:5173/story/1');
  await browser.close();
})();
