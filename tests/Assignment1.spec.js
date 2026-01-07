
const {test} = require('@playwright/test');

test('Playwright Assignment test', async ({browser}) =>
{

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.locator('.login-wrapper-footer-text a').click();

  //registration form fillup
  const email = Math.random().toString(36).substring(2,7) //Unique string generator
  const userEmail = email +'user@example.com';
  const password = 'Test@1234';
  await page.locator('#firstName').fill('TestUser');
  await page.locator('#lastName').fill('Automation');
  await page.locator('#userEmail').fill(userEmail);
  await page.locator('#userMobile').fill('9123456789');
  await page.locator('#userPassword').fill(password);
  await page.locator("#confirmPassword").fill(password);
  await page.locator('.col-md-1').click();
  await page.locator("#login").click();
  await page.locator('[class="btn btn-primary"]').click();

    //login with registered user
    await page.locator('#userEmail').fill(userEmail);
    await page.locator('#userPassword').fill(password);
    await page.locator("#login").click();   

    //get first product after successful login #synchronization using nth(0) for all products
    await page.waitForLoadState('networkidle');
    console.log(await page.locator(".card-body b").nth(0).textContent());
    console.log(await page.locator(".card-body b").allTextContents());


});
