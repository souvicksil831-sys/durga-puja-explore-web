// ============================================================
// core.js - shared helpers, tab navigation and theme switch
// ============================================================
// Short DOM helper: $("#id") = document.querySelector
const $=s=>document.querySelector(s);

// Tab list [section id, label]
const tabs=[['wish','🪷 Wish'],['pandals','🛕 Pandals'],['mapS','🗺️ Map'],['food','🍛 Food'],['style','👗 Style'],['metro','🚇 Metro'],['out','🌿 Outings'],['write','✍️ Writings'],['ai','🤖 Guide']];

// Build the tab bar
$('#nav').innerHTML=tabs.map(t=>`<button data-t="${t[0]}">${t[1]}</button>`).join('');

// Show one section and highlight its tab
function go(id){document.querySelectorAll('section').forEach(s=>s.classList.toggle('on',s.id===id));document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.t===id));scrollTo(0,0)}

// Tab click handler; start on the Wish tab
$('#nav').onclick=e=>{if(e.target.dataset.t)go(e.target.dataset.t)};go('wish');

// Remembers the selected chip for each tab
const sel={pandals:'All'};

// Renders filter chips into a container and re-renders on click
function chips(el,arr,key,fn){$(el).innerHTML=arr.map(a=>`<button class="chip ${sel[key]===a?'on':''}" data-v="${a}">${a}</button>`).join(' ');$(el).onclick=e=>{if(e.target.dataset.v){sel[key]=e.target.dataset.v;fn()}}}

// Toggle dark / light theme (dark is the default in index.html)
function theme(){const r=document.documentElement;r.dataset.theme=r.dataset.theme==='dark'?'light':'dark'}
