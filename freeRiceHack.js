const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.freerice.com');

    // Click on the login button
    await page.click('a[href="/login"]');

    // Wait for the login form to appear
    await page.waitForSelector('input[name="email"]');

    // Type in the login credentials
    const email = 'sivaezhumalai2002@gmail.com'; // Replace with your actual email
    const password = 'Hisiva@24'; // Replace with your actual password

    await page.type('input[name="email"]', email);
    await page.type('input[name="password"]', password);

    // Click on the login button to submit the form
    await page.click('button[type="submit"]');

    // Wait for the login process to complete
    await page.waitForNavigation();

    // Navigate to the multiplication tables category
    await page.goto('https://www.freerice.com/categories/multiplication-table');

    // Wait for the page to load and display the elements
    await page.waitForSelector('.card-title');

    // Define the function to be executed in the page context
    await page.evaluate(() => {
        window.freeRiceHackFunc = function() { 
            let problem = document.getElementsByClassName("card-title")[0].innerText; // '11 x 12'
            let pr = problem.split('x').map(n => parseInt(n)); // [11, 12]

            let answer = pr[0] * pr[1]; // 132

            let opts = document.getElementsByClassName('card-button'); // [HTMLElement x 4]

            let a = opts[0]; // HTMLElement
            let b = opts[1]; // HTMLElement
            let c = opts[2]; // HTMLElement
            let d = opts[3]; // HTMLElement

            if (parseInt(a.innerText) == answer) {
                a.click();
            } else if (parseInt(b.innerText) == answer) {
                b.click();
            } else if (parseInt(c.innerText) == answer) {
                c.click();
            } else if (parseInt(d.innerText) == answer) {
                d.click();
            }

            for (let i = 0; i < window.bruh.length; i++) {
                clearTimeout(window.bruh[i]);
                bruh.shift();
            }

            bruh.push(setTimeout(window.freeRiceHackFunc, 400));
        }

        // Define a list to save all the timeouts
        // Save it as a property of window to prevent re-defining variables
        window.bruh = [];

        // Start the hack with an initial timeout, it will recall itself automatically
        bruh.push(setTimeout(window.freeRiceHackFunc, 200));
    });

    // Keep the browser open to observe the actions
    // Comment out the next line if you want the browser to close after some time
    // await browser.close();
})();
