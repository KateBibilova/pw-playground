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
    const mainPage = new MainPage(page)

    await mainPage.goToPage();

    await expect(mainPage.chatButton).toBeVisible

    await mainPage.chatButton.click()
 
    await mainPage.checkBox.click()

    await mainPage.buttonStart.click()

    await expect(mainPage.textConnected).toBeVisible

    await mainPage.closeButton.click()

    await mainPage.endButton.click()

  
  });
  console.log("Тест завершился успешно!");
  // test("...", async ({ page }) => {
  //  ....
  // });
});