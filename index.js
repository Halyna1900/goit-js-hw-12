import{a as y,S as v,i}from"./assets/vendor-B6jJ9_I0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function f(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=f(t);fetch(t.href,r)}})();const u=s=>s.map(e=>`
            <li class="gallery-card">
              <a class="gallery-link" href="${e.largeImageURL}">
                <img
                  class="gallery-img"
                  src="${e.webformatURL}"
                  alt="${e.tags}"
                  loading="lazy"
                />
                <div class="info">
    <div class="info-list">
      <span class="info-item">Likes</span>
      <span class="info-item-value">${e.likes}</span>
    </div>
    <div class="info-list">
      <span class="info-item">Views</span>
      <span class="info-item-value">${e.views}</span>
    </div>
    <div class="info-list">
      <span class="info-item">Comments</span>
      <span class="info-item-value">${e.comments}</span>
    </div>
    <div class="info-list">
      <span class="info-item">Downloads</span>
      <span class="info-item-value">${e.downloads}</span>
    </div>
  </div>
              </a>
            </li>`).join(""),p=async(s,e)=>{const f={key:"48402160-f594e3af2ab1a291d25f94918",q:s,image_type:"horizontal",safesearch:!0,page:e,per_page:15},a=await y.get("https://pixabay.com/api/",{params:f});if(a.status!==200)throw new Error(a.status);return a.data},L=document.querySelector(".search-form"),w=document.querySelector(".search-input");document.querySelector(".search-btn");const l=document.querySelector(".gallery"),d=document.querySelector(".load-more"),o=document.querySelector(".loader");let n=1,c="",h=new v(".gallery a",{captionsData:"alt",captionDelay:250,captions:!0});L.addEventListener("submit",async s=>{if(s.preventDefault(),c=w.value.trim(),!c){i.warning({message:"Please enter a search term.",position:"topRight"});return}l.innerHTML="",d.classList.add("is-hidden"),n=1,o.classList.add("active");try{const e=await p(c,n);if(o.classList.remove("active"),e.total===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}l.insertAdjacentHTML("beforeend",u(e.hits)),h.refresh(),e.totalHits>15&&d.classList.remove("is-hidden"),g()}catch(e){o.classList.remove("active"),i.error({message:"Something went wrong, please try again later.",position:"topRight"}),console.error("Error fetching data:",e)}});d.addEventListener("click",async()=>{n+=1,o.classList.add("active");try{const s=await p(c,n);o.classList.remove("active"),s.hits.length>0&&(l.insertAdjacentHTML("beforeend",u(s.hits)),h.refresh(),g()),n*15>=s.totalHits&&(d.classList.add("is-hidden"),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){o.classList.remove("active"),i.error({message:"Something went wrong, please try again later.",position:"topRight"}),console.error("Error fetching data:",s)}});const g=()=>{const{height:s}=l.firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})};
//# sourceMappingURL=index.js.map
