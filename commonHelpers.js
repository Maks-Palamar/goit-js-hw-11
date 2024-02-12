import{i as n,S as c}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function l(a){const s=document.querySelector(".cards");s.innerHTML="",a.forEach(e=>{const o=`<li class="card"> 
                <a class="card-link" href="${e.largeImageURL}">
                    <img class="card-img" src="${e.webformatURL}" alt="${e.tags}" data-source="${e.largeImageURL}" />
                </a>
                <div class="card-data">
                    <div class="data-wrap">
                        <p>Likes: </p>
                        <span>${e.likes}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Views: </p>
                        <span>${e.views}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Comments: </p>
                        <span>${e.comments}</span>
                    </div>
                    <div class="data-wrap">
                        <p>Downloads: </p>
                        <span>${e.downloads}</span>
                    </div>
                </div>
             </li>`;s.innerHTML+=o})}const p=document.querySelector(".form");function d(a){const s="https://pixabay.com",e="/api/",o={key:"42328453-99f2c5c34c77a0496905bbef3",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"},t=new URLSearchParams(o),r=s+e+"?"+t;return fetch(r,o).then(i=>{if(!i.ok)throw new Error("Server responded with error");return i.json()})}p.addEventListener("submit",a=>{a.preventDefault();const s=a.target.elements.search.value;if(s===""){n.show({title:"Error",message:"Please enter a search query!",position:"bottomRight"});return}d(s).then(e=>{e.hits.length===0?n.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}):(l(e.hits),new c(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh())}).catch(e=>{console.log(e)})});
//# sourceMappingURL=commonHelpers.js.map
