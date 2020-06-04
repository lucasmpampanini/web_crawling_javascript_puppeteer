const puppeteer = require('puppeteer');

async function main () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://www.legislador.com.br/LegisladorWEB.ASP?WCI=ProjetoTramite&ID=20', {waitUntil: 'networkidle2'});

    await page.waitFor('input[name="dsTexto"]');

    await page.$eval('input[name="dsTexto"]', el => el.value = 'transporte');

    await page.click('.btn-outline-secondary[type="submit"]');
    await page.waitForSelector('.card');
    
    const text = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('.card'));
        return anchors.map((anchor) => {
            return anchor.innerHTML;
        });
    });

    const text2 = await page.$$('a.btn-outline-secondary.float-right');

    for (let i = 0; i < text2.length; i++) {
        const tweet = await (await (await text2[i].getProperty('innerText')).jsonValue());
        
    }
    
    const attr = await page.$$eval("a.btn-outline-secondary.float-right", el => el.map(x => x.getAttribute("onclick")));


    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }



    for (let i = 0; i < attr.length; i++) {
        const url1 = Number(attr[i].slice(14,16));
        const url2 = Number(attr[i].slice(17,18));

        let a = 19
        let b = 20

        function WhileUrl3 (a, b) {
            const url3list = [];
            const url4list = [];
            while (attr[i].slice(a, b) != ",") {
                const url3 = url3list.push(Number(attr[i].slice(19, b)));
                a++;
                b++;
            };
            a++;
            let c = a;
            b++;
            while (attr[i].slice(a,b) != ",") {
                const url4 = url4list.push(Number(attr[i].slice(c, b)));
                a++;
                b++;
            };
            const url = `http://www.legislador.com.br/LegisladorWEB.ASP?WCI=ProjetoTexto&ID=${url1}&inEspecie=${url2}&nrProjeto=${getMaxOfArray(url3list)}&aaProjeto=${getMaxOfArray(url4list)}&dsVerbete=transporte`;
            return url;
        };

        
        const page2 = await browser.newPage();
        await page2.goto(WhileUrl3(a,b), {waitUntil: 'networkidle2'});

        await page2.waitForSelector('.card-header');

        const titulo = await page2.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll("body > section > div > div:nth-child(1) > h5"));
            return anchors.map((anchor) => {
                return anchor.innerHTML;
            });
        });

        const situacao = await page2.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll("body > section > div > div:nth-child(2) > div > div.col-lg > dl > dd:nth-child(2)"));
            return anchors.map((anchor) => {
                return anchor.innerHTML;
            });
        });

        const tramite = await page2.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll("body > section > div > div:nth-child(2) > div > div.col-lg > dl > dd:nth-child(4)"));
            return anchors.map((anchor) => {
                return anchor.innerHTML;
            });
        });

        const regime = await page2.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll("body > section > div > div:nth-child(2) > div > div.col-lg > dl > dd:nth-child(6)"));
            return anchors.map((anchor) => {
                return anchor.innerHTML;
            });
        });        
        
        const assunto = await page2.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll("body > section > div > div:nth-child(2) > div > div.col-lg > dl > dd:nth-child(8)"));
            return anchors.map((anchor) => {
                return anchor.innerHTML;
            });
        });

        const autor = await page2.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll("body > section > div > div:nth-child(2) > div > div.col-lg > dl > dd:nth-child(10) > b"));
            return anchors.map((anchor) => {
                return anchor.innerHTML;
            });
        });

        console.log("Titulo: " + titulo[0],"Situação: " + situacao[0],"Trâmite: " + tramite[0],"Regime: " + regime[0],"Assunto: " + assunto[0],"Autor: " + autor[0]);
    };

    await browser.close();
};

main();