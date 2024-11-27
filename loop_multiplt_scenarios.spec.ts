

/// After pushing my code (Today's morning), I got this Idea to write a loop for all the optional scenarios of a customer purchase, to test every possible case ever...
/// I was writing the main concept and dealing with the fact tests are hard to be call in a loop, So I worked around this restriction by a nested call as follows:
///main test(loop function(test)).
///Im pushing this code to show my more generic atittude.
import { Page, test, expect } from '@playwright/test';

/// After pushing my code (Today's morning), I got this Idea to write a loop for all the optional scenarios of a customer purchase, to test every possible case ever...
/// I was writing the main concept and dealing with the fact tests are hard to be call in a loop, So I tried to work around this restriction.
///The code still doesnt run and I want to push all the code on time (it's 14:40:)
///So Im pushing this code to show my more generic atittude.

async function CheckOut_navigator_func (page: Page , test, runTest:(page)=>void) {

    // automate the journey to checkout page


    test.setTimeout(1600000);
    //maybe webkit needs it
    await page.goto('https://elementor.com/', { waitUntil: 'networkidle', timeout: 180000 });



    //press the "Products"
    const catalogButton = page.locator('.elementor-item.elementor-item-anchor.has-submenu').first();
    await catalogButton.waitFor({ state: 'visible' });
    await catalogButton.click();


    // choose the ELEMENTOR AI from the list
    const allProducts = page.locator('[class="elementor-sub-item"][data-gtm-level_1="products"]');
   await allProducts.first().waitFor({ state: 'attached', timeout: 90000 });
const allPcount = await allProducts.count()
    //await elementorAi.waitFor({ state: 'visible' });
    const plansCountEnum = [4, 4, 3, 3, 4, 4, 0, 0]
    for (let i = 1; i <allPcount-1; i++) {
        await page.goto('https://elementor.com/', { waitUntil: 'networkidle', timeout: 120000 });
        console.log('started looping')
        await catalogButton.waitFor({ state: 'visible' });
        console.log('visible! im clicking product')
        await catalogButton.click();
        const product = allProducts.nth(i);
        console.log(`Found visible product at index ${i}`);
        await product.click();
        page.waitForTimeout(3000)
        console.log('ive clicked')
       
        //await page.waitForLoadState('networkidle');
        
        const buyNow1 = page.locator('[aria-label="Get it now"]')?.first();
        const buyNow2 = page.locator('[aria-label="Get Started With Elementor"]')?.first();

        const buyNowButton = await buyNow1.count()>0? buyNow1: buyNow2// remember the || left todo , [aria-label="Get Started With Elementor"]
        //const buyNowButton2 = page.locator('[aria-label="Get it now"]', {hasText:'Get it Now'}).first()
        //const buyNowButton =  await buyNowButton1.isVisible() ? buyNowButton1 : buyNowButton2;
        await buyNowButton.waitFor({ state: 'visible' });
        await buyNowButton.click();
        //await page.waitForLoadState('networkidle');
        //const plansFeatures = await page.locator('.plan__features__item included');
        //console.log(`trial to find the texts in a shorter way: ${productFeatures}`)
        const planButtons = page.locator('a[data-test$="buy-now-btn"]');
        const plans = page.locator('div.elementor-post__card span.em-post-meta-plan_name')
        await planButtons.first().waitFor({ state: 'visible', timeout: 90000 });
        let plansPage = await page.url()
        console.log('got to door of second loop')
        const plansCount = await plans.count()
        for (let j = 0; j < Math.floor(plansCountEnum[i]); j++) {
        
            
            console.log(plansCountEnum[i])
            await page.goto(plansPage)
            const plan = await planButtons.nth(j);
            //const productFeatures = await plansFeatures.nth(i).allInnerTexts()
           // console.log(`product features are: ${productFeatures}`)
            await plan.waitFor({ state: 'visible' });
            plan.click()
            console.log('clicked the plan')
            //await page.waitForLoadState('networkidle');
            await expect(page).toHaveURL(/^https:\/\/my\.elementor\.com\/checkout-2/, { timeout: 60000 });
            await runTest(page)
           
          
          ////
            
        
    
    }}}

   
   async  function CheckSum (page) {
        const subTotalLocator = await page.locator('[data-test="summarySubtotalPrice"] bdi');
        await subTotalLocator.waitFor({ state: 'visible' });
        const subTotalText = await subTotalLocator.innerText();

        const taxLocator = await page.locator('[data-test="summaryVatPrice"] .woocommerce-Price-amount');
        let taxText = "0"
       if(await taxLocator.count()!=0)  {
        await taxLocator.waitFor({ state: 'visible' });
        taxText = await taxLocator.innerText();
    }
    

        const totalLocator = await page.locator('[data-test="summaryTotalPrice"] bdi');
        await totalLocator.waitFor({ state: 'visible' });
        const totalText = await totalLocator.innerText();


        const subTotal = parseFloat(subTotalText.replace('₪', '').trim());
        const tax = parseFloat(taxText.replace('₪', '').trim());
        const total = parseFloat(totalText.replace('₪', '').trim());
        console.log(tax)

        // the test---
        expect(subTotal + tax).toBe(total);

    };
    // await test.step('Check if product features match the summary', async () => {
    //     //const productFeatures = await navigateAndCollectFeatures(page); // navigate all the way to checkout, save the features from pkan description page
    //     const cardBody = page.locator('div.card-body.border-gray-50.d-flex.justify-content-between.align-items-start');
    //     await cardBody.waitFor({ state: 'visible', timeout: 60000 });
    //     const summaryText = await cardBody.textContent();
    //     console.log(`The whole summary text: ${summaryText}`)
    //     let totalCount = 0
    //     for (const F_text of productFeatures) {

    //         const Feature_words = F_text.split(/(?:\s|,\s)/);
    //         console.log(`current Feature words:  ${Feature_words}`)
    //         let count = 0
    //         for (const word of Feature_words) {
    //             if (summaryText?.includes(word)) {
    //                 count++
    //             }
    //         }
    //         count > 0 ? totalCount += 1 : null

    //     }
    //     expect(totalCount).toBe(productFeatures.length)

    // });

    

test('test every case', async ({ page }) => {
    await CheckOut_navigator_func(page,test,CheckSum)
})




           

 

    

test('test every case', async ({ page }) => {
    await CheckOut_navigator_func(page,test,CheckSum)
})
