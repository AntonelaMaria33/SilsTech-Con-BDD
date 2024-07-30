Feature: Eliminar un producto del carrito de compras
  Scenario: Eliminar Dior J'adore del carrito de compras
    Given el carrito contiene "Dior J'adore"
    When elimino el producto "Dior J'adore" del carrito
    Then el carrito debería estar vacío