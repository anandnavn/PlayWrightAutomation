const {test} = require('@playwright/test');


test('UI basic test', async ({browser}) => 
{

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://google.com');
    const title = await page.title();
    console.log(`Page title is: ${title}`);
   //await page.screenshot({ path: 'example.png' });
   
});