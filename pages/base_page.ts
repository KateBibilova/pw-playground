import { Page } from "@playwright/test";

export default class BasePage {
  protected page: Page;
  protected path: string;
  protected MAIN_URL: string;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = path;
    this.MAIN_URL = "https://www.ikea.com/fi/en/";
  }

  async goToPage(): Promise<void> {
    await this.page.goto(this.MAIN_URL + this.path);
  }
}

