import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function a(s){const o=document.querySelector(".cards");o.innerHTML="",s.forEach(t=>{const n=`<li class="card"> 
                <a href="${t.largeImageURL}">
                    <img src="${t.webformatURL}" alt="${t.tags}" />
                </a>
                <div>
                        <p>Likes: ${t.likes}</p>
                        <p>Views: ${t.views}</p>
                        <p>Comments: ${t.comments}</p>
                        <p>Downloads: ${t.downloads}</p>
                </div>
             </li>`;o.innerHTML+=n})}const l=document.querySelector(".form");function u(s){const o="https://pixabay.com",t="/api/",n={key:"42328453-99f2c5c34c77a0496905bbef3",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"},e=new URLSearchParams(n),r=o+t+"?"+e;return fetch(r,n).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()})}l.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.search.value;if(o===""){c.show({title:"Error",message:"Please enter a search query!",position:"bottomRight"});return}u(o).then(t=>{t.hits.length===0?c.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}):a(t.hits)}).catch(t=>{console.log(t)})});
//# sourceMappingURL=commonHelpers.js.map
