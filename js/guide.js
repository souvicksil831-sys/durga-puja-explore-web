// ============================================================
// guide.js - Pujo Guide chat (rule-based, works offline)
// ============================================================
// Render quick-question buttons
$('#sug').innerHTML=sug.map(s=>`<button class="chip" style="margin:3px">${s}</button>`).join('');

// Clicking a quick question sends it
$('#sug').onclick=e=>{if(e.target.className.includes('chip')){$('#q').value=e.target.textContent;ask()}};

// Add a chat bubble (c = u for user / b for bot)
function add(c,t){const d=document.createElement('div');d.className='m '+c;d.textContent=t;$('#chat').appendChild(d);$('#chat').scrollTop=1e5}

// Welcome message
add('b','শুভ শারদীয়া! I\'m your Pujo guide. Ask me anything about pandal-hopping in Kolkata.');

// Find the first matching answer in KB and reply
function ask(){const q=$('#q').value.trim();if(!q)return;add('u',q);$('#q').value='';const l=q.toLowerCase();const h=KB.find(k=>k[0].test(l));setTimeout(()=>add('b',h?h[1]:"I'm not sure about that, but try the Pandals, Metro or Food tabs — or ask me about pandals, food, style or outings!"),350)}

// Press Enter to send
$('#q').onkeydown=e=>{if(e.key==='Enter')ask()};
