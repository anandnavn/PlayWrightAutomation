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

test('Playwright test', async ({browser}) => 
{

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const title = await page.title();
    console.log(`Page title is: ${title}`);
    await page.locator('#username').fill('Navneet');
    await page.locator('#password').fill('Navneet@123');
    await page.locator('#signInBtn').click();    
    await page.screenshot({ path: 'loginpage.png' });
});