import"./assets/vendor-86291ea8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function i(s){const r="https://pixabay.com",c="/api/",o={key:"42328453-99f2c5c34c77a0496905bbef3",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"},e=new URLSearchParams(o),t=r+c+"?"+e;return fetch(t,o).then(n=>n.json())}i("flower").then(s=>{console.log(s)});
//# sourceMappingURL=commonHelpers.js.map