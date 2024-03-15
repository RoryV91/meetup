const puppeteer = require('puppeteer');

test('filter events by city', async () => {
    const browser = await puppeteer.launch({
        // This is annoying, will enable later if I must.
        // headless: false,
        // slowMo: 250, 
        // timeout: 0
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');

    const city = 'Berlin, Germany';
    await page.type('.city', city);

    // Wait for the suggestions to appear and click on the suggestion that contains the city name
    await page.waitForSelector('.suggestions li');
    await page.evaluate((city) => {
        const suggestions = Array.from(document.querySelectorAll('.suggestions li'));
        const suggestion = suggestions.find(s => s.textContent.includes(city));
        if (suggestion) suggestion.click();
    }, city);

    await page.waitForSelector('.event');

    const events = await page.$$('.event');
    for (let event of events) {
        const location = await event.$eval('.event-info:nth-of-type(2) p', el => el.textContent);
        expect(location).toBe(city);
    }

    await browser.close();
});

describe('show/hide an event details', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            // This is annoying, will enable later if I must.
            // headless: false,
            // slowMo: 250, 
            // timeout: 0
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeNull();
      });
});