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

  test("City selection should reflect on the main page", async ({ page }) => {
    const mainPage = new MainPage(page)

    await mainPage.goToPage();
    await mainPage.selectStoreButton.click()
    await mainPage.selectEspooButton.click()


    await expect(mainPage.checkEspooButtonOnMainPage).toBeVisible()
    
  
  });

  test("changing store address", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    const mainPage = new MainPage(page);
    await mainPage.goToPage();
    await mainPage.selectStoreButton.click()
    await mainPage.searchInput.click()
    await mainPage.searchInput.fill('Tampere')
    await mainPage.searchButton.click()
    await mainPage.tampereButton.click()
    
    await expect(mainPage.checkTampereButtonOnMainPage).toBeVisible()
  });
  // test("...", async ({ page }) => {
  //  ....
  // });
});