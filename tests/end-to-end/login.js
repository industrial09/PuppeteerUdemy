//Disadvantage of using Puppeteer: double quotes can not be used to define locators
const { it } = require('mocha')
const { describe } = require('mocha')
var puppeterProp = require('puppeteer')
var expect = require('chai').expect

describe('NameOfTestScenario', () => {
    let browser
    let page

    beforeEach(async function(){
        browser = await puppeterProp.launch({headless:false, slowMo: 50,devtools:false})
        page = await browser.newPage()
        await page.goto('http://zero.webappsecurity.com/')
        await page.waitForSelector('#signin_button')
        await page.click('#signin_button')
        await page.waitForSelector('#user_login')
        await page.setDefaultTimeout(20000)
        await page.setDefaultNavigationTimeout(20000)
        }
    )

    afterEach(async function(){
        await browser.close()
        }
    )

    it('Login with Invalid credentials', async function(){
        await page.type('#user_login', 'username')
        await page.waitForSelector('#user_password')
        await page.type('#user_password', 'password2')
        await page.waitForSelector('#user_remember_me')
        await page.click('#user_remember_me')
        await page.waitForSelector('input[type=submit]')
        await page.click('input[type=submit]')
        await page.waitForSelector('.alert.alert-error')
    }
    )

    it('Login with Valid credentials', async function(){
        await page.type('#user_login', 'username')
        await page.waitForSelector('#user_password')
        await page.type('#user_password', 'password')
        await page.waitForSelector('#user_remember_me')
        await page.click('#user_remember_me')
        await page.waitForSelector('input[type=submit]')
        await page.click('input[type=submit]')
        await page.waitFor(1500)
        await page.waitForSelector('#details-button')
        await page.click('#details-button')
        await page.waitForSelector('#proceed-link')
        await page.click('#proceed-link')
        await page.waitForSelector('#settingsBox')
    }
    )
}

)
//SETUP FOR RUNNING TEST SCRIPT NEED TO BE SET IN
//package.json -> scripts -> test
//defining the mocha.js file of mocka folder of node_modules
//node ./node_modules/mocha/bin/mocha --timeout=3000(in milliseconds) pathOfTestCasesToBeExecuted
