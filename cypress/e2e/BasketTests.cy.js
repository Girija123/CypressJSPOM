import { it } from "mocha";
import LoginPage from "../pages/LoginPage";
import ProductDescriptionPage from "../pages/ProductDescriptionpage";
import ProductListPage from "../pages/ProductListPage";
import { DateTime } from 'luxon'


const login = new LoginPage
const plp = new ProductListPage
const pdp = new ProductDescriptionPage


describe('Verfify Basket feature',()=>{

    

    it.only('date', ()=>{
        
        const stringDate = "Jun 21, 1989"
        const jsDate = new Date(stringDate)
        const actualDate = DateTime.fromJSDate(jsDate).toFormat("DD-MM-YYYY")    
        
        
        const currentDate = DateTime.now().toFormat("DD-MM-YYYY")
        const stringDateBefore7Days = new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000));
        const jsDateBefore7Days = DateTime.fromJSDate(stringDateBefore7Days).toFormat("DD-MM-YYYY")
        
        cy.wrap(actualDate).within(currentDate, jsDateBefore7Days)
    })
})