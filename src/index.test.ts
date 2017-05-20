import {expect} from 'chai';
import * as fs from 'fs';
import jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('first test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	})
});

describe('index.html', () => {
	it('should say hello', () => {
		const index = fs.readFileSync('./src/index.html', "utf-8");
		const dom = new JSDOM(index);
		const text = dom.window.document.getElementsByTagName('h1')[0].innerHTML
		expect(text).to.equal("Hello World");
	})
});
