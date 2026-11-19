const videos=[
  {src:'assets/creative-01.mp4',title:'角色视觉实验',poster:'assets/creative-01.jpg'},
  {src:'assets/creative-02.mp4',title:'产品质感实验',poster:'assets/creative-02.jpg'},
  {src:'assets/creative-03.mp4',title:'双猫创意短片',poster:'assets/creative-03.jpg'},
  {src:'assets/creative-04.mp4',title:'猫咪产品创意',poster:'assets/creative-04.jpg'},
  {src:'assets/creative-05.mp4',title:'童话叙事短片',poster:'assets/creative-05.jpg'}
];
const dialog=document.getElementById('video-dialog'),player=document.getElementById('modal-video'),title=document.getElementById('dialog-title'),count=document.getElementById('video-count');
let active=0;
function openVideo(index){active=(index+videos.length)%videos.length;const v=videos[active];player.pause();player.src=v.src;player.poster=v.poster;player.load();title.textContent=v.title;count.textContent=`${String(active+1).padStart(2,'0')} / ${String(videos.length).padStart(2,'0')}`;if(!dialog.open)dialog.showModal();player.play().catch(()=>{});}
function closeVideo(){player.pause();player.removeAttribute('src');player.load();if(dialog.open)dialog.close();}
document.querySelectorAll('.video-card').forEach(card=>card.addEventListener('click',()=>openVideo(Number(card.dataset.index))));
document.getElementById('video-close').addEventListener('click',closeVideo);document.getElementById('prev-video').addEventListener('click',()=>openVideo(active-1));document.getElementById('next-video').addEventListener('click',()=>openVideo(active+1));
dialog.addEventListener('click',e=>{if(e.target===dialog)closeVideo()});dialog.addEventListener('close',()=>{player.pause();player.removeAttribute('src');player.load()});
document.addEventListener('keydown',e=>{if(dialog.open&&e.key==='ArrowRight')openVideo(active+1);if(dialog.open&&e.key==='ArrowLeft')openVideo(active-1)});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===button));document.querySelectorAll('.video-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.kind!==button.dataset.filter})}));
const menuButton=document.getElementById('menu-button'),mobileNav=document.getElementById('mobile-nav');menuButton.addEventListener('click',()=>{const opened=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!opened));mobileNav.hidden=opened});mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false')}));
const progress=document.getElementById('scroll-progress');function onScroll(){let max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max?scrollY/max*100:0)+'%';}addEventListener('scroll',onScroll,{passive:true});onScroll();
if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -25px 0px',threshold:.06});document.querySelectorAll('.section-pad .section-kicker,.section-pad h2,.section-pad .performance-grid,.section-pad .video-grid,.section-pad .steps,.section-pad .growth-dual,.section-pad .future-list').forEach(el=>{el.classList.add('reveal');io.observe(el)});}
const navs=[...document.querySelectorAll('.site-header nav a')];if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)navs.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-25% 0px -60% 0px'});document.querySelectorAll('main section[id]').forEach(x=>io.observe(x));}
document.querySelectorAll('[data-proof]').forEach(button=>button.addEventListener('click',()=>{let img=document.querySelector('.evidence img');window.open(img.src,'_blank','noopener,noreferrer')}));
