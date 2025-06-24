import { test as base } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import {ContactSalesPage} from "../pages/contact-sales.page";

type Fixtures = {
  homePage: HomePage;
  contactSalesPage: ContactSalesPage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
  },

  contactSalesPage: async ({page}, use) =>{
    const contactSalesPage = new ContactSalesPage(page);
    await use(contactSalesPage);
  }
});
