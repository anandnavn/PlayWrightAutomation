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
    
    const errorMsg = page.locator("[style*='block']");
    console.log(await page.locator("[style*='block']").textContent());
    await expect(errorMsg).toContainText('Incorrect');
    // await page.screenshot({ path: 'loginpage.png' });
});

test('Optimized Playwright test', async ({browser}) => 
{

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn'); 
    const title = await page.title();
    console.log(`Page title is: ${title}`);
    await userName.fill('Navneet');
    await password.fill('Navneet@123');
    await signInBtn.click();

    const errorMsg = page.locator("[style*='block']");
    console.log(await page.locator("[style*='block']").textContent());
    await expect(errorMsg).toContainText('Incorrect');


    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    await password.fill('');
    await password.fill('learning');
    await signInBtn.click();
    console.log(await page.locator(".card-body a").nth(0).textContent());
    console.log(await page.title());

});

test('Radio/dropdown Playwright test', async ({browser}) => 
{

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const title = await page.title();
    console.log(`Page title is: ${title}`);
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    const userType = page.locator('.customradio').nth(1);
    await userType.click();
    await page.locator('#okayBtn').click();
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('consult');
//validation check for radio button selection
    await expect(userType.isChecked()).toBeTruthy();
    const termsBox = page.locator('#terms');
    await termsBox.check();
    
//validation/assertions for checkbox
    await expect(termsBox).toBeChecked();
    await termsBox.uncheck();
    await expect(termsBox).not.toBeChecked();
    await page.locator('#signInBtn').click();
    
    
});