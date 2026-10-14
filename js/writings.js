// ============================================================
// writings.js - full-screen viewer for the poem posters
// ============================================================
// Tap any image marked data-zoom to open it; tap the dark area or press Esc to close
document.addEventListener('click',e=>{const i=e.target.closest('[data-zoom]');if(i){$('#lbi').src=i.src;$('#lb').classList.add('on')}else if(e.target.closest('#lb'))$('#lb').classList.remove('on')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')$('#lb').classList.remove('on')});
