const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    await page.goto('https://www.instagram.com/rocketseat_oficial');

    const imgList = await page.evaluate(() => {
        /// TODA ESSA FUNÇÃO SERÁ EXECUTADA NO BROWSER

        /// PEGAR TODAS IMAGENS NA PARTE DE POST
        const nodeList = document.querySelectorAll('article img')

        /// TRANSFORMAR O NodeList EM ARRAY
        const imgArray = [...nodeList]

        /// TRANSFOMAR OS NODES (ELEMENTOS HTML) EM OBJETOS JS
        const imgList = imgArray.map(({
            src
        }) => ({
            src
        }))

        // console.log(list)

        /// EXPORTAR PRA FORA DESTA FUNÇÃO
        return imgList
    });

    /// ESCREVER OS DADOS EM UM ARQUIVO LOCAL (JSON)
    fs.writeFile('exercic_000/web_scraping/instagram.json', JSON.stringify(imgList, null, 2), err => {
        if (err) throw new Error('Something went wront!!!')

        console.log('Well done!!')
    })

    // https://www.instagram.com/accounts/login/?next=%2F&source=logged_out_half_sheet


    // await page.screenshot({
    //     path: 'exercic_000/web_scraping/img_insta1.png'
    // });

    await browser.close();
})()
