import { expect, Page, test, Locator } from "@playwright/test";
import BasePage from "./base_page";

export default class MainPage extends BasePage {
  readonly logo: Locator;
  readonly search_Field: Locator;
  readonly shopProducts_Cat: Locator;
  readonly exploreRooms_Cat: Locator;
  readonly offersLowPrices_Cat: Locator;
  readonly planningServices_Cat: Locator;
  readonly enterPostcode_Btn: Locator;
  readonly postCode_Inp: Locator;
  readonly save_Btn


  constructor(page: Page) {
    super(page, "");

    this.logo = page.getByLabel('IKEA logotype, go to start');
    this.search_Field = page.getByPlaceholder('What are you looking for?');
    
    this.shopProducts_Cat = page.getByRole('tab', { name: 'Shop products' });
    this.exploreRooms_Cat = page.getByRole('tab', { name: 'Explore rooms' });
    this.offersLowPrices_Cat = page.getByRole('tab', { name: 'Offers & low prices' });
    this.planningServices_Cat = page.getByRole('tab', { name: 'Planning & services' });
    
    this.enterPostcode_Btn = page.getByLabel('Enter postcode');
    this.postCode_Inp = page.getByRole('textbox');
    this.postCode_Inp = page.getByRole('button', { name: 'Save' });


  }

  async verifyLogo(page: Page) {
    await test.step("Verify logo", async () => {
      await expect(this.logo).toBeVisible();
    });
  }

  async verifyBasicCategories(page: Page) {
    await test.step("Verify basic categories", async () => {
      await expect(this.shopProducts_Cat).toBeVisible();
      await expect(this.exploreRooms_Cat).toBeVisible();
      await expect(this.offersLowPrices_Cat).toBeVisible();
      await expect(this.planningServices_Cat).toBeVisible();
    });
  }
}


test('test', async ({ page }) => {
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