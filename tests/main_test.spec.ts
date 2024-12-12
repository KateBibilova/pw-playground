import { expect, test } from "@playwright/test";
import MainPage from "../pages/main_page";

test.describe("Main page", () => {
  test("page main elements should be visible", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    const mainPage = new MainPage(page);
    await mainPage.goToPage();
    await mainPage.verifyLogo(page);
    await mainPage.verifyBasicCategories(page);
  });

  test("start and end chat", async ({ page }) => {
  });
});

// test('test', async ({ page }) => {
//   await page.goto('https://www.ikea.com/fi/en/');
//   await page.getByLabel('Enter postcode').click();
//   await page.getByRole('textbox').click();
//   await page.getByRole('textbox').fill('02200');
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.getByText('You\'ve selected 02200 as your').click();
//   await page.getByRole('button', { name: 'Dismiss notification' }).click();
//   await page.getByLabel('- Enter postcode').click();
//   await page.getByRole('button', { name: 'Forget postcode' }).click();
//   await page.getByLabel('Enter postcode').click();
//   await page.getByLabel('Close').click();
// });