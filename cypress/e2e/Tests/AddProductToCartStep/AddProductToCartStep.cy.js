import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

import HomePage from '../../Pages/HomePage/HomePage.cy';
import ProductPage from '../../Pages/ProductPage/ProductPage.cy';

const homePage = new HomePage();
const productPage = new ProductPage();

Given('que estoy en la página principal', () => {
  homePage.visit();
});

When('busco el producto {string}', (productName) => {
  homePage.searchProduct(productName);
});

And('selecciono el producto', () => {
  productPage.selectFirstProduct();
});

And('modifico la cantidad a 2', () => {
  productPage.increaseQuantity();
});

And('agrego el producto al carrito', () => {
  productPage.addToCart();
});

Then('debería ver el producto en el carrito', () => {
  productPage.viewCart();
  productPage.verifyProductInCart("Dior J'adore");
});
