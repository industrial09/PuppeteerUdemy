const { it } = require('mocha')
const { describe } = require('mocha')
var puppeteer = require('puppeteer')

describe('Test Scenario Name', () => {
        let browser
        let page

        before(async function(){
                browser = await puppeteer.launch({headless:false, slowMo: 100, devtools:false})
                //Function to run scripts in a incognito window
                let context = await browser.createIncognitoBrowserContext()
                page = await context.newPage()
                //Max timeout before throwing an exception for every action performed
                page.setDefaultTimeout(20000)
                page.setDefaultNavigationTimeout(15000)
            }
        )

        after(async function(){
                browser.close()
            }
        )

        it('Desktop device', async function(){
                await page.setViewport({width:1280, height:800})
                await page.goto('https://example.com/')
                await page.waitFor(5000)
            }   
        )

        it('IPad device', async function(){
                //List of avaiñable devices to use: https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts
                let device = await puppeteer.devices['iPad landscape']
                //https://pptr.dev/#?product=Puppeteer&version=v13.0.1&show=api-puppeteerdevices
                await page.emulate(device)
                await page.goto('https://example.com/')
                await page.waitFor(5000)
            }
        )

        it('Mobile Device', async function(){
                let mobileDevice = await puppeteer.devices['iPhone 6']
                await page.emulate(mobileDevice)
                await page.goto('https://example.com/')
                await page.waitFor(5000)
            }
        )
    }
)