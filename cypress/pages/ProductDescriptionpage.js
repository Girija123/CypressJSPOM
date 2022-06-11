class ProductDescriptionPage
{

clickBackToProductsBtn()
{
    cy,get('#back-to-products').click()
}

clickAddtoCart()
{
    cy.get('#add-to-cart-sauce-labs-backpack').click()
}

verifyPDPageLanding()
{
    cy,get('#back-to-products').should('be.visible')
}

}

export default ProductDescriptionPage