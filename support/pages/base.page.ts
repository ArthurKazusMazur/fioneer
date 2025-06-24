import { expect, Page, Locator } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyCurrentPageTitle(url: string, title: string) {
    await expect(this.page).toHaveURL(url);
    await expect(this.page).toHaveTitle(title);
  }

  async verifyStyledErrorMessage(element: Locator, styleAttr: string, styleValue: string, message?: string) {
    if (message) { 
      await expect(element).toHaveText(message); 
    }
    await expect(element).toHaveCSS(styleAttr, styleValue, {timeout: 5000});
  }
}
