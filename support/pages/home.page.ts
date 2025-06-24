import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomePage extends BasePage {
  readonly sectionTitle: Locator;
  readonly cardHeader: Locator;
  readonly cardParagraph: Locator;
  readonly cardIcon: Locator;
  readonly menuButtonProducts: Locator;
  readonly productsMenuButtonFinanceESG: Locator;
  readonly financeESGEngineLink: Locator;
  readonly getInTouchButton: Locator;


  constructor(page: Page) {
    super(page);
    this.sectionTitle = page.locator('article.cards-block h2');
    this.cardHeader = page.locator('article.cards-block .row:nth-child(2) h3');
    this.cardParagraph = page.locator('article.cards-block .row:nth-child(2) p');
    this.cardIcon = page.locator('article.cards-block .row:nth-child(2) img')
    this.menuButtonProducts = page.getByRole('button').getByText('Products');
    this.productsMenuButtonFinanceESG = page.getByLabel('Open menu').getByText('Finance & ESG');
    this.financeESGEngineLink = page.getByRole('link', { name: 'ESG KPI Engine' });
    this.getInTouchButton = page.locator('.hero-block').getByLabel('Get in touch');
  }

  async goto() {
    await this.page.goto('/', {
      waitUntil: "domcontentloaded",
    });
  }

  async verifySectionTitle(text: string) {
    await expect(this.sectionTitle, { message: `Expected section title to be "${text}", but it was different or missing.` }).toHaveText(text);
  }

  async verifySectionCardsText(cardHeader: string, cardParagraph: string) {
    await expect(this.cardHeader.getByText(cardHeader), { message: `Expected section title to be "${cardHeader}", but it was different or missing.` }).toBeVisible();
    await expect(this.cardParagraph.getByText(cardParagraph), { message: `Expected section title to be "${cardParagraph}", but it was different or missing.` }).toBeVisible();
  }

  async verifySectionCardsIcon(n: number, attributeValue: string) {
    await expect(this.cardIcon.nth(n)).toHaveAttribute('src', attributeValue);
  };

  async navigateToEsgKpiEngine() {
    await this.menuButtonProducts.click();
    await this.productsMenuButtonFinanceESG.click();
    await this.financeESGEngineLink.click();
  }

  async clickGetInTouchButton() {
    await this.getInTouchButton.click();
  }
}