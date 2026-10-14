// ============================================================
// wish.js - poem, lotus button, wish window, petals and share
// ============================================================
// Go to the next poem
let pi=0;function nextPoem(){pi=(pi+1)%poems.length;showPoem()}

// Show the current poem and its credit line
function showPoem(){$('#poem').textContent=poems[pi];$('#psrc').textContent='Original verse in the spirit of Agomoni songs. Tagore & Nazrul also wrote beautifully on Sharat & Maa — add verified lines of your choice.'}showPoem();

// Lotus click: glow, rain petals, then open the wish window with a random blessing
function openWish(){const n=$('#nm').value.trim(),b=bl[Math.random()*bl.length|0];
 $('#lotus').classList.add('glow');petals();
 setTimeout(()=>{$('#wto').textContent=n?'প্রিয় '+n+',':'প্রিয় বন্ধু,';$('#bless').textContent=b[0];$('#blessEn').textContent=b[1];$('#modal').classList.add('on')},900)}

// Close the wish window and stop the glow
function closeWish(){$('#modal').classList.remove('on');$('#lotus').classList.remove('glow')}

// Falling petals animation
function petals(){for(let i=0;i<24;i++){const p=document.createElement('div');p.className='pet';p.textContent=['🌸','🪷','✨','🌼'][i%4];p.style.left=Math.random()*100+'vw';p.style.animationDelay=Math.random()*1.2+'s';document.body.appendChild(p);setTimeout(()=>p.remove(),5000)}}

// Share the wish using the phone share sheet, else copy to clipboard
async function share(){const n=$('#nm').value.trim(),t='শুভ শারদীয়া'+(n?' '+n:'')+'! Happy Durga Puja 🪷 '+location.href;
 try{if(navigator.share){await navigator.share({text:t});return}await navigator.clipboard.writeText(t);alert('Copied!')}catch(e){}}
