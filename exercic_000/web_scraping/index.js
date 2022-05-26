const puppeteer = require('puppeteer');

// EXECUTANDO O BOT EXIBINDO A ABERTURA DO BROWSE
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://example.com');
    await page.screenshot({
        path: 'exercic_000/web_scraping/example1.png'
    });

    await page.goto('https://github.com/Rfalco/AULAS_html_css');
    await page.screenshot({
        path: 'exercic_000/web_scraping/example2.png'
    });

    await page.goto('https://github.com/Rfalco/AULAS_javascript');
    await page.screenshot({
        path: 'exercic_000/web_scraping/example3.png'
    });

    await browser.close();

})();

// EXECUTANDO O BOT SEM EXIBIR A ABARTURA DO BROWSE
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://example.com');
    await page.screenshot({
        path: 'exercic_000/web_scraping/example4.png'
    });

    await page.goto('https://github.com/Rfalco/AULAS_html_css');
    await page.screenshot({
        path: 'exercic_000/web_scraping/example5.png'
    });

    await page.goto('https://github.com/Rfalco/AULAS_javascript');
    await page.screenshot({
        path: 'exercic_000/web_scraping/example6.png'
    });

    await browser.close();

})();