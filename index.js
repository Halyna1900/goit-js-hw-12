import{S as l,i as n}from"./assets/vendor-B07T6_gy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const f=o=>o.map(e=>`
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
            </li>`).join(""),u="48402160-f594e3af2ab1a291d25f94918",d=o=>{const e=new URLSearchParams({key:u,q:o,image_type:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${e}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},m=document.querySelector(".search-form"),p=document.querySelector(".search-input");document.querySelector(".search-btn");const c=document.querySelector(".gallery");document.querySelector(".loader");let h=new l(".gallery a",{captionsData:"alt",captionDelay:250,captions:!0});m.addEventListener("submit",o=>{const e=document.querySelector(".loader");o.preventDefault();const r=p.value.trim();if(!r){n.warning({message:"Please enter a search term.",position:"topRight"});return}c.innerHTML="",e.classList.add("active"),d(r).then(a=>{if(e.classList.remove("active"),a.total===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c.insertAdjacentHTML("beforeend",f(a.hits)),h.refresh()}).catch(a=>{e.classList.remove("active"),n.error({message:"Something went wrong, please try again later.",position:"topRight"}),console.error("Error fetching data:",a)})});
//# sourceMappingURL=index.js.map
