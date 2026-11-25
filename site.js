(function(){
var d=document,root=d.documentElement;
var btn=d.querySelector('.menu-btn'),drawer=d.getElementById('mob-drawer'),ov=d.getElementById('mob-overlay');
function setMenu(open){if(!drawer)return;drawer.classList.toggle('open',open);ov.classList.toggle('open',open);btn.setAttribute('aria-expanded',open?'true':'false');root.style.overflow=open?'hidden':'';}
if(btn){btn.addEventListener('click',function(){setMenu(!drawer.classList.contains('open'));});
ov.addEventListener('click',function(){setMenu(false);});
var cl=drawer.querySelector('.mob-close');if(cl)cl.addEventListener('click',function(){setMenu(false);});
d.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false);});
window.addEventListener('resize',function(){if(window.innerWidth>768)setMenu(false);});}
d.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){
var item=q.parentNode,a=item.querySelector('.faq-a'),open=item.classList.toggle('open');
q.setAttribute('aria-expanded',open?'true':'false');a.style.maxHeight=open?a.scrollHeight+'px':'0px';});});
d.querySelectorAll('.has-drop>button').forEach(function(b){b.addEventListener('click',function(){var m=b.nextElementSibling;m.style.display=(m.style.display==='block')?'':'block';});});
})();
