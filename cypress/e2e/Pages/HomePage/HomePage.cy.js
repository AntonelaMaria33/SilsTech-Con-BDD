import homeSelectors from '../../../fixtures/homeSelectors.json';
import navigate from '../../../fixtures/navigate.json';

class HomePage {
  visit() {
    cy.visit(navigate.urlHomePage);
  }

  searchProduct(productName) {
    cy.get(homeSelectors.searchProduct, { timeout: 10000 })
      .click()
      .type(productName);
    cy.get(homeSelectors.searchButton, { timeout: 10000 }).click();
  }
}

export default HomePage;
