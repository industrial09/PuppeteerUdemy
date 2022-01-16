//Way of defining complex methods for using them in another js file/module
//Here functions have to be defined/stored like json objects
module.exports= {
    click: async function(page, locator){
        try{
            await page.waitForSelector(locator)
            await page.click(locator)
        }
        catch(error){
            throw new Error('Unable to click on webelement: '+locator)
        }
    },
    type: async function(page, locator, valueToEnter){
        try{
            await page.waitForSelector(locator)
            await page.type(locator, valueToEnter)
        }
        catch(error){
            throw new Error('Unable to enter data into weblement: '+locator)
        }
    },
    select: async function(page, locator, valueToSelect){
        try{
            await page.waitForSelector(locator)
            await page.select(locator, valueToSelect)
        }
        catch(error){
            throw new Error(`Unable to select value ${valueToSelect} within dropdown: ${locator}`)
        }
    },
    getText: async function(page, locator){
        try{
            await page.waitForSelector(locator)
            return await page.$eval(locator, el => el.textContent)
        }
        catch(error){
            throw new Error('Unable to get text from webelement: '+locator)
        }
    },
    getCount: async function(page, locator){
        try{
            await page.waitForSelector(locator)
            return await page.$$eval(locator, el =>el.length)
        }
        catch(error){
            throw new Error(`Unable to get how many times webelement: ${locator} is present in the DOM`)
        }
    },
    waitForText: async function(page, locator, expectedTextToBeVisible){
        try{
            await page.waitForSelector(locator)
            await page.waitForFunction((locator, expectedTextToBeVisible)=>{
                document.querySelector(locator).innerText.includes(expectedTextToBeVisible),
                {}, locator, expectedTextToBeVisible
            }
            )
        }
        catch(error){
            throw new Error(`Text : ${expectedTextToBeVisible} is not visible within webelement: ${locator}`)
        }
    }
}