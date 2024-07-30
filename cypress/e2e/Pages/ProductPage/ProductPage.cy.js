import productSelectors from '../../../fixtures/productDetailsSelectors.json';
import cartSelectors from '../../../fixtures/cartSelectors.json';

class ProductPage {
  selectFirstProduct() {
    cy.get('.img-cover', { timeout: 10000 }).first().click();
  }

  increaseQuantity() {
    cy.get(productSelectors.increaseQuantity, { timeout: 10000 }).click();
  }

  addToCart() {
    cy.get(productSelectors.addToCart, { timeout: 10000 }).click();
  }

  viewCart() {
    cy.get(productSelectors.viewCart, { timeout: 10000 }).click();
  }

  verifyProductInCart(productName) {
    cy.get(cartSelectors.productInCart)
      .contains(productName)
      .should('be.visible');
  }

  removeProductFromCart(productName) {
    cy.get(cartSelectors.productInCart)
      .contains(productName)
      .parents(cartSelectors.cartName)
      .find(cartSelectors.removeProduct)
      .click();
  }

  verifyCartIsEmpty() {
    cy.get(cartSelectors.cartIsEmpty).should('be.visible');
  }
}

export default ProductPage;
