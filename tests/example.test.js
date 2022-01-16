const { it } = require('mocha')
const { describe } = require('mocha')
var puppeterProp = require('puppeteer')
var expect = require('chai').expect
var {click} = require('../lib/helpers')
var {getText} = require('../lib/helpers')
var {getCount} = require('../lib/helpers')
var {type} = require('../lib/helpers')
var {select} = require('../lib/helpers')
var {waitForText} = require('../lib/helpers')

describe('NameOfTestScenario', () => {
    let browser
    let page

    before(async function(){
        browser = await puppeterProp.launch({headless:false, slowMo: 500,devtools:false})
        page = await browser.newPage()
        await page.setDefaultTimeout(20000)
        await page.setDefaultNavigationTimeout(20000)
        }
    )

    after(async function(){
        await browser.close()
        }
    )

    it('NameOfTestCase', async function(){
        await page.goto('https://example.com/')
        await page.waitForSelector('h1')
        //Ways to validate that a web element is not present
        //await page.waitFor(() => !document.querySelector('h1'))
        await page.waitForSelector('h2', {hidden:true})
        //
        await page.waitForXPath('//body/div/p[2]/a')
        await page.waitFor(2000)
        const title = await page.title()
        const url = await page.url()
        let text = await getText(page, 'h1')
        const count = await getCount(page, 'p')
        console.log('Title is: '+title)
        expect(title).to.be.a('string', 'Example Domain')
        console.log('URL is: '+url)
        expect(url).to.include('example.com')
        //Another way of validating Text is within a weblement is as below
        //await waitForText(page,'h1','Example')
        console.log('Text is: '+text)
        expect(text).to.be.a('string','Example Domain')
        console.log('Number of p tags is: '+count)
        expect(count).to.equal(2)
        await page.reload()
        await page.waitFor(3000)
        await page.goto('http://zero.webappsecurity.com/')
        await type(page, '#searchTerm', 'Anything')
        await page.keyboard.press('Enter', {delay:500})
        await page.goBack()
        await page.goto('https://devexpress.github.io/testcafe/example/')
        await click(page, '#remote-testing')
        await select(page, '#preferred-interface', 'JavaScript API')
    }
    )
}

)
//SETUP FOR RUNNING TEST SCRIPT NEED TO BE SET IN
//package.json -> scripts -> test
//defining the mocha.js file of mocka folder of node_modules
//node ./node_modules/mocha/bin/mocha --timeout=3000(in milliseconds) pathOfTestCasesToBeExecuted
