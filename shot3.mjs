import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1400, height: 1100 } });
for (const [url,name] of [['/','final-home'],['/australia/','final-hub'],['/sector/','final-sector']]) {
  await p.goto('http://localhost:4322'+url,{waitUntil:'networkidle'});
  await p.waitForTimeout(1500);
  await p.screenshot({path:`/tmp/shots/${name}.png`});
}
await p.goto('http://localhost:4322/what-is-dragon-flex/',{waitUntil:'networkidle'});
await p.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
await p.waitForTimeout(600);
await p.screenshot({path:'/tmp/shots/final-footer.png'});
await b.close(); console.log('ok');
