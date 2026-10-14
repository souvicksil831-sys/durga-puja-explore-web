// ============================================================
// home.js - home page extras: countdown, featured pandals, scroll reveal
// ============================================================
// Countdown to Shashthi (Fri 16 Oct 2026, IST); update dates here every year
(function(){const t=new Date('2026-10-16T00:00:00+05:30'),e=new Date('2026-10-21T23:59:00+05:30'),el=document.getElementById('cd');
function u(){const n=new Date();if(n<t){const d=Math.ceil((t-n)/864e5);el.textContent='মা আসছেন — '+d+' day(s) to Shashthi';}else if(n<=e)el.textContent='🔔 Pujo is on! শুভ পুজো';else el.textContent='আসছে বছর আবার হবে 🙏'}u();setInterval(u,6e4)})();


// Featured pandals row (first five from data.js)
$('#feat').innerHTML=P.slice(0,5).map(p=>`<div class="card"><h3>${p.n}</h3><span class="tag">${p.k}</span><span class="tag">🚇 ${p.st}</span><p>${p.d.slice(0,110)}…</p></div>`).join('');

// Fade-in animation when sections scroll into view
(function(){const els=document.querySelectorAll('.rv');if(!('IntersectionObserver'in window)){els.forEach(e=>e.classList.add('in'));return}
const o=new IntersectionObserver(r=>r.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');o.unobserve(x.target)}}),{threshold:.12});els.forEach(e=>o.observe(e))})();
