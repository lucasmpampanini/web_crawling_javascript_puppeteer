# Web Crawling com JavaScript (Puppeteer)

Utilizei o Framework Puppeteer para raspar os dados do JS path.

##### Imprime no console os dados coletados com o texto limpo.

[![Console index.js](https://i.imgur.com/IhAFhBo.png?1 "Console index.js")](https://imgur.com/IhAFhBo "Console index.js")

------------


##### Da ragem da pagina home extraimos os links das proximas paginas a ser examinada:
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
