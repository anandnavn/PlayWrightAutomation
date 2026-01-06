const {test,expect} = require('@playwright/test');



test('UI basic test', async ({browser}) => 
{

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://google.com');
    const title = await page.title();
    console.log(`Page title is: ${title}`);
   //await page.screenshot({ path: 'example.png' });
   
});

test.only('Playwright test', async ({browser}) => 
{

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const title = await page.title();
    console.log(`Page title is: ${title}`);
    await page.locator('#username').fill('Navneet');
    await page.locator('#password').fill('Navneet@123');
    await page.locator('#signInBtn').click();
    
    const errorMsg = page.locator("[style*='block']");
    console.log(await page.locator("[style*='block']").textContent());
    await expect(errorMsg).toContainText('Incorrect');
    // await page.screenshot({ path: 'loginpage.png' });
});