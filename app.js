// Razvan Editing. Unslop by Damir Sokolovsky (@heydamir), CC BY 4.0.
localStorage.removeItem('razvan_gh_token');

async function sha256(text){
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

/* ═══════════════════════════════════
   DONNÉES PAR DÉFAUT
═══════════════════════════════════ */
const DEF_SHORT = [{"image": "https://raw.githubusercontent.com/razvanediting/vid-o1/main/ssstik.io_%40razvannnmn_1782672262755.mp4", "label": "", "badge": "TikTok", "titre": "Tomodachi Life", "views": "5 k+ vues", "lien": "https://www.tiktok.com/@razvannnmn/video/7635216293880253718", "poster": "assets/short-1.jpg", "duration": "00:33"}, {"image": "https://raw.githubusercontent.com/razvanediting/vid-o1/main/ssstik.io_%40razvannnmn_1782672398041.mp4", "label": "", "badge": "TikTok", "titre": "Valorant", "views": "2 k+ vues", "lien": "https://www.tiktok.com/@razvannnmn/video/7626327650163854594", "poster": "assets/short-2.jpg", "duration": "00:49"}, {"image": "https://raw.githubusercontent.com/razvanediting/vid-o1/main/ssstik.io_%40razvannnmn_1782672804651%20(1).mp4", "label": "", "badge": "TikTok", "titre": "Vidéo Troll", "views": "2 k+ vues", "lien": "https://www.tiktok.com/@razvannnmn/video/7612232110316834070", "poster": "assets/short-3.jpg", "duration": "00:39"}, {"image": "https://raw.githubusercontent.com/razvanediting/vid-o1/main/ssstik.io_%40razvannnmn_1782673017270.mp4", "label": "", "badge": "TikTok", "titre": "Razvan avec Roan", "views": "10 k+ vues", "lien": "https://www.tiktok.com/@razvannnmn/video/7599624101384228118", "poster": "assets/short-4.jpg", "duration": "00:41"}, {"image": "assets/short-5.mp4", "label": "", "badge": "TikTok", "titre": "Razvan Obby", "views": "3 k+ vues", "lien": "https://www.tiktok.com/@razvannnmn/video/7673454060430839072", "poster": "assets/short-5.jpg", "duration": "00:46"}];
const DEF_LONG = [{"image": "https://www.youtube.com/watch?v=sdG8x9jcKOY&t", "label": "", "badge": "YouTube", "titre": "L'entité de M̷̰̌͑̆į̶̯̌͑n̵̥̎̐e̶̞̟̙͂ċ̷̥̰͕͌͒r̶̯͆ã̴̡̻̩̚f̸̮̱̻̊̐t qui veut Voler Ton ÂME !", "views": "1 k+ vues", "lien": "https://www.youtube.com/watch?v=sdG8x9jcKOY&t", "duration": "30:20", "poster": "assets/long-1.jpg"}, {"image": "https://www.youtube.com/watch?v=PCdLGmx03B4&t", "label": "", "badge": "YouTube", "titre": "J’ai POSÉ les PIRES QUESTIONS à VERITY", "views": "10 k+ vues", "lien": "https://www.youtube.com/watch?v=PCdLGmx03B4&t", "duration": "13:42", "poster": "assets/long-2.jpg"}, {"image": "https://www.youtube.com/watch?v=po9ef_FsstE&t", "label": "", "badge": "YouTube", "titre": "Nouvelle vidéo", "views": "35 k+ vues", "lien": "https://www.youtube.com/watch?v=po9ef_FsstE&t", "duration": "15:32", "poster": "assets/long-3.jpg"}, {"image": "https://www.youtube.com/watch?v=plRRBO_Scao", "label": "", "badge": "YouTube", "titre": "Nouvelle vidéo", "views": "30 k+ vues", "lien": "https://www.youtube.com/watch?v=plRRBO_Scao", "duration": "13:48", "poster": "assets/long-4.jpg"}, {"image": "https://www.youtube.com/watch?v=iuHQs71l9rw", "label": "", "badge": "YouTube", "titre": "Je réagis à ma première vidéo Youtube", "views": "30 k+ vues", "lien": "https://www.youtube.com/watch?v=iuHQs71l9rw", "duration": "19:50", "poster": "assets/long-5.jpg"}, {"image": "https://www.youtube.com/watch?v=ffCzHat_KW8", "label": "", "badge": "YouTube", "titre": "", "views": "30 k+ vues", "lien": "https://www.youtube.com/watch?v=ffCzHat_KW8", "duration": "13:29", "poster": "assets/long-6.jpg"}, {"image": "https://www.youtube.com/watch?v=KS8uYyVflVU", "label": "", "badge": "YouTube", "titre": "Nouvelle vidéo", "views": "", "lien": "https://www.youtube.com/watch?v=KS8uYyVflVU", "duration": "14:43", "poster": "assets/long-7.jpg"}, {"image": "https://www.youtube.com/watch?v=z76oC_k-uG0", "label": "", "badge": "YouTube", "titre": "Nouvelle vidéo", "views": "30 k+ vues", "lien": "https://www.youtube.com/watch?v=z76oC_k-uG0", "duration": "25:07", "poster": "assets/long-8.jpg"}];
const DEF_SETTINGS = {"nom": "Razvan Editing", "tag": "Montage vidéo · DaVinci Resolve", "sub": "Je monte tes formats courts et tes vidéos YouTube sur DaVinci Resolve. Découvre mes réalisations et parlons de ton prochain projet.", "email": "razvanediting@gmail.com", "tiktok": "https://www.tiktok.com/@razvannnmn", "insta": "https://www.instagram.com/razvannn_off/", "yt": "https://www.youtube.com/@Razvannnmn", "twitch": "https://www.twitch.tv/razvannnmn", "discord": "https://discord.com/users/753292111834644531", "formspreeId": "mrewkwbe", "aboutTitle": "Le montage, au service de ton contenu", "aboutText": "Je monte mes propres vidéos et je collabore avec d’autres créateurs. Ce portfolio rassemble ces projets : du contenu gaming, des formats courts et des vidéos YouTube.\n\nSur DaVinci Resolve, je travaille le rythme, les transitions, le son et l’étalonnage pour donner une direction à chaque vidéo. Tu as un projet en tête ? Regardons ensemble le format et le montage qui lui correspondent.", "s1n": "100 k+", "s1l": "vues cumulées", "s2n": "10 k+", "s2l": "likes cumulés", "s3n": "2 ans", "s3l": "de montage", "cntTiktok": 9000, "cntYtShort": 0, "cntInsta": 0, "cntYtLong": 0, "clients": "[{\"name\": \"Anakin\", \"avatar\": \"assets/client-1.png\", \"link\": \"https://www.youtube.com/@AnakinWTR/videos\"}]", "pwdHash": "694c618a2564e84d9ad3249fa263ffe515d785728336e382d1754ac5ce4e0a5a", "logo": "assets/logo.jpg"};

function load(k,d){ try{ return JSON.parse(localStorage.getItem(k))||d; }catch(e){return d;} }
function en(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

const ICONS={
  arrow:'<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  external:'<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6m0-6-9 9M10 4H4v16h16v-6"/></svg>',
  play:'<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 10 7-10 7Z"/></svg>'
};
function normalizeUrl(value){
  const url=String(value||'').trim();
  if(url.startsWith('www.'))return 'https://'+url;
  return /^(https?:|data:image\/|assets\/|#)/i.test(url)?url:'';
}
function getPoster(video){
  if(video.poster)return normalizeUrl(video.poster);
  const type=getMediaType(video.image);
  if(type==='youtube')return `https://i.ytimg.com/vi/${getYouTubeId(video.image)}/hqdefault.jpg`;
  if(type==='image')return normalizeUrl(video.image);
  return '';
}
function updateHero(){
  const video=vLong.find(v=>getYouTubeId(v.image)==='iuHQs71l9rw')||vLong[0]||vShort[0];
  const button=document.getElementById('hero-video');
  if(!video){button.hidden=true;return;}
  const title=video.titre&&video.titre!=='Nouvelle vidéo'?video.titre:'Une réalisation de Razvan Editing';
  const poster=document.getElementById('hero-poster');poster.src=getPoster(video);poster.alt=`Miniature : ${title}`;
  document.getElementById('hero-video-title').textContent=title;
  document.getElementById('hero-video-meta').textContent=video.badge==='YouTube'?'Montage long format':'Montage au format court';
  document.getElementById('hero-duration').textContent=video.duration||'';
  button.setAttribute('aria-label',`Lire : ${title}`);button.onclick=()=>openVideo(video,title);
}
let videoOpener=null;
function openVideo(video,title){
  const dialog=document.getElementById('video-dialog'),media=document.getElementById('dialog-media');
  videoOpener=document.activeElement;
  document.getElementById('dialog-title').textContent=title;
  document.getElementById('dialog-meta').textContent=[video.badge,video.duration].filter(Boolean).join(' / ');
  const source=document.getElementById('dialog-source');source.href=normalizeUrl(video.lien)||normalizeUrl(video.image)||'#';source.hidden=source.getAttribute('href')==='#';
  media.replaceChildren();media.classList.remove('portrait');
  const url=normalizeUrl(video.image),type=getMediaType(url);
  if(type==='mp4'){
    const player=document.createElement('video');player.src=url;player.controls=true;player.playsInline=true;player.preload='metadata';
    if(video.poster)player.poster=video.poster;media.append(player);
    player.addEventListener('error',()=>{document.getElementById('dialog-meta').textContent='Lecture indisponible ici. Utilise le lien vers la vidéo originale.';});
    player.play().catch(()=>{});
  }else if(['youtube','tiktok','streamable','gdrive'].includes(type)){
    const frame=document.createElement('iframe');frame.title=title;frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';
    if(type==='youtube')frame.src=`https://www.youtube-nocookie.com/embed/${getYouTubeId(url)}?autoplay=1&rel=0`;
    if(type==='tiktok'){frame.src=`https://www.tiktok.com/player/v1/${getTikTokId(url)}`;media.classList.add('portrait');}
    if(type==='streamable')frame.src=`https://streamable.com/e/${getStreamableId(url)}?autoplay=1`;
    if(type==='gdrive')frame.src=`https://drive.google.com/file/d/${getGDriveId(url)}/preview`;
    media.append(frame);
  }else if(url){const image=document.createElement('img');image.src=url;image.alt=title;media.append(image);}
  dialog.showModal();document.body.classList.add('modal-open');
}
function closeVideo(){document.getElementById('video-dialog').close();}

let vShort = load('razvan_short', DEF_SHORT);
let vLong  = load('razvan_long',  DEF_LONG);
let CFG    = load('razvan_cfg',   DEF_SETTINGS);
let clientsArr = (()=>{ try{ return JSON.parse(CFG.clients||'[]'); }catch(e){ return []; } })();

/* ── Apply settings to page ── */
function applySettings(){
  const text=(id,value)=>{document.getElementById(id).textContent=value||'';};
  text('nav-name',CFG.nom); text('hero-tag',CFG.tag); text('hero-sub',CFG.sub);
  for(let i=1;i<=3;i++){ text(`stat${i}-num`,CFG[`s${i}n`]); text(`stat${i}-lbl`,CFG[`s${i}l`]); }
  text('footer-txt',`© ${new Date().getFullYear()} ${CFG.nom} — Monteur vidéo`);
  text('about-title',CFG.aboutTitle); text('about-text',CFG.aboutText);
  document.getElementById('about').hidden=!(CFG.aboutTitle||CFG.aboutText);
  const logo=document.getElementById('logo-img'), mark=document.getElementById('logo-svg-default');
  logo.style.display=CFG.logo?'block':'none'; mark.style.display=CFG.logo?'none':'block';
  if(CFG.logo)logo.src=CFG.logo;
  let clients=[]; try{clients=JSON.parse(CFG.clients||'[]');}catch{}
  const grid=document.getElementById('clients-grid'); grid.replaceChildren();
  clients.forEach(client=>{
    const card=document.createElement(client.link?'a':'div'); card.className='client-card';
    if(client.link){card.href=normalizeUrl(client.link);card.target='_blank';card.rel='noopener noreferrer';}
    const avatar=document.createElement('div');avatar.className='client-avatar';
    if(client.avatar){const img=document.createElement('img');img.src=client.avatar;img.alt='';img.loading='lazy';img.onerror=()=>{avatar.textContent=(client.name||'?')[0];};avatar.append(img);}
    else avatar.textContent=(client.name||'?')[0];
    const info=document.createElement('div');info.innerHTML=`<div class="client-name">${en(client.name)}</div>${client.role?`<div class="client-role">${en(client.role)}</div>`:''}`;
    card.append(avatar,info); if(client.link)card.insertAdjacentHTML('beforeend',ICONS.external);grid.append(card);
  });
  document.getElementById('clients').hidden=!clients.length;
  const email=document.getElementById('contact-email'); email.href=`mailto:${CFG.email}`;email.innerHTML=en(CFG.email)+ICONS.arrow;
  document.getElementById('discord-dm-wrap').hidden=!CFG.discord;
  document.getElementById('discord-dm-btn').href=normalizeUrl(CFG.discord);
  const socials=document.getElementById('socials');socials.replaceChildren();
  [{k:'tiktok',l:'TikTok'},{k:'insta',l:'Instagram'},{k:'yt',l:'YouTube'},{k:'twitch',l:'Twitch'}].forEach(({k,l})=>{
    if(!CFG[k])return;const a=document.createElement('a');a.className='social-link';a.href=normalizeUrl(CFG[k]);a.target='_blank';a.rel='noopener noreferrer';a.textContent=l;socials.append(a);
  });
  updateHero();
}

/* ── Détection du type de média ── */
function getMediaType(url){
  if(!url) return 'none';
  if(/tiktok\.com\/@[^/]+\/video\/(\d+)/i.test(url)) return 'tiktok';
  if(/youtu\.be\/|youtube\.com\/(watch\?v=|shorts\/|embed\/)/i.test(url)) return 'youtube';
  if(/streamable\.com\/([a-z0-9]+)/i.test(url)) return 'streamable';
  if(/drive\.google\.com\/file\/d\//i.test(url)) return 'gdrive';
  if(/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url)) return 'mp4';
  return 'image';
}

function getStreamableId(url){
  const m = url.match(/streamable\.com\/([a-z0-9]+)/i);
  return m ? m[1] : null;
}

function getTikTokId(url){
  const m = url.match(/tiktok\.com\/@[^/]+\/video\/(\d+)/i);
  return m ? m[1] : null;
}

function getYouTubeId(url){
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function getGDriveId(url){
  const m = url.match(/drive\.google\.com\/file\/d\/([^/]+)/i);
  return m ? m[1] : null;
}

/* HTML pour la grille (plein la card) */
/* HTML pour l'aperçu admin (miniature) */
function getPreviewHTML(raw){
  const url=normalizeUrl(raw),type=getMediaType(url);
  const video=[...vShort,...vLong].find(v=>v.image===raw);
  const poster=video?getPoster(video):type==='youtube'?`https://i.ytimg.com/vi/${getYouTubeId(url)}/hqdefault.jpg`:'';
  if(type==='mp4')return `<video src="${en(url)}" ${poster?`poster="${en(poster)}"`:''} controls muted playsinline preload="none" style="width:100%;max-height:300px;object-fit:contain"></video>`;
  if(poster||type==='image')return `<img src="${en(poster||url)}" alt="Aperçu du média" loading="lazy" style="width:100%">`;
  if(type==='streamable')return `<iframe src="https://streamable.com/e/${getStreamableId(url)}" title="Aperçu Streamable" loading="lazy" allowfullscreen></iframe>`;
  if(type==='gdrive')return `<iframe src="https://drive.google.com/file/d/${getGDriveId(url)}/preview" title="Aperçu Google Drive" loading="lazy" allowfullscreen></iframe>`;
  if(type==='tiktok')return `<iframe src="https://www.tiktok.com/player/v1/${getTikTokId(url)}" title="Aperçu TikTok" loading="lazy" allowfullscreen></iframe>`;
  return '';
}

/* ── Build grids ── */
function buildGrid(videos,containerId,cardClass){
  const grid=document.getElementById(containerId);grid.replaceChildren();
  const isShort=containerId==='grid-short';
  document.getElementById(isShort?'short-count':'long-count').textContent=String(videos.length).padStart(2,'0');
  if(!videos.length){grid.innerHTML='<p class="empty-state">De nouvelles réalisations seront ajoutées ici.</p>';return;}
  videos.forEach((video,index)=>{
    const wrap=document.createElement('article');wrap.className='card-wrap';
    const title=video.titre&&video.titre!=='Nouvelle vidéo'?video.titre:`${isShort?'Format court':'Vidéo YouTube'} ${index+1}`;
    const poster=getPoster(video);
    const button=document.createElement('button');button.type='button';button.className=`card ${cardClass}`;button.setAttribute('aria-label',`Lire : ${title}`);
    button.innerHTML=`${poster?`<img src="${en(poster)}" alt="" loading="lazy" width="${isShort?540:1280}" height="${isShort?960:720}">`:''}<span class="play-circle">${ICONS.play}</span>${video.duration?`<span class="duration-badge mono">${en(video.duration)}</span>`:''}`;
    button.addEventListener('click',()=>openVideo(video,title));
    const info=document.createElement('div');info.innerHTML=`<div class="card-info"><h4 class="card-title">${en(title)}</h4><span class="card-number mono">${String(index+1).padStart(2,'0')}</span></div><div class="card-meta"><span>${en(video.badge|| (isShort?'Format court':'YouTube'))}</span>${video.views?`<span aria-hidden="true">·</span><span>${en(video.views)}</span>`:''}</div>${video.desc?`<p class="card-desc">${en(video.desc)}</p>`:''}`;
    wrap.append(button,info);
    const source=normalizeUrl(video.lien);
    if(source&&source!=='#'){const a=document.createElement('a');a.className='card-source';a.href=source;a.target='_blank';a.rel='noopener noreferrer';a.innerHTML='Voir l’original '+ICONS.external;a.setAttribute('aria-label',`Voir l’original : ${title}`);wrap.append(a);}
    grid.append(wrap);
  });
}
/* ── Chargement des données publiées sur GitHub (data.json) ──
   Au chargement, on essaie d'abord data.json (la version publiée sur GitHub,
   celle que TOUT LE MONDE voit). Si ça échoue (pas encore publié, ouverture
   en local, etc.), on garde ce qui était déjà chargé depuis localStorage/défauts. */
async function initData(){
  // Migration : ancien mot de passe stocké uniquement dans CE navigateur
  // (versions précédentes du site) -> on le fait remonter dans CFG.pwdHash
  // pour qu'il soit publié et donc valable partout, pas juste ici.
  if(!CFG.pwdHash){
    const oldHash = localStorage.getItem('razvan_pwd_hash');
    const oldPlain = localStorage.getItem('razvan_pwd');
    if(oldHash) CFG.pwdHash = oldHash;
    else if(oldPlain) CFG.pwdHash = await sha256(oldPlain);
    if(CFG.pwdHash){
      localStorage.setItem('razvan_cfg', JSON.stringify(CFG));
      localStorage.removeItem('razvan_pwd_hash');
      localStorage.removeItem('razvan_pwd');
    }
  }
  try{
    const res = await fetch('data.json?v=' + Date.now());
    if(res.ok){
      const d = await res.json();
      // On garde CFG (local, pas encore publié) comme base par-dessus les défauts,
      // et seuls les champs présents dans data.json (déjà publiés) viennent l'écraser.
      if(d.settings) CFG = Object.assign({}, DEF_SETTINGS, CFG, d.settings);
      if(Array.isArray(d.short)) vShort = d.short;
      if(Array.isArray(d.long))  vLong  = d.long;
    }
  }catch(e){ /* pas grave, on reste sur localStorage/défauts */ }
  applySettings();
  buildGrid(vShort,'grid-short','card-tiktok');
  buildGrid(vLong,'grid-long','card-long');
}
const dataReadyPromise = initData();

/* Accessible navigation, tabs and viewing. No video is loaded until requested. */
const menuToggle=document.getElementById('menu-toggle');
function closeMenu(){document.getElementById('nav-links').classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));document.getElementById('nav-links').classList.toggle('open',open);});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuToggle.getAttribute('aria-expanded')==='true'){closeMenu();menuToggle.focus();}});
function selectTab(tab,focus=false){
  document.querySelectorAll('.tab-btn').forEach(button=>{
    const selected=button.dataset.tab===tab;button.classList.toggle('active',selected);button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1;
    if(selected&&focus)button.focus();
  });
  document.querySelectorAll('.tab-panel').forEach(panel=>{const selected=panel.id==='panel-'+tab;panel.hidden=!selected;panel.classList.toggle('active',selected);});
}
const tabs=Array.from(document.querySelectorAll('.tab-btn'));
tabs.forEach((button,index)=>{
  button.addEventListener('click',()=>selectTab(button.dataset.tab));
  button.addEventListener('keydown',e=>{
    let next;if(e.key==='ArrowRight')next=(index+1)%tabs.length;if(e.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;
    if(next!==undefined){e.preventDefault();selectTab(tabs[next].dataset.tab,true);}
  });
});
document.querySelectorAll('.faq-q').forEach(button=>button.addEventListener('click',()=>{
  const open=button.getAttribute('aria-expanded')!=='true';
  document.querySelectorAll('.faq-q').forEach(q=>{const expanded=q===button&&open;q.setAttribute('aria-expanded',String(expanded));q.querySelector('.faq-arrow').textContent=expanded?'−':'+';document.getElementById(q.getAttribute('aria-controls')).hidden=!expanded;});
}));
const videoDialog=document.getElementById('video-dialog');
document.getElementById('dialog-close').addEventListener('click',closeVideo);
videoDialog.addEventListener('click',e=>{if(e.target===videoDialog){const b=videoDialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)closeVideo();}});
videoDialog.addEventListener('close',()=>{const media=document.getElementById('dialog-media');media.querySelectorAll('video').forEach(v=>v.pause());media.replaceChildren();document.body.classList.remove('modal-open');videoOpener?.focus();});
document.getElementById('dialog-contact').addEventListener('click',closeVideo);

/* Contact: native validation; an error preserves the visitor's message. */
const contactForm=document.getElementById('contact-form');
contactForm.addEventListener('submit',async event=>{
  event.preventDefault();
  if(!contactForm.reportValidity())return;
  const nom=document.getElementById('cf-nom').value.trim(),email=document.getElementById('cf-email').value.trim(),message=document.getElementById('cf-msg').value.trim();
  const status=document.getElementById('form-status'),button=document.getElementById('cf-btn');
  status.classList.remove('error');
  if(!nom||!message){status.textContent='Ajoute ton prénom et une description de ton projet.';status.classList.add('error');return;}
  const formId=String(CFG.formspreeId||'').trim().match(/([a-zA-Z0-9]+)$/)?.[1];
  if(!formId){
    location.href=`mailto:${CFG.email}?subject=${encodeURIComponent('Projet vidéo de '+nom)}&body=${encodeURIComponent(`Prénom : ${nom}\nEmail : ${email}\n\n${message}`)}`;
    status.textContent='Ton application email va s’ouvrir. Envoie le message depuis celle-ci pour me contacter.';return;
  }
  const old=button.innerHTML;button.disabled=true;button.textContent='Envoi en cours';status.textContent='Ton message est en cours d’envoi.';
  try{
    const response=await fetch(`https://formspree.io/f/${formId}`,{method:'POST',headers:{Accept:'application/json'},body:new URLSearchParams({name:nom,email,message,_subject:`Projet vidéo de ${nom}`}),signal:AbortSignal.timeout(15000)});
    if(!response.ok)throw new Error('Envoi indisponible');
    showContactSuccess();
  }catch{
    status.classList.add('error');status.textContent=`L’envoi n’a pas abouti. Ton message est conservé. Réessaie ou écris à ${CFG.email}.`;
  }finally{button.disabled=false;button.innerHTML=old;}
});
function showContactSuccess(){
  contactForm.hidden=true;const box=document.getElementById('contact-success');box.hidden=false;box.tabIndex=-1;
  box.innerHTML='<h3>Merci pour ton message</h3><p>Ton projet a bien été envoyé. Je te réponds par email sous 24 h.</p><button class="button button-secondary" id="contact-reset" type="button">Envoyer un autre projet</button>';
  box.focus();document.getElementById('contact-reset').addEventListener('click',()=>{box.hidden=true;contactForm.hidden=false;contactForm.reset();document.getElementById('form-status').textContent='';document.getElementById('cf-nom').focus();});
}

function showToast(msg){
  const t=document.getElementById('toast'); t.textContent=msg;
  t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2800);
}

let _k='',_urlp=new URLSearchParams(location.search).has('razvan');
document.addEventListener('keydown',e=>{
  if(_k==='x'||document.getElementById('admin-overlay')?.classList.contains('open')) return;
  _k+=e.key.toLowerCase();
  if(_k.length>6)_k=_k.slice(-6);
  if(_k.includes('razvan')&&_urlp){_k='x';openAdmin();}
});

function openAdmin(){ document.getElementById('admin-overlay').classList.add('open'); document.body.style.overflow='hidden'; }
function closeAdmin(){ document.getElementById('admin-overlay').classList.remove('open'); document.body.style.overflow=''; }

document.getElementById('admin-close-btn').addEventListener('click',closeAdmin);

/* Login */
document.getElementById('login-btn').addEventListener('click',tryLogin);
document.getElementById('admin-pwd').addEventListener('keydown',e=>{ if(e.key==='Enter') tryLogin(); });
async function tryLogin(){
  await dataReadyPromise; // s'assure que CFG.pwdHash (publié sur GitHub) est bien chargé avant de comparer
  const entered = document.getElementById('admin-pwd').value;
  const enteredHash = await sha256(entered);
  if(enteredHash===CFG.pwdHash){
    document.getElementById('admin-login').style.display='none';
    document.getElementById('admin-panel').style.display='block';
    loadAdminSettings(); buildAdminList('short'); buildAdminList('long');
  } else {
    document.getElementById('login-error').style.display='block';
    document.getElementById('admin-pwd').value='';
  }
}

/* Admin sub-tabs */
document.querySelectorAll('.admin-tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.admin-tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.admin-sub').forEach(s=>s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('asub-'+btn.dataset.atab).classList.add('active');
  });
});

/* ── Load settings into admin fields ── */
function loadAdminSettings(){
  document.getElementById('cfg-nom').value=CFG.nom||'';
  document.getElementById('cfg-tag').value=CFG.tag||'';
  document.getElementById('cfg-sub').value=CFG.sub||'';
  document.getElementById('cfg-email').value=CFG.email||'';
  document.getElementById('cfg-tiktok').value=CFG.tiktok||'';
  document.getElementById('cfg-insta').value=CFG.insta||'';
  document.getElementById('cfg-yt').value=CFG.yt||'';
  document.getElementById('cfg-twitch').value=CFG.twitch||'';
  document.getElementById('cfg-discord').value=CFG.discord||'';
  // Nettoie l'ID Formspree si une URL complète a été sauvegardée
  let cleanFormId = CFG.formspreeId||'';
  const cleanMatch = cleanFormId.match(/([a-zA-Z0-9]+)$/);
  if(cleanMatch) cleanFormId = cleanMatch[1];
  document.getElementById('cfg-formspree').value=cleanFormId;
  document.getElementById('cfg-about-title').value=CFG.aboutTitle||'';
  document.getElementById('cfg-about-text').value=CFG.aboutText||'';
  document.getElementById('s1-num').value=CFG.s1n||'';
  document.getElementById('s1-lbl').value=CFG.s1l||'';
  document.getElementById('s2-num').value=CFG.s2n||'';
  document.getElementById('s2-lbl').value=CFG.s2l||'';
  document.getElementById('s3-num').value=CFG.s3n||'';
  document.getElementById('s3-lbl').value=CFG.s3l||'';
  clientsArr = (()=>{ try{ return JSON.parse(CFG.clients||'[]'); }catch(e){ return []; } })();
  buildClientsAdminList();
  // logo preview
  const prev=document.getElementById('logo-admin-preview');
  if(CFG.logo){ prev.src=CFG.logo; prev.style.display='block'; }
  else prev.style.display='none';
  // token GitHub (gardé seulement dans cet onglet)
  document.getElementById('gh-token').value = sessionStorage.getItem('razvan_gh_token') || '';
}

/* ── Logo upload ── */
document.getElementById('logo-file-input').addEventListener('change',e=>{
  const file=e.target.files[0]; if(!file) return;
  const reader=new FileReader();
  reader.onload=ev=>{
    CFG.logo=ev.target.result;
    const prev=document.getElementById('logo-admin-preview');
    prev.src=CFG.logo; prev.style.display='block';
    // apply live
    document.getElementById('logo-img').src=CFG.logo;
    document.getElementById('logo-img').style.display='block';
    document.getElementById('logo-svg-default').style.display='none';
  };
  reader.readAsDataURL(file);
});
document.getElementById('remove-logo-btn').addEventListener('click',()=>{
  CFG.logo='';
  document.getElementById('logo-admin-preview').style.display='none';
  document.getElementById('logo-img').style.display='none';
  document.getElementById('logo-svg-default').style.display='block';
  document.getElementById('logo-file-input').value='';
});

/* ── Save settings ── */
document.getElementById('save-settings-btn').addEventListener('click', async ()=>{
  CFG.nom=document.getElementById('cfg-nom').value||CFG.nom;
  CFG.tag=document.getElementById('cfg-tag').value||CFG.tag;
  CFG.sub=document.getElementById('cfg-sub').value||CFG.sub;
  CFG.email=document.getElementById('cfg-email').value||CFG.email;
  CFG.tiktok=document.getElementById('cfg-tiktok').value;
  CFG.insta=document.getElementById('cfg-insta').value;
  CFG.yt=document.getElementById('cfg-yt').value;
  CFG.twitch=document.getElementById('cfg-twitch').value;
  CFG.discord=document.getElementById('cfg-discord').value;
  // Nettoie l'ID Formspree (accepte URL complète ou juste l'ID)
  let rawFormId = document.getElementById('cfg-formspree').value.trim();
  const saveMatch = rawFormId.match(/([a-zA-Z0-9]+)$/);
  CFG.formspreeId = saveMatch ? saveMatch[1] : rawFormId;
  CFG.aboutTitle=document.getElementById('cfg-about-title').value;
  CFG.aboutText=document.getElementById('cfg-about-text').value;
  CFG.s1n=document.getElementById('s1-num').value||CFG.s1n;
  CFG.s1l=document.getElementById('s1-lbl').value||CFG.s1l;
  CFG.s2n=document.getElementById('s2-num').value||CFG.s2n;
  CFG.s2l=document.getElementById('s2-lbl').value||CFG.s2l;
  CFG.s3n=document.getElementById('s3-num').value||CFG.s3n;
  CFG.s3l=document.getElementById('s3-lbl').value||CFG.s3l;
  CFG.clients=JSON.stringify(clientsArr);
  // password change — on ne stocke jamais le mot de passe en clair, seulement son empreinte,
  // et elle vit dans CFG.pwdHash : elle sera donc publiée sur GitHub avec le reste,
  // valable partout, et ne se "réinitialise" plus en changeant de navigateur.
  const p1=document.getElementById('new-pwd1').value;
  const p2=document.getElementById('new-pwd2').value;
  const pm=document.getElementById('pwd-msg');
  if(p1||p2){
    if(p1===p2&&p1.length>=4){
      CFG.pwdHash = await sha256(p1);
      pm.style.color='#4ade80'; pm.textContent='Mot de passe changé  — clique "Publier sur GitHub" pour qu\'il soit valable partout.';
    }
    else{ pm.style.color='#f87171'; pm.textContent=p1!==p2?'Les mots de passe ne correspondent pas.':'Minimum 4 caractères.'; }
    document.getElementById('new-pwd1').value=''; document.getElementById('new-pwd2').value='';
  } else pm.textContent='';
  localStorage.setItem('razvan_cfg',JSON.stringify(CFG));
  applySettings();
  showToast('Paramètres sauvegardés ');
});

/* ── Publier directement sur GitHub (écrit data.json dans le repo) ──
   Nécessite un token GitHub (fine-grained, permission "Contents: Read and write"
   sur le repo RazvanEditing uniquement). Le token n'est JAMAIS écrit dans le
   code du site : il reste seulement dans le sessionStorage de CET onglet. */
const GH_OWNER='razvanediting', GH_REPO='RazvanEditing', GH_BRANCH='main', GH_PATH='data.json';

async function publishToGitHub(){
  const tokenInput = document.getElementById('gh-token');
  const msg = document.getElementById('publish-msg');
  const btn = document.getElementById('publish-btn');
  const token = tokenInput.value.trim();

  if(!token){ msg.style.color='#f87171'; msg.textContent='Colle ton token GitHub d’abord ⤴'; return; }
  sessionStorage.setItem('razvan_gh_token', token); // pratique : reste dans cet onglet seulement

  btn.disabled = true; const oldTxt = btn.textContent; btn.textContent = ' Publication...';
  msg.style.color = 'var(--gray)'; msg.textContent = 'Connexion à GitHub...';

  try{
    const payload = JSON.stringify({ settings: CFG, short: vShort, long: vLong }, null, 2);
    const contentB64 = btoa(unescape(encodeURIComponent(payload)));

    // 1) Récupérer le sha actuel de data.json (s'il existe déjà)
    let sha = null;
    const getRes = await fetch(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${GH_PATH}?ref=${GH_BRANCH}`,{
      headers:{ Authorization:`Bearer ${token}`, Accept:'application/vnd.github+json' }
    });
    if(getRes.ok){ sha = (await getRes.json()).sha; }
    else if(getRes.status!==404){ throw new Error('Lecture impossible (code '+getRes.status+'). Vérifie le token/les droits.'); }

    // 2) Écrire/créer le fichier directement dans le repo
    const putRes = await fetch(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${GH_PATH}`,{
      method:'PUT',
      headers:{ Authorization:`Bearer ${token}`, Accept:'application/vnd.github+json', 'Content-Type':'application/json' },
      body: JSON.stringify({
        message: 'Mise à jour du contenu via le panel admin',
        content: contentB64,
        branch: GH_BRANCH,
        ...(sha?{sha}:{})
      })
    });
    if(!putRes.ok){
      const err = await putRes.json().catch(()=>({}));
      throw new Error(err.message || ('Erreur GitHub (code '+putRes.status+')'));
    }

    msg.style.color = '#4ade80';
    msg.textContent = ' Publié ! Le site sera à jour dans 30-60 secondes (recharge la page après).';
    showToast(' Publié sur GitHub ');
  }catch(err){
    msg.style.color = '#f87171';
    msg.textContent = ' ' + err.message;
  }finally{
    btn.disabled = false; btn.textContent = oldTxt;
  }
}
document.getElementById('publish-btn').addEventListener('click', publishToGitHub);

/* ── Build admin video list ── */
function buildAdminList(type){
  const videos = type==='short' ? vShort : vLong;
  const list = document.getElementById('vlist-'+type);
  list.innerHTML='';
  const hasLong = type==='long';
  videos.forEach((v,i)=>{
    const div=document.createElement('div'); div.className='video-item';
    div.innerHTML=`
      <div class="video-item-header">
        <span class="video-item-num">Vidéo ${i+1}</span>
        <button class="video-item-del" data-idx="${i}" data-type="${type}">Supprimer</button>
      </div>
      <div class="field-grid">
        <div class="field-full">
          <div class="field-label">URL de la vidéo ou image</div>
          <div style="display:flex;gap:8px;align-items:center;margin-bottom:10px">
            <input class="field-input img-url-input" data-f="image" data-idx="${i}" data-type="${type}" value="${en(v.image||'')}" placeholder="URL ou importe une image" style="flex:1"/>
            <input type="file" id="file-${type}-${i}" accept="image/*" data-idx="${i}" data-type="${type}" style="width:140px;padding:8px;font-size:12px;color:var(--gray);background:rgba(255,255,255,.05);border:1.5px solid rgba(96,165,250,.2);border-radius:8px;cursor:pointer"/>
          </div>
          <div class="media-preview" id="preview-${type}-${i}" style="margin-top:8px;border-radius:10px;overflow:hidden;background:rgba(0,0,0,.3);border:1px solid rgba(96,165,250,.15);display:${v.image?'block':'none'};max-width:260px">
            ${v.image ? getPreviewHTML(v.image) : ''}
          </div>
          <div id="preview-type-${type}-${i}" style="margin-top:6px;font-size:11px;color:var(--light);display:${v.image?'block':'none'}">
            ${v.image ? ({tiktok:' TikTok détecté',youtube:'YouTube détecté',streamable:' Streamable détecté',gdrive:' Google Drive détecté',mp4:' Vidéo MP4 détectée',image:' Image détectée',none:''}[getMediaType(v.image)]||'') : ''}
          </div>
        </div>
        <div><div class="field-label">Texte sur la vidéo</div><input class="field-input" data-f="label" data-idx="${i}" data-type="${type}" value="${en(v.label||'')}" placeholder="Ex: mis partout"/></div>
        <div><div class="field-label">Badge</div><input class="field-input" data-f="badge" data-idx="${i}" data-type="${type}" value="${en(v.badge||'')}" placeholder="TikTok / YouTube..."/></div>
        <div><div class="field-label">Titre</div><input class="field-input" data-f="titre" data-idx="${i}" data-type="${type}" value="${en(v.titre||'')}" placeholder="Nom du projet"/></div>
        <div><div class="field-label">Vues</div><input class="field-input" data-f="views" data-idx="${i}" data-type="${type}" value="${en(v.views||'')}" placeholder="Ex: 1,2M vues"/></div>
        ${hasLong?`<div><div class="field-label">Durée</div><input class="field-input" data-f="duration" data-idx="${i}" data-type="${type}" value="${en(v.duration||'')}" placeholder="Ex: 18:32"/></div>`:''}
        <div class="field-full"><div class="field-label">Lien vidéo</div><input class="field-input" data-f="lien" data-idx="${i}" data-type="${type}" value="${en(v.lien||'#')}" placeholder="https://youtube.com/..."/></div>
      </div>`;
    list.appendChild(div);
  });
  list.querySelectorAll('.field-input').forEach(inp=>{
    inp.addEventListener('input',e=>{
      const idx=+e.target.dataset.idx, f=e.target.dataset.f, t=e.target.dataset.type;
      (t==='short'?vShort:vLong)[idx][f]=e.target.value;
    });
  });
  list.querySelectorAll('.img-url-input').forEach(inp=>{
    inp.addEventListener('input',e=>{
      const idx=+e.target.dataset.idx, t=e.target.dataset.type;
      const url = e.target.value.trim();
      (t==='short'?vShort:vLong)[idx].image = url;
      delete (t==='short'?vShort:vLong)[idx].poster;
      const previewBox = document.getElementById(`preview-${t}-${idx}`);
      const typeLabel  = document.getElementById(`preview-type-${t}-${idx}`);
      if(!previewBox) return;
      if(!url){
        previewBox.style.display='none'; previewBox.innerHTML='';
        if(typeLabel){ typeLabel.style.display='none'; typeLabel.textContent=''; }
        return;
      }
      const type = getMediaType(url);
      const labels = {tiktok:' TikTok détecté',youtube:'YouTube détecté',streamable:' Streamable détecté',gdrive:' Google Drive détecté',mp4:' Vidéo MP4 détectée',image:' Image détectée',none:''};
      previewBox.style.display='block';
      previewBox.innerHTML = getPreviewHTML(url);
      if(typeLabel){ typeLabel.style.display='block'; typeLabel.textContent = labels[type]||''; }
    });
  });
  list.querySelectorAll('.video-item-del').forEach(btn=>{
    btn.addEventListener('click',e=>{
      const idx=+e.target.dataset.idx, t=e.target.dataset.type;
      if(confirm('Supprimer ?')){ (t==='short'?vShort:vLong).splice(idx,1); buildAdminList(t); }
    });
  });
  list.querySelectorAll('input[type="file"][accept="image/*"]').forEach(inp=>{
    inp.addEventListener('change',e=>{
      const file=e.target.files[0];if(!file)return;
      const idx=+e.target.dataset.idx,t=e.target.dataset.type;
      const r=new FileReader();
      r.onload=ev=>{
        const dataUrl=ev.target.result;
        (t==='short'?vShort:vLong)[idx].image=dataUrl;
        delete (t==='short'?vShort:vLong)[idx].poster;
        const urlInput=document.querySelector(`.img-url-input[data-idx="${idx}"][data-type="${t}"]`);
        if(urlInput)urlInput.value='';
        buildAdminList(t);
        showToast('Image importée ! Clique "Sauvegarder" pour garder.');
      };
      r.readAsDataURL(file);
    });
  });
}

/* ── Build admin clients list ── */
function buildClientsAdminList(){
  const list = document.getElementById('clients-admin-list');
  if(!list) return;
  list.innerHTML='';
  clientsArr.forEach((c,i)=>{
    const div=document.createElement('div'); div.className='client-admin-item';
    div.innerHTML=`
      <div class="client-admin-avatar">${c.avatar?`<img src="${c.avatar}" alt=""/>`:en((c.name||'?')[0].toUpperCase())}</div>
      <div class="client-admin-fields">
        <input class="field-input" data-idx="${i}" data-f="name" value="${en(c.name||'')}" placeholder="Pseudo du client"/>
        <input class="field-input" data-idx="${i}" data-f="link" value="${en(c.link||'')}" placeholder="Lien YouTube/TikTok (optionnel)"/>
        <div class="client-admin-actions">
          <label class="upload-btn-label" for="client-file-${i}" style="font-size:12px;padding:7px 14px"> Choisir une image</label>
          <input type="file" id="client-file-${i}" accept="image/*" data-idx="${i}" class="client-file-input"/>
          <button class="video-item-del client-del-btn" data-idx="${i}">Supprimer</button>
        </div>
      </div>`;
    list.appendChild(div);
  });
  list.querySelectorAll('.client-admin-fields > .field-input').forEach(inp=>{
    inp.addEventListener('input',e=>{
      const idx=+e.target.dataset.idx, f=e.target.dataset.f;
      clientsArr[idx][f] = e.target.value;
      const avatarBox = list.children[idx]?.querySelector('.client-admin-avatar');
      if(avatarBox && f==='name' && !clientsArr[idx].avatar) avatarBox.textContent = (e.target.value||'?')[0].toUpperCase();
    });
  });
  list.querySelectorAll('.client-file-input').forEach(inp=>{
    inp.addEventListener('change',e=>{
      const file=e.target.files[0]; if(!file) return;
      const idx=+e.target.dataset.idx;
      const reader=new FileReader();
      reader.onload=ev=>{
        clientsArr[idx].avatar = ev.target.result;
        buildClientsAdminList();
        showToast('Photo importée ! Clique "Sauvegarder les paramètres" pour garder.');
      };
      reader.readAsDataURL(file);
    });
  });
  list.querySelectorAll('.client-del-btn').forEach(btn=>{
    btn.addEventListener('click',e=>{
      const idx=+e.target.dataset.idx;
      if(confirm('Supprimer ce client ?')){ clientsArr.splice(idx,1); buildClientsAdminList(); }
    });
  });
}
document.getElementById('add-client-btn').addEventListener('click',()=>{
  clientsArr.push({name:'',avatar:'',link:''});
  buildClientsAdminList();
  document.getElementById('clients-admin-list').lastElementChild?.scrollIntoView({behavior:'smooth'});
});

/* ── Add video buttons ── */
document.querySelectorAll('.add-vid-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const type=btn.dataset.type;
    const arr=type==='short'?vShort:vLong;
    arr.push({image:"",label:"",badge:type==='short'?"TikTok":"YouTube",titre:"Nouvelle vidéo",views:"",lien:"#",duration:type==='long'?"0:00":undefined});
    buildAdminList(type);
    document.getElementById('vlist-'+type).lastElementChild?.scrollIntoView({behavior:'smooth'});
  });
});

/* ── Save video buttons ── */
document.querySelectorAll('.save-btn[data-savetype]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const type=btn.dataset.savetype;
    localStorage.setItem('razvan_'+type, JSON.stringify(type==='short'?vShort:vLong));
    buildGrid(type==='short'?vShort:vLong, 'grid-'+type, type==='short'?'card-tiktok':'card-long');
    updateHero();
    showToast('Vidéos sauvegardées ');
  });
});

/* ── Logout ── */
document.getElementById('logout-btn').addEventListener('click',()=>{
  document.getElementById('admin-login').style.display='flex';
  document.getElementById('admin-panel').style.display='none';
  document.getElementById('admin-pwd').value='';
  document.getElementById('login-error').style.display='none';
  closeAdmin();
});
