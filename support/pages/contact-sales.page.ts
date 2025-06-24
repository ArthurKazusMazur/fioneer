import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class ContactSalesPage extends BasePage {
    readonly emailInput: Locator;
    readonly invalidEmailErrorLabel: Locator;
   
    constructor(page: Page) {
        super(page);
        this.emailInput = page.getByPlaceholder('Business e-mail*');
        this.invalidEmailErrorLabel = page.locator('.hs_email .hs-error-msg');
    }

    async fillEmailInput(email: string) {
        await this.emailInput.fill(email);
        await this.emailInput.press('Enter')
    }
}