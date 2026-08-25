import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1440, height: 1200 },
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36' });
const urls = [
  ['https://www.microsoft.com/en-us/health-solutions/clinical-workflow/dragon-copilot','ms-product'],
  ['https://support.microsoft.com/en-us/dragon-copilot/physicians/welcome-to-microsoft-dragon-copilot','ms-support'],
];
for (const [u,name] of urls) {
  try {
    await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await p.waitForTimeout(3500);
    await p.screenshot({ path: `/tmp/shots/${name}.png` });
    const data = await p.evaluate(() => {
      const count = {};
      const bump = (k,w=1) => { if(!k) return; count[k]=(count[k]||0)+w; };
      for (const el of document.querySelectorAll('body *')) {
        const r = el.getBoundingClientRect();
        if (r.width < 4 || r.height < 4) continue;
        const cs = getComputedStyle(el);
        const area = Math.min(r.width*r.height, 400000);
        if (cs.backgroundColor && !cs.backgroundColor.includes('rgba(0, 0, 0, 0)')) bump('BG '+cs.backgroundColor, area);
        if (cs.color) bump('FG '+cs.color, area/40);
      }
      const fonts = {};
      for (const el of document.querySelectorAll('h1,h2,h3,p,body')) {
        const cs = getComputedStyle(el);
        fonts[el.tagName] = cs.fontFamily + ' | ' + cs.fontSize + ' | ' + cs.fontWeight;
      }
      return { top: Object.entries(count).sort((a,b)=>b[1]-a[1]).slice(0,16).map(([k,v])=>k+'  ('+Math.round(v)+')'), fonts, title: document.title };
    });
    console.log('\n===== ' + name + ' :: ' + data.title);
    console.log(data.top.join('\n'));
    console.log('FONTS:', JSON.stringify(data.fonts, null, 1));
  } catch(e) { console.log(name, 'FAILED', e.message.slice(0,120)); }
}
await b.close();
