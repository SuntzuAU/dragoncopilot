import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1400, height: 1000 } });
const shots = [
  ['/', 'home'],
  ['/what-is-dragon-flex/', 'doc-page'],
  ['/emr/', 'emr-matrix'],
  ['/sector/', 'sector'],
];
for (const [url, name] of shots) {
  await p.goto('http://localhost:4321' + url, { waitUntil: 'networkidle' });
  await p.screenshot({ path: `/tmp/shots/${name}.png`, fullPage: false });
}
await b.close();
console.log('done');
