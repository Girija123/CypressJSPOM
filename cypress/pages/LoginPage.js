class LoginPage
{
   
    verifyTitle(expectedTitle)
    {
        cy.title().should('eq', expectedTitle)
        return this
    }

    enterUsername(username)
    {
        cy.get('#user-name').type(username)
        return this
    }

    enterPassword(password)
    {
        cy.get('#password').type(password)
        return this
    }

    clickLoginBtn()
    {
        cy.get('#login-button').click()
        return this
    }

    doLogin(username, password)
    {
        cy.get('#user-name').type(username)
        cy.get('#password').type(password)
        cy.get('#login-button').click()
        return this
    }

    getErrorMessage(expectedErrorMessage)
    {
        cy.get("h3[data-test='error']").should('have.text', expectedErrorMessage)
        return this
    }

}

export default LoginPage