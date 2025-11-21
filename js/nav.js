(function(){
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if(btn && menu){ btn.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open?'true':'false');
  });}
  const page = document.body.getAttribute('data-page')||'';
  const link = document.querySelector(`[data-nav="${page}"]`);
  if(link){ link.classList.add('active'); link.setAttribute('aria-current','page'); }
})();
