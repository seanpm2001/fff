if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>n(e,r),o={module:{uri:r},exports:a,require:t};s[r]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(l(...e),a)))}}define(["./workbox-eb0071cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"7982d2f65bb0b9a1eb1302167d82b7a8"},{url:"assets/app.1815134a.js",revision:null},{url:"assets/CHANGELOG.md.53eec99d.js",revision:null},{url:"assets/CHANGELOG.md.53eec99d.lean.js",revision:null},{url:"assets/chunks/pwa.6e07b474.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.295a6886.js",revision:null},{url:"assets/index.md.11cf0eb6.js",revision:null},{url:"assets/index.md.11cf0eb6.lean.js",revision:null},{url:"assets/intro_contributing.md.842365d4.js",revision:null},{url:"assets/intro_contributing.md.842365d4.lean.js",revision:null},{url:"assets/intro_implementing.md.1a70b8df.js",revision:null},{url:"assets/intro_implementing.md.1a70b8df.lean.js",revision:null},{url:"assets/intro_showcase.md.cb74ee11.js",revision:null},{url:"assets/intro_showcase.md.cb74ee11.lean.js",revision:null},{url:"assets/intro_what-is-fff.md.b60feadb.js",revision:null},{url:"assets/intro_what-is-fff.md.b60feadb.lean.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.4fbb9e92.js",revision:null},{url:"assets/packages_fff-flavored-frontmatter.md.4fbb9e92.lean.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.65849017.js",revision:null},{url:"assets/packages_indiekit-preset-fff.md.65849017.lean.js",revision:null},{url:"assets/packages_markdown-it-fff.md.a1a4cc33.js",revision:null},{url:"assets/packages_markdown-it-fff.md.a1a4cc33.lean.js",revision:null},{url:"assets/packages_remark-fff.md.b2f1c528.js",revision:null},{url:"assets/packages_remark-fff.md.b2f1c528.lean.js",revision:null},{url:"assets/style.288e2139.css",revision:null},{url:"assets/version_0.1.md.bb504ad6.js",revision:null},{url:"assets/version_0.1.md.bb504ad6.lean.js",revision:null},{url:"assets/version_0.2.md.e8f1f825.js",revision:null},{url:"assets/version_0.2.md.e8f1f825.lean.js",revision:null},{url:"assets/version_0.3.md.44ed4a39.js",revision:null},{url:"assets/version_0.3.md.44ed4a39.lean.js",revision:null},{url:"assets/version_0.4.md.9a27e2e4.js",revision:null},{url:"assets/version_0.4.md.9a27e2e4.lean.js",revision:null},{url:"assets/version_0.5.md.f64587f0.js",revision:null},{url:"assets/version_0.5.md.f64587f0.lean.js",revision:null},{url:"assets/version_changelog.md.9aa5577d.js",revision:null},{url:"assets/version_changelog.md.9aa5577d.lean.js",revision:null},{url:"CHANGELOG.html",revision:"520dce80d107df632b261bf723d26566"},{url:"index.html",revision:"5ad595731f9b338128c8442f51f1fab1"},{url:"intro/contributing.html",revision:"23ef8885f528ee20b74f2e66106e4702"},{url:"intro/implementing.html",revision:"5eda83aa2a2f7ba0a427f765d6e9a632"},{url:"intro/showcase.html",revision:"5a96e3a29d0cc02eb5ac56619f865230"},{url:"intro/what-is-fff.html",revision:"3eae1fc6ec9da24b6976a09129096031"},{url:"packages/fff-flavored-frontmatter.html",revision:"b14f1c1f79891c24a16fbf00f7b8683e"},{url:"packages/indiekit-preset-fff.html",revision:"9d60adcffe0cbeb520c0b771a93b74c8"},{url:"packages/markdown-it-fff.html",revision:"514869b46ed4ee6b6fe25def7786e49d"},{url:"packages/remark-fff.html",revision:"57da4c3cdc12e082eb1d00048a3ac487"},{url:"version/0.1.html",revision:"3fe2dcc471761164c78a185655c69a7f"},{url:"version/0.2.html",revision:"72dbd35a06c26530ead96419baa3bd74"},{url:"version/0.3.html",revision:"027f29e03e59da7ee9914539da799f59"},{url:"version/0.4.html",revision:"3aa3c9fe28c4b23d9a47643d2bf98bf0"},{url:"version/0.5.html",revision:"09aa476b80f83f6109f7dc74d189da8e"},{url:"version/changelog.html",revision:"64aab3b298d21ff8e13c11c1b9321a56"},{url:"manifest.webmanifest",revision:"bfd146a9c9881882d4d1899c9c310813"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
