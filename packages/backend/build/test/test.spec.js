"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const japa_1 = __importDefault(require("japa"));
const { chromium } = require('playwright');
japa_1.default.group('Welcome', () => {
    japa_1.default('ensure home page works', async () => {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.screenshot({ path: `example.png` });
        await browser.close();
    }).timeout(5000);
});
//# sourceMappingURL=test.spec.js.map