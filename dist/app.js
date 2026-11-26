document.documentElement.classList.add('js');
const products = [
 {id:'ambre',name:'Ambre',category:'unissex',family:'Oriental ambarado',notes:'Âmbar · Baunilha · Benjoim',price:489,volume:'100 ml',top:'Bergamota e pimenta rosa',heart:'Âmbar e resinas',base:'Baunilha e benjoim',description:'A luminosidade do âmbar encontra o calor das resinas. Uma presença envolvente que permanece na memória.'},
 {id:'rose',name:'Rose',category:'feminino',family:'Floral delicado',notes:'Rosa · Peônia · Almíscar',price:429,volume:'75 ml',top:'Lichia e notas verdes',heart:'Rosa e peônia',base:'Almíscar branco',description:'Pétalas frescas, um toque de delicadeza e a suavidade de um abraço. Um floral para iluminar o cotidiano.'},
 {id:'cedre',name:'Cèdre',category:'masculino',family:'Amadeirado intenso',notes:'Cedro · Vetiver · Especiarias',price:459,volume:'100 ml',top:'Cardamomo e pimenta preta',heart:'Cedro e cipreste',base:'Vetiver e musgo',description:'Madeiras profundas e especiarias desenham uma assinatura sóbria, marcante e cheia de personalidade.'},
 {id:'iris',name:'Iris',category:'feminino',family:'Floral atalcado',notes:'Íris · Violeta · Sândalo',price:469,volume:'75 ml',top:'Mandarina e violeta',heart:'Íris e heliotrópio',base:'Sândalo e almíscar',description:'A textura aveludada da íris revela um floral intimista. Delicado sobre a pele, inesquecível nos detalhes.'},
 {id:'santal',name:'Santal',category:'masculino',family:'Amadeirado cremoso',notes:'Sândalo · Cardamomo · Couro',price:519,volume:'100 ml',top:'Cardamomo e folhas verdes',heart:'Sândalo e cedro',base:'Couro suave e âmbar',description:'A profundidade das madeiras encontra uma textura cremosa. Uma fragrância com presença e equilíbrio.'},
 {id:'neroli',name:'Néroli',category:'unissex',family:'Cítrico luminoso',notes:'Néroli · Bergamota · Flor de laranjeira',price:399,volume:'100 ml',top:'Bergamota e limão',heart:'Néroli e flor de laranjeira',base:'Almíscar e madeiras claras',description:'A sensação de uma manhã banhada de sol. Cítricos vibrantes e flores brancas em uma composição leve e livre.'}
];
const money = value => value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const grid = document.querySelector('#products');
grid.innerHTML = products.map(p=>`<article class="product" data-product-category="${p.category}"><button class="product-photo" data-product="${p.id}" aria-label="Conhecer ${p.name}"><img src="assets/${p.id}.webp" alt="Frasco de perfume ${p.name} em uma composição de luz natural e tons marfim" loading="lazy" width="1024" height="1536"><span>Conhecer a fragrância</span></button><div class="product-info"><div class="product-meta"><span>${p.category}</span><span>Eau de parfum</span></div><h3>${p.name}</h3><p>${p.notes}</p><div class="price-line">${money(p.price)}<span>${p.volume}</span></div></div></article>`).join('');
function filterProducts(category){
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 let count=0;document.querySelectorAll('[data-product-category]').forEach(p=>{p.hidden=category!=='todos'&&p.dataset.productCategory!==category;if(!p.hidden)count++;});
 document.querySelector('.collection-count').textContent=`${count} fragrâncias`;
}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>filterProducts(b.dataset.filter)));
document.querySelectorAll('[data-category]').forEach(a=>a.addEventListener('click',()=>filterProducts(a.dataset.category)));
const productDialog=document.querySelector('#product-dialog');
const contactDialog=document.querySelector('#contact-dialog');
function openDialog(dialog){dialog.showModal();document.body.classList.add('modal-open');}
function openContact(){if(productDialog.open)productDialog.close();openDialog(contactDialog);}
document.querySelectorAll('[data-product]').forEach(b=>b.addEventListener('click',()=>{
 const p=products.find(p=>p.id===b.dataset.product);
 document.querySelector('#product-detail').innerHTML=`<div class="detail-grid"><img src="assets/${p.id}.webp" alt="Perfume ${p.name}"><div class="detail-copy"><p class="eyebrow">${p.family} · ${p.category}</p><h2 id="product-title">${p.name}</h2><p>${p.description}</p><dl><dt>Saída</dt><dd>${p.top}</dd><dt>Coração</dt><dd>${p.heart}</dd><dt>Fundo</dt><dd>${p.base}</dd></dl><div class="price-line">${money(p.price)}<span>${p.volume}</span></div><p class="demo-caption">Fragrância e valor ilustrativos.</p><button class="button button-dark" id="detail-contact">Quero descobrir esta fragrância</button></div></div>`;
 document.querySelector('#detail-contact').addEventListener('click',openContact);openDialog(productDialog);
}));
document.querySelectorAll('[data-contact]').forEach(b=>b.addEventListener('click',openContact));
document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.dialog-close').addEventListener('click',()=>d.close());d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});d.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))document.body.classList.remove('modal-open');});});
const suggestions={frescas:'Sua descoberta começa por Néroli: bergamota, flor de laranjeira e a leveza dos dias de sol.',florais:'Explore Rose e Iris: pétalas delicadas e texturas suaves para uma assinatura intimista.',amadeiradas:'Conheça Cèdre, Santal e Ambre: madeiras, especiarias e notas envolventes.'};
document.querySelectorAll('[data-scent]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-scent]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));document.querySelector('#scent-response').textContent=suggestions[b.dataset.scent];}));
const menuButton=document.querySelector('.menu-toggle'),menu=document.querySelector('#mobile-nav');
function closeMenu(){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menu.hidden=open;menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Abrir menu':'Fechar menu');});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
