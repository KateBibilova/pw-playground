import { test } from "@playwright/test";
import MainPage from "../pages/main_page";

test.describe("Main page", () => {
  test("page main elements should be visible", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goToPage();
    await mainPage.verifyLogo(page);
    await mainPage.verifyBasicCategories(page);
  });

  // test("...", async ({ page }) => {
  //  ....
  // });

  // test("...", async ({ page }) => {
  //  ....
  // });
});