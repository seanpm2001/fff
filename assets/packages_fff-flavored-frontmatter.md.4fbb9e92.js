import{_ as e,o as s,c as a,a as o,e as p,u as r}from"./app.1815134a.js";JSON.parse('{"title":"FFF Flavored Frontmatter","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"relativePath":"../packages/fff-flavored-frontmatter/README.md","lastUpdated":1668093701000}');const c={name:"../packages/fff-flavored-frontmatter/README.md"},i=o(`<h1 id="fff-flavored-frontmatter" tabindex="-1">FFF Flavored Frontmatter <a class="header-anchor" href="#fff-flavored-frontmatter" aria-hidden="true">#</a></h1><p>🌟 Type definition of the FFF Flavored Frontmatter.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><blockquote><p>pls confirm the version you need before installing, or always keep the latest version.</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-darker vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">add</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">fff-flavored-frontmatter</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;font-style:italic;"># pnpm</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># yarn add -D fff-flavored-frontmatter # yarn</span></span>
<span class="line"><span style="color:#545454;font-style:italic;"># npm i -D fff-flavored-frontmatter # npm</span></span>
<span class="line"></span></code></pre><pre class="shiki material-theme-lighter vp-code-light" tabindex="0"><code><span class="line"><span style="color:#E2931D;">pnpm</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">add</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">-D</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">fff-flavored-frontmatter</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;font-style:italic;"># pnpm</span></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;"># yarn add -D fff-flavored-frontmatter # yarn</span></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;"># npm i -D fff-flavored-frontmatter # npm</span></span>
<span class="line"></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-darker vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#545454;font-style:italic;">// Node</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">FFFFlavoredFrontmatter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fff-flavored-frontmatter</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">// import type { FFFBase, FFFExtra } from &#39;fff-flavored-frontmatter&#39;</span></span>
<span class="line"><span style="color:#545454;font-style:italic;">// import type { FFFImage, FFFAudio, FFFVideo, FFFAuthor } from &#39;fff-flavored-frontmatter&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#545454;font-style:italic;">// Deno</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#EEFFFF;">FFFFlavoredFrontmatter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://deno.land/x/fff/fff.ts</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><pre class="shiki material-theme-lighter vp-code-light" tabindex="0"><code><span class="line"><span style="color:#90A4AE;font-style:italic;">// Node</span></span>
<span class="line"><span style="color:#39ADB5;font-style:italic;">import</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">type</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span><span style="color:#E53935;"> </span><span style="color:#90A4AE;">FFFFlavoredFrontmatter</span><span style="color:#E53935;"> </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">from</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&#39;</span><span style="color:#91B859;">fff-flavored-frontmatter</span><span style="color:#39ADB5;">&#39;</span></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// import type { FFFBase, FFFExtra } from &#39;fff-flavored-frontmatter&#39;</span></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// import type { FFFImage, FFFAudio, FFFVideo, FFFAuthor } from &#39;fff-flavored-frontmatter&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#90A4AE;font-style:italic;">// Deno</span></span>
<span class="line"><span style="color:#39ADB5;font-style:italic;">import</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">type</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span><span style="color:#E53935;"> </span><span style="color:#90A4AE;">FFFFlavoredFrontmatter</span><span style="color:#E53935;"> </span><span style="color:#39ADB5;">}</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;font-style:italic;">from</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">&#39;</span><span style="color:#91B859;">https://deno.land/x/fff/fff.ts</span><span style="color:#39ADB5;">&#39;</span></span>
<span class="line"></span></code></pre></div>`,7),F=[i];function f(n,t,l,m,E,A){return s(),a("div",null,F)}const y=e(c,[["render",f]]),h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"packages/fff-flavored-frontmatter.md","lastUpdated":1665050508000}'),d={name:"packages/fff-flavored-frontmatter.md"},v=Object.assign(d,{setup(n){return(t,l)=>(s(),a("div",null,[p(r(y))]))}});export{h as __pageData,v as default};
