Feature: Agregar un producto al carrito de compras
  Scenario: Agregar Dior J'adore al carrito de compras
    Given que estoy en la página principal
    When busco el producto "Dior J'adore"
    And selecciono el producto
    And modifico la cantidad a 2
    And agrego el producto al carrito
    Then debería ver el producto en el carrito