// import { test, expect } from '@playwright/test';

  
// test.describe('Test flow', () => {

//     test('Automate purchase preview flow', async ({ browser, browserName, page }) => {
//     // Go to site (https://elementor.com/)
   
//        test.setTimeout(90000);
//        //maybe webkit needs it
//         await page.goto('https://elementor.com/', { waitUntil: 'networkidle', timeout: 120000 });



//         //press the "Products"
//         const catalogButton = page.locator('.elementor-item.elementor-item-anchor.has-submenu').first();
//         await catalogButton.waitFor({ state: 'visible' });
//         await catalogButton.click();


//         // choose the ELEMENTOR AI from the list
//         const elementorAi = page.locator('li.menu-item a[href="https://elementor.com/products/ai/"]').first();
//         await elementorAi.waitFor({ state: 'visible' });
//         await elementorAi.click();


//         // for (let i = 0; i < await elements.count(); i++) {
//         //     const element = elements.nth(i);
//         //     if (await element.isVisible()) {
//         //         console.log(`Found visible element at index ${i}`);
//         //         await element.click();
//         //         break;
//         //     }
//         // }




//         //press BUY NOW - (on top right corner of screen)
//         const buyNowButtons = page.locator('[aria-label="Get Started With Elementor"]', { hasText: 'BUY NOW' }).first();
//         await buyNowButtons.waitFor({ state: 'visible' });
//         await buyNowButtons.click();

//         // for (let i = 0; i < await buyNowButtons.count(); i++) {
//         //     const buyNowButton = buyNowButtons.nth(i);
//         //     if (await buyNowButton.isVisible()) { 
//         //         await buyNowButton.click();
//         //         //console.log(`found BUY NOW at ind: ${i}`)
//         //         break;
//         //     }
//         // }



//         //save the chosen product features to use later

//         await page.waitForLoadState('networkidle');
//         //const found = await page.locator('.elementor-post.elementor-grid-item.post-75106.post.type-post.status-publish.format-standard.hentry.category-pricing-plans.tag-ai-plan-power.tag-popular span.plan__features__item.included').count();

//         //console.log(`Found ${found} elements`);

//         const productFeatures = await page.locator('.elementor-post.elementor-grid-item.post-75106.post.type-post.status-publish.format-standard.hentry.category-pricing-plans.tag-ai-plan-power.tag-popular span.plan__features__item.included').allInnerTexts();
//         console.log(`trial to find the texts in a shorter way: ${productFeatures}`)
//                // const productFeatures = await productFeatures1.elementHandles();
//        // console.log(`original page features: ${productFeatures}\n`)
//         // const featureTexts: string[][] = [];
//         // for (const F of productFeatures) {
//         //     const text = await F.innerText();
//         //     featureTexts.push(text.split(', '));
//         // }
//         //each cell contains the text of oune feature of the original description of AI-POWER
//        // console.log(`feature texts full array: ${featureTexts}`)

//         //press the wanted plan button - ("AI POWER")
//         const planButton = page.locator('div[data-id="366375bb"] a[data-test="ai-power-buy-now-btn"]');
//         await planButton.waitFor({ state: 'visible', timeout: 60000 }); // לוודא שהכפתור זמין
//         await planButton.click();





//         // ensure landing on the checkout page
//         await expect(page).toHaveURL(/^https:\/\/my\.elementor\.com\/checkout-2/, { timeout: 60000 });
//         /// ta da! we landed - let's start testing the checkout summary:)
//         ///////////////////////////////////



//         ////////TEST1: checking if the subtotal+tax=total

//         const subTotalLocator = await page.locator('[data-test="summarySubtotalPrice"] bdi');
//         await subTotalLocator.waitFor({ state: 'visible' });
//         const subTotalText = await subTotalLocator.innerText();

//         const taxLocator = await page.locator('[data-test="summaryVatPrice"] .woocommerce-Price-amount');
//         await taxLocator.waitFor({ state: 'visible' });
//         const taxText = await taxLocator.innerText();

//         const totalLocator = await page.locator('[data-test="summaryTotalPrice"] bdi'); // מזהה שדה הטוטאל
//         await totalLocator.waitFor({ state: 'visible' });
//         const totalText = await totalLocator.innerText();


//         const subTotal = parseFloat(subTotalText.replace('₪', '').trim());
//         const tax = parseFloat(taxText.replace('₪', '').trim());
//         const total = parseFloat(totalText.replace('₪', '').trim());
//         console.log(tax)

//         // the test---
//         expect(subTotal + tax).toBe(total);

//         /////TEST2: check if the features in summary somehow fit  to what chosen in previous page
//         const cardBody = page.locator('div.card-body.border-gray-50.d-flex.justify-content-between.align-items-start');
//         await cardBody.waitFor({ state: 'visible', timeout: 60000 });
//         const summaryText = await cardBody.textContent();
//         console.log(`The whole summary text: ${summaryText}`)
//         let totalCount=0
//         for (const F_text of productFeatures) {

//             const Feature_words = F_text.split(/(?:\s|,\s)/);
//             console.log(`current Feature words array[2]: ${Feature_words}`)
//             let count = 0
//             for (const word of Feature_words) {
//                 if (summaryText?.includes(word)) {
//                     count++
//                 }
//             }
//             count>0?totalCount+=1:null
            
//         }
//         expect(totalCount).toBeGreaterThanOrEqual(productFeatures.length)

        

//     });

//     //   //details appearrance
//     //   const summaryPanel = page.locator('#summary-panel');
//     //   await summaryPanel.waitFor({ state: 'visible', timeout: 60000 }); 
//     //   await expect(summaryPanel).toContainText('Total Price');

//     //    test('Check fields in payment summary', async({page})=>{
//     //       const summaryPanel = await page.locator('#order_review');
//     //       await expect(summaryPanel).toBeVisible();
//     //       await expect(summaryPanel).toContainText('Total');

//     //       //const placeOrderButton = await page.locator('text=Place Order'); 
//     //       //await expect(placeOrderButton).toBeVisible();



//     //    })




//     // test('verify pays are calculated accuratly', async({page})=>{
//     //    // const pricePerMonthText = page.locator('.col-md-6 .woocommerce-Price-amount.amount');

// //})

// })
