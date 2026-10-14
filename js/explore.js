// ============================================================
// explore.js - Pandals, Map, Food, Style, Metro and Outings tabs
// ============================================================
// Pandals tab: filter chips + cards
function rP(){chips('#pchips',kinds,'pandals',rP);$('#plist').innerHTML=P.filter(p=>sel.pandals==='All'||p.k===sel.pandals).map(p=>`<div class="card"><h3>${p.n} · ${p.bn}</h3><span class="tag">${p.k}</span><span class="tag">${p.area}</span><span class="tag">🚇 ${p.st}</span><p>${p.d}</p></div>`).join('')}rP();

// Map tab: draw river, metro line and clickable pins
$('#map').innerHTML=`<path d="M60 0Q90 140 70 230T110 420" stroke="#6aaed6" stroke-width="22" fill="none" opacity=".7"/><text x="14" y="200" font-size="11" fill="#2b6a96" transform="rotate(-80 20 200)">River Hooghly</text><path d="M170 20L235 400" stroke="#d99a1a" stroke-width="3" stroke-dasharray="8 5"/><text x="260" y="25" font-size="11" fill="#8a5a00">— Metro Blue Line (N–S)</text>`+Object.entries(pos).map(([k,[x,y]])=>`<g class="pin" data-k="${k}"><circle cx="${x}" cy="${y}" r="8"/><text x="${x+11}" y="${y+4}">${k}</text></g>`).join('');

// Map tab: show pin details on click
$('#map').onclick=e=>{const g=e.target.closest('.pin');if(!g)return;document.querySelectorAll('.pin').forEach(p=>p.classList.toggle('on',p===g));const p=P.find(x=>x.n===g.dataset.k);$('#mdet').innerHTML=`<h3>${p.n}</h3><span class="tag">${p.area}</span><span class="tag">🚇 ${p.st}</span><p>${p.d}</p>`};

// Food tab cards
$('#fl').innerHTML=F.map(f=>`<div class="card"><h3>${f[0]} · ${f[1]}</h3><p>${f[2]}</p></div>`).join('');

// Style tab cards
$('#sl').innerHTML=S.map(f=>`<div class="card"><h3>${f[0]}</h3><p>${f[1]}</p></div>`).join('');

// Metro tab: line chips + station cards
function rM(){chips('#mchips',Object.keys(M),'metro',rM);const k=sel.metro||'Blue Line';if(!sel.metro){sel.metro=k;return rM()}$('#ml').innerHTML=M[k].map((s,i)=>`<div class="card"><h3>${i+1}. ${s[0]}</h3><p>${s[1]}</p></div>`).join('')+'<div class="src">Stations & line extensions change; check the Kolkata Metro app for current routes and Pujo special timings.</div>'}rM();

// Outings tab cards
$('#ol').innerHTML=O.map(f=>`<div class="card"><h3>${f[0]}</h3><p>${f[1]}</p></div>`).join('');
