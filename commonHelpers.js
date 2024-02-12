import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function c(o){const s=document.querySelector(".cards");s.innerHTML="",o.forEach(t=>{const n=`<li class="card"> 
                <a class="card-link" href="${t.largeImageURL}">
                    <img class="card-img" src="${t.webformatURL}" alt="${t.tags}" />
                </a>
                <div class="card-data">
                    <div class="data-wrap">
                        <p>Likes: </p>
                        <span>${t.likes}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Views: </p>
                        <span>${t.views}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Comments: </p>
                        <span>${t.comments}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Downloads: </p>
                        <span>${t.downloads}</span>
                    </div>
                </div>
             </li>`;s.innerHTML+=n})}const l=document.querySelector(".form");function d(o){const s="https://pixabay.com",t="/api/",n={key:"42328453-99f2c5c34c77a0496905bbef3",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"},e=new URLSearchParams(n),r=s+t+"?"+e;return fetch(r,n).then(i=>{if(!i.ok)throw new Error("Server responded with error");return i.json()})}l.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.search.value;if(s===""){a.show({title:"Error",message:"Please enter a search query!",position:"bottomRight"});return}d(s).then(t=>{t.hits.length===0?a.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}):c(t.hits)}).catch(t=>{console.log(t)})});
//# sourceMappingURL=commonHelpers.js.map
