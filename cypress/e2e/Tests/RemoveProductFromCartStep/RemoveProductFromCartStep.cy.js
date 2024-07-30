import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import HomePage from '../../Pages/HomePage/HomePage.cy';
import ProductPage from '../../Pages/ProductPage/ProductPage.cy';

const homePage = new HomePage();
const productPage = new ProductPage();

Given('el carrito contiene {string}', (productName) => {
  homePage.visit();
  homePage.searchProduct(productName);
  productPage.selectFirstProduct();
  productPage.addToCart();
  productPage.viewCart();
});

When('elimino el producto {string} del carrito', (productName) => {
  productPage.removeProductFromCart(productName);
});

Then('el carrito debería estar vacío', () => {
  productPage.verifyCartIsEmpty();
});
