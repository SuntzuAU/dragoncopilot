import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1400, height: 1050 } });
for (const [url,name] of [['/','home2'],['/what-is-dragon-flex/','doc2'],['/emr/','emr2']]) {
  await p.goto('http://localhost:4321'+url,{waitUntil:'networkidle'});
  await p.screenshot({path:`/tmp/shots/${name}.png`});
}
// full-page footer shot
await p.goto('http://localhost:4321/what-is-dragon-flex/',{waitUntil:'networkidle'});
await p.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
await p.waitForTimeout(400);
await p.screenshot({path:'/tmp/shots/footer.png'});
await b.close(); console.log('shots done');
