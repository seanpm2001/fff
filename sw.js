if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let r={};const o=s=>n(s,t),a={module:{uri:t},exports:r,require:o};e[t]=Promise.all(i.map((s=>a[s]||o(s)))).then((s=>(l(...s),r)))}}define(["./workbox-75ff5049"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.1cdbbbcd.js",revision:null},{url:"assets/chunks/pwa.e2e31100.js",revision:null},{url:"assets/index.md.0c33d2e4.js",revision:null},{url:"assets/index.md.0c33d2e4.lean.js",revision:null},{url:"assets/intro_contributing.md.b58ae95d.js",revision:null},{url:"assets/intro_contributing.md.b58ae95d.lean.js",revision:null},{url:"assets/intro_implementation.md.3abeabf8.js",revision:null},{url:"assets/intro_implementation.md.3abeabf8.lean.js",revision:null},{url:"assets/intro_what-is-fff.md.c8e12449.js",revision:null},{url:"assets/intro_what-is-fff.md.c8e12449.lean.js",revision:null},{url:"assets/style.85394cba.css",revision:null},{url:"assets/version_0.1.md.8a559f1c.js",revision:null},{url:"assets/version_0.1.md.8a559f1c.lean.js",revision:null},{url:"assets/version_0.2.md.9c2ec24d.js",revision:null},{url:"assets/version_0.2.md.9c2ec24d.lean.js",revision:null},{url:"assets/version_0.3.md.dde59445.js",revision:null},{url:"assets/version_0.3.md.dde59445.lean.js",revision:null},{url:"assets/version_changelog.md.a89e5f0e.js",revision:null},{url:"assets/version_changelog.md.a89e5f0e.lean.js",revision:null},{url:"glowing_star.svg",revision:"be698b88356d324a89466c184856846d"},{url:"manifest.webmanifest",revision:"bfd146a9c9881882d4d1899c9c310813"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
