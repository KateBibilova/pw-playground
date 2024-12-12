import { expect, Page, test, Locator } from "@playwright/test";
import BasePage from "./base_page";

export default class MainPage extends BasePage {
  readonly logo: Locator;
  readonly search_Field: Locator;
  readonly shopProducts_Cat: Locator;
  readonly exploreRooms_Cat: Locator;
  readonly offersLowPrices_Cat: Locator;
  readonly planningServices_Cat: Locator;
  readonly selectStoreButton: Locator;
  readonly selectEspooButton: Locator;
  readonly checkEspooButtonOnMainPage: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly tampereButton: Locator;
  readonly checkTampereButtonOnMainPage: Locator;
  readonly locationNotFound: Locator;



  constructor(page: Page) {
    super(page, "");

    this.logo = page.getByLabel('IKEA logotype, go to start');
    this.search_Field = page.getByPlaceholder('What are you looking for?');
    
    this.shopProducts_Cat = page.getByRole('tab', { name: 'Shop products' });
    this.exploreRooms_Cat = page.getByRole('tab', { name: 'Explore rooms' });
    this.offersLowPrices_Cat = page.getByRole('tab', { name: 'Offers & low prices' });
    this.planningServices_Cat = page.getByRole('tab', { name: 'Planning & services' });
    this.selectStoreButton = page.getByRole('button', {name: 'Select store'})
    this.selectEspooButton = page.getByRole('button', {name: 'Espoo'})
    this.checkEspooButtonOnMainPage = page.getByRole('button', {name: 'Espoo - Select store'})
    this.searchInput = page.getByRole('searchbox', {name: 'Search by location'})
    this.searchButton = page.locator('button[type="submit"][aria-hidden="false"].hnf-btn--icon-tertiary.hnf-search__action')
    this.tampereButton = page.getByRole('button', {name: 'Tampere'})
    this.checkTampereButtonOnMainPage = page.getByRole('button', {name: 'Tampere - Select store'})
    this.locationNotFound = page.getByText('Location not found')

    
  }

  async searchAndSelectCity(cityName: string){
    await test.step(`Searching for city: ${cityName} `, async () =>{
    await this.selectStoreButton.click()
    await this.searchInput.click()
    await this.searchInput.fill(cityName)
    })
    
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
