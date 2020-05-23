const request = require('request')
const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const Crawler = require('crawler')

async function main(){
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto('http://www.legislador.com.br/LegisladorWEB.ASP?WCI=ProjetoTramite&ID=20');
	await page.waitFor('input[name="dsTexto"]');
	await page.type('input[name="dsTexto"]', 'transporte', {delay:100});
	await page.keyboard.press('Enter');
	
    
	//let html = await page.content();
	//const $ = await cheerio.load(html);

	console.log(test);
}
main();