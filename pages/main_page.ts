import { expect, Page, test, Locator } from "@playwright/test";
import BasePage from "./base_page";

export default class MainPage extends BasePage {
  readonly logo: Locator;
  readonly search_Field: Locator;
  readonly shopProducts_Cat: Locator;
  readonly exploreRooms_Cat: Locator;
  readonly offersLowPrices_Cat: Locator;
  readonly planningServices_Cat: Locator;
  readonly chatButton: Locator;
  readonly checkBox: Locator;
  readonly buttonStart: Locator;
  readonly textConnected: Locator;
  readonly closeButton: Locator;
  readonly endButton: Locator;


  constructor(page: Page) {
    super(page, "");

    this.logo = page.getByLabel('IKEA logotype, go to start');
    this.search_Field = page.getByPlaceholder('What are you looking for?');
    
    this.shopProducts_Cat = page.getByRole('tab', { name: 'Shop products' });
    this.exploreRooms_Cat = page.getByRole('tab', { name: 'Explore rooms' });
    this.offersLowPrices_Cat = page.getByRole('tab', { name: 'Offers & low prices' });
    this.planningServices_Cat = page.getByRole('tab', { name: 'Planning & services' });
    this.chatButton = page.getByRole('button', {name: 'Start Chat'});
    this.checkBox = page.locator('.chatbot-start-form-checkbox__symbol')
    this.buttonStart = page.locator('.chatbot-start-form-checkbox__label')
    this.textConnected = page.locator('span:has-text("Chatbot Connected")')
    this.endButton = page.getByRole('button', {name: 'End chat'});
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
