import{i as c,S as l}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function d(n){const r=document.querySelector(".cards");r.innerHTML="",n.forEach(e=>{const s=`<li class="card"> 
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
             </li>`;r.innerHTML+=s})}const u=document.querySelector(".form"),i=document.getElementById("loader");function p(n){const r="https://pixabay.com",e="/api/",s={key:"42328453-99f2c5c34c77a0496905bbef3",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"},t=new URLSearchParams(s),o=r+e+"?"+t;return fetch(o,s).then(a=>{if(!a.ok)throw new Error("Server responded with error");return a.json()})}u.addEventListener("submit",n=>{n.preventDefault();const r=n.target.elements.search.value.trim();if(r===""){c.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Please enter a search query!",position:"bottomRight"});return}m(),p(r).then(e=>{if(e.hits.length===0){const s=document.querySelector(".cards");s.innerHTML="",g(),c.show({title:"Error",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})}else d(e.hits),new l(".cards a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh(),f()}).catch(e=>{console.log(e)})});function m(){i.style.display="block"}function f(){i.style.display="none"}function g(){i.textContent="Nothing found :("}
//# sourceMappingURL=commonHelpers.js.map
