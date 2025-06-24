import { test } from '../support/fixtures/page.fixtures';
import { e2eSolutionsArticle as data, targetUrl as url, expectedTitle as title, error, inputData } from '../support/data/test.data';


test('Test 1: "Verify End-to-end solutions for financial services section"', async ({ homePage, }) => {
  const cardData = [
    data.banking,
    data.insurance,
    data.financeESG
  ];

  await homePage.verifySectionTitle(data.title);

  for (const [index, card] of cardData.entries()) {
    await homePage.verifySectionCardsText(card.header, card.paragraph);
    await homePage.verifySectionCardsIcon(index, card.img);
  }
});

test('Test 2: "Verify user has been redirected to the correct page: /finance-esg/esg-kpi-engine/"', async ({ homePage }) => {
  await homePage.navigateToEsgKpiEngine();
  await homePage.verifyCurrentPageTitle(url.kpiEngineUrl, title.esgKpiEnginePageTitle);
});

test('Test 3: "Verify Busines email validation message on non-valid data input"', async ({ homePage, contactSalesPage }) => {
  await homePage.clickGetInTouchButton();

  await contactSalesPage.verifyCurrentPageTitle(url.contactSalesUrl, title.contactSalesPageTitle);

  await contactSalesPage.fillEmailInput(inputData.invalidData.email);
  await contactSalesPage.verifyStyledErrorMessage(
    contactSalesPage.emailInput,
    error.inputStyle.attribute,
    error.inputStyle.value);

  await contactSalesPage.verifyStyledErrorMessage(
    contactSalesPage.invalidEmailErrorLabel,
    error.msgStyle.attribute,
    error.msgStyle.value, error.message);
});


