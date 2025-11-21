(function(){
  function setup(form){
    const key = form.getAttribute('data-storage');
    const list = form.previousElementSibling;
    let reviews = []; try{reviews=JSON.parse(localStorage.getItem(key)||'[]')}catch{}
    const render=()=>{list.innerHTML=''; if(!reviews.length){const p=document.createElement('p');p.className='muted';p.textContent='No reviews yet.';list.appendChild(p);return;}
      reviews.forEach(t=>{const d=document.createElement('div');d.className='review';d.textContent=t;list.appendChild(d);});};
    render();
    form.addEventListener('submit', e=>{e.preventDefault(); const ta=form.querySelector('textarea'); const v=(ta.value||'').trim(); if(!v) return;
      reviews.unshift(v); localStorage.setItem(key, JSON.stringify(reviews.slice(0,50))); ta.value=''; render();});
  }
  document.querySelectorAll('form.review-form').forEach(setup);
})();
