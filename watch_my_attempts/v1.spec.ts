// import { test, expect } from '@playwright/test';
// test.describe('Test flow', ()=>{
//     test('Automate purchase preview flow', async ({browser, browserName, page }) => {
//         // Go to site (https://elementor.com/)
//         // if (browserName === 'webkit') {
//         //     await page.setViewportSize({ width: 1440, height: 900 }); // רזולוציה קטנה יותר עבור WebKit
//         // }
//         test.setTimeout(90000); 
        
//         //await page.setViewportSize({ width: 1280, height: 720 });
//         //await page.setViewportSize({ width: 1920, height: 1080 });
//         //await page.evaluate(() => document.body.style.zoom = '100%');
//         await page.goto('https://elementor.com/', {waitUntil: 'networkidle',  timeout: 120000 }); 
      

//     //shot
//       //await page.screenshot({ path: 'homepage.png', fullPage: true });
//       //press the "Products"
//       const catalogButton = page.locator('.elementor-item.elementor-item-anchor.has-submenu').first();
//       await catalogButton.waitFor({ state: 'visible' });
//       await catalogButton.click();
//       //shot
//       //await page.screenshot({ path: 'catalog.png', fullPage: true }); 
      
//       // choose the ELEMENTOR AI fron the list
//     const elements = page.locator('li.menu-item a[href="https://elementor.com/products/ai/"]'); 
//     //  const elements = page.locator('li.menu-item-77135 > a.elementor-sub-item');

//     for (let i = 0; i < await elements.count(); i++) {
//     const element = elements.nth(i);
//     if (await element.isVisible()) {
//         console.log(`Found visible element at index ${i}`);
//         await element.click(); 
//         break; 
//     }
// }


//   //  const product = page.locator('a.elementor-sub-item[data-gtm-level_2="elementor ai"]').nth(1)  
// // סלקטור מעודכן 
//     // await product.waitFor({ state: 'visible', timeout: 90000 }); // מחכה שהאלמנט יהיה גלוי
//     //  await product.click();
      
//      // await page.screenshot({ path: 'ai_manu.png', fullPage: true });
//       //   // שלב 4: לחיצה על "Buy now" למעבר לעמוד התמחור
//      // const buyNowButton = page.locator('text=BUY NOW').first();
      
//      // await buyNowButton.waitFor({ state: 'visible', timeout: 60000 }); // מוודא שהכפתור מופיע
//      // await buyNowButton.click();

//      //press BUY NOW - (on top right corner of screen)
//      const buyNowButtons = page.locator('[aria-label="Get Started With Elementor"]', { hasText: 'BUY NOW' });

// for (let i = 0; i < await buyNowButtons.count(); i++) {
//     const buyNowButton = buyNowButtons.nth(i);
//     if (await buyNowButton.isVisible()) {
//         await buyNowButton.click(); 
//         break;
//     }
// }


//      // await page.screenshot({ path: 'purchase_options.png', fullPage: true });
      
     
//     //   const planButton = page.locator('a[href="https://my.elementor.com/checkout-2/?add-to-cart=13539232&edata=%7B%22name%22%3A%22ELEMENTOR-AI-POWER-01%22%2C%22price%22%3A%7B%22EUR%22%3A%2299%22%2C%22ILS%22%3A%22399%22%2C%22USD%22%3A%2299%22%7D%2C%22id%22%3A%2213539232%22%2C%22category%22%3A%22Elementor+AI%22%7D&currency=ILS"]').first();
//     //const planButton = page.locator('a[data-test="ai-power-buy-now-btn"]').first();
   
//     //save the chosen product features to use later

//    // await page.waitForLoadState('networkidle');

//     const productFeatures1= await page.locator('.elementor-post.elementor-grid-item.post-75106.post.type-post.status-publish.format-standard.hentry.category-pricing-plans.tag-ai-plan-power.tag-popular span.plan__features__item.included');
//    // await productFeatures1.waitFor({ state: 'visible' });
//     const productFeatures = await productFeatures1.elementHandles();
//     // await productFeatures1.first().waitFor({ state: 'visible', timeout: 60000 });
//     // const productFeatures = await productFeatures1.all();
//   console.log(`original page features: ${productFeatures}\n`)
//   const featureTexts:string[] = [];
// for (const F of productFeatures) {
//   const text = await F.innerText();
//   featureTexts.push(text);
// }

// //press the wanted plan button - ("AI POWER")
// const planButton = page.locator('div[data-id="366375bb"] a[data-test="ai-power-buy-now-btn"]');
// await planButton.waitFor({ state: 'visible', timeout: 60000 }); // לוודא שהכפתור זמין
// await planButton.click(); // ללחוץ על הכפתור

    
//     //await page.waitForTimeout(5000); // המתנה של 5 שניות

//   // const isVisible = await planButton.isVisible();
//   // console.log(`Element visibility: ${isVisible}`);

//    // await planButton.waitFor({ state: 'attached', timeout: 60000 });
    
//    // await planButton.click();

//     // const planButton = page.locator(
//     //     'a[href="https://my.elementor.com/checkout-2/?add-to-cart=13539232&edata=%7B%22name%22%3A%22ELEMENTOR-AI-POWER-01%22%2C%22price%22%3A%7B%22EUR%22%3A%2299%22%2C%22ILS%22%3A%22399%22%2C%22USD%22%3A%2299%22%7D%2C%22id%22%3A%2213539232%22%2C%22category%22%3A%22Elementor+AI%22%7D&currency=ILS"]'
//     //   );
      
//     //   if (await planButton.isVisible()) {
//     //       await planButton.waitFor({ state: 'attached', timeout: 60000 });
//     //       await planButton.click();
//     //   } else {
//     //       console.error('Plan button is not visible in the current DOM.');
//     //   }
      
   

//       //await page.screenshot({ path: 'check_out_manu.png', fullPage: true });
      
      
//       // ensure landing on the checkout page
//             await expect(page).toHaveURL(/^https:\/\/my\.elementor\.com\/checkout-2/, { timeout: 60000 });
//     /// ta da! we landed - let's start testing the checkout summary:)
//       ///////////////////////////////////

     

//       ////////TEST1: checking if the subtotal+tax=total

//       const subTotalLocator = await page.locator('[data-test="summarySubtotalPrice"] bdi');
//       await subTotalLocator.waitFor({ state: 'visible' });
//       const subTotalText = await subTotalLocator.innerText();
      
//       const taxLocator = await page.locator('[data-test="summaryVatPrice"] .woocommerce-Price-amount'); 
//       await taxLocator.waitFor({ state: 'visible' });
//       const taxText = await taxLocator.innerText();

//       const totalLocator = await page.locator('[data-test="summaryTotalPrice"] bdi'); // מזהה שדה הטוטאל
//       await totalLocator.waitFor({ state: 'visible' });
//       const totalText = await totalLocator.innerText();
    
      
//       const subTotal = parseFloat(subTotalText.replace('₪', '').trim());
//       const tax = parseFloat(taxText.replace('₪', '').trim());
//       const total = parseFloat(totalText.replace('₪', '').trim());
//       console.log(tax)
    
//       // בדיקת חישוב הסכום
//       expect(subTotal + tax).toBe(total);
      
//     /////TEST2: check if the features in summary somehow fit  to what chosen in previous page
//     const cardBody = page.locator('div.card-body.border-gray-50.d-flex.justify-content-between.align-items-start');
//     await cardBody.waitFor({ state: 'visible', timeout: 60000 });
//     const summaryText = await cardBody.textContent();
//     console.log(`The whole summary text: ${summaryText}`)
    
//     for(const F_text of featureTexts){
    
//     const Feature_words = F_text.split(" ")
//     console.log(`current Feature words array: ${Feature_words}`)
//     let count=0
//     for(const word in Feature_words){
//         if(summaryText?.includes("capchi")){
//             count++
//         }
//     }
//     expect(count).toBeGreaterThan(0)
    
//     }
      
//       //   //details appearrance
//       //   const summaryPanel = page.locator('#summary-panel');
//       //   await summaryPanel.waitFor({ state: 'visible', timeout: 60000 }); 
//       //   await expect(summaryPanel).toContainText('Total Price');

//        });  

//     //    test('Check fields in payment summary', async({page})=>{
//     //       const summaryPanel = await page.locator('#order_review');
//     //       await expect(summaryPanel).toBeVisible();
//     //       await expect(summaryPanel).toContainText('Total');
      
//     //       //const placeOrderButton = await page.locator('text=Place Order'); 
//     //       //await expect(placeOrderButton).toBeVisible();
      
      
      
//     //    })
//     //    test('Verify total price equals price + tax', async ({ page }) => {
//     //     // ניווט לעמוד הצ'קאאוט
        
      
//     //     // השגת הערכים מהעמוד
//     //     const subTotalLocator = await page.locator('[data-test="summarySubtotalPrice"] bdi');
//     //     await subTotalLocator.waitFor({ state: 'visible' });
//     //     const subTotalText = await subTotalLocator.innerText();
//     //     const taxText = await page.locator('[data-test="summaryVatPrice"] bdi').innerText(); // מזהה שדה המס
//     //     const totalText = await page.locator('[data-test="summaryTotalPrice"] bdi').innerText(); // מזהה שדה הטוטאל
      
//     //     // המרה למספרים (הנחה שהמחיר הוא בפורמט "$49.99")
//     //     const subTotal = parseFloat(subTotalText.replace('₪', '').trim());
//     //     const tax = parseFloat(taxText.replace('₪', '').trim());
//     //     const total = parseFloat(totalText.replace('₪', '').trim());
//     //     console.log(tax)
      
//     //     // בדיקת חישוב הסכום
//     //     expect(subTotal + tax).toBe(total);
//     //   });
      
      

// // test('verify pays are calculated accuratly', async({page})=>{
// //    // const pricePerMonthText = page.locator('.col-md-6 .woocommerce-Price-amount.amount');

// // })
// })
