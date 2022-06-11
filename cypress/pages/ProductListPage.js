class ProductListPage
{

    clickMenuIcon()
    {
        cy.get('#react-burger-menu-btn').click()
    }

    clickSubMenuOption(subMenuOption)
    {
        cy.xpath("//a[text()='"+subMenuOption+"']").click()        
    }

    clickCartIcon()
    {
        cy.get('.shopping_cart_link').click()
    }

    verifyPageHeading(pageHeadingText)
    {
        cy.get('.title').should('have.text', pageHeadingText)
    }

    clickProductImg()
    {
        cy.get('inventory_item_img').click()
    }

    chooseProduct(productName)
    {
        cy.xpath("//div[text()='"+productName+"']").click()
    }

    verifyProductPrice(productName, expectedPrice)
    {
        cy.xpath("//div[text()='"+productName+"']/ancestor::div[1]/ancestor::div[1]/div[@class='pricebar']/div").should('have.text', expectedPrice)
    }
}

export default ProductListPage