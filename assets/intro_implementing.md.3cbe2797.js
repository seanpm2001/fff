import{o as t,c,b as s,u as n,a as p}from"./app.10693328.js";const o="0.4.2",r=p(`<h1 id="implementing" tabindex="-1">Implementing <a class="header-anchor" href="#implementing" aria-hidden="true">#</a></h1><h2 id="make-compatible" tabindex="-1">Make Compatible <a class="header-anchor" href="#make-compatible" aria-hidden="true">#</a></h2><p>This document contains all historical versions of FFF. (see <a href="/version/changelog.html">changelog</a> for details)</p><p>In general, you only need to consider compatibility with the latest version.</p><p>You can extend the functionality of FFF as much as you want, but can&#39;t intentionally create incompatibilities.</p><p>For example, it is possible to make authors support <code>id</code>, but not rename tags to categories, and so on.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#F07178;">authors</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">johndoe</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;"># compatible</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Jane Doe</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">janedoe</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;"># compatible</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">https://fff.js.org/~janedoe</span></span>
<span class="line"><span style="color:#F07178;">categories</span><span style="color:#89DDFF;">:</span><span style="color:#EEFFFF;"> </span><span style="color:#545454;"># incompatible</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Foo</span></span>
<span class="line"><span style="color:#EEFFFF;">  </span><span style="color:#89DDFF;">-</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">Bar</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#E53935;">authors</span><span style="color:#39ADB5;">:</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">johndoe</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;"># compatible</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#E53935;">name</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">Jane Doe</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">id</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">janedoe</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;"># compatible</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">url</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">https://fff.js.org/~janedoe</span></span>
<span class="line"><span style="color:#E53935;">categories</span><span style="color:#39ADB5;">:</span><span style="color:#90A4AE;"> </span><span style="color:#90A4AE;"># incompatible</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">Foo</span></span>
<span class="line"><span style="color:#90A4AE;">  </span><span style="color:#39ADB5;">-</span><span style="color:#90A4AE;"> </span><span style="color:#91B859;">Bar</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="badges" tabindex="-1">Badges <a class="header-anchor" href="#badges" aria-hidden="true">#</a></h2><p>If your project is already FFF compatible, you can use the badge from <a href="https://shields.io" target="_blank" rel="noreferrer">shields.io</a> to illustrate this.</p>`,9),i=["src"],F=["src"],y=["src"],d=["src"],h=p(`<p>Replace <code>#badge-here</code> with one of the image links above for use in Markdown:</p><blockquote><p>Don&#39;t forget to note the version!</p></blockquote><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">![</span><span style="color:#C3E88D;">fff</span><span style="color:#89DDFF;">](</span><span style="color:#C3E88D;font-weight:bold;">#badge-here</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;font-weight:bold;">https://fff.js.org</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#39ADB5;">[</span><span style="color:#39ADB5;">![</span><span style="color:#91B859;">fff</span><span style="color:#39ADB5;">](</span><span style="color:#91B859;font-weight:bold;">#badge-here</span><span style="color:#39ADB5;">)</span><span style="color:#39ADB5;">](</span><span style="color:#E53935;font-weight:bold;">https://fff.js.org</span><span style="color:#39ADB5;">)</span></span>
<span class="line"></span></code></pre></div>`,3),A=JSON.parse('{"title":"Implementing","description":"","frontmatter":{"title":"Implementing"},"headers":[{"level":2,"title":"Make Compatible","slug":"make-compatible","link":"#make-compatible","children":[]},{"level":2,"title":"Badges","slug":"badges","link":"#badges","children":[]}],"relativePath":"intro/implementing.md","lastUpdated":1667970069000}'),E={name:"intro/implementing.md"},D=Object.assign(E,{setup(m){const a=o.split(".").slice(0,2).map((l,e)=>e===1&&/[a-z]/i.test(o)?l-1:l).join(".");return(l,e)=>(t(),c("div",null,[r,s("ul",null,[s("li",null,[s("img",{src:`https://img.shields.io/badge/%F0%9F%8C%9F%20F%20F%20F-${n(a)}-yellow?style=plastic`,alt:"plastic"},null,8,i)]),s("li",null,[s("img",{src:`https://img.shields.io/badge/%F0%9F%8C%9F%20F%20F%20F-${n(a)}-yellow?style=flat`,alt:"flat"},null,8,F)]),s("li",null,[s("img",{src:`https://img.shields.io/badge/%F0%9F%8C%9F%20F%20F%20F-${n(a)}-yellow?style=flat-square`,alt:"flat-square"},null,8,y)]),s("li",null,[s("img",{src:`https://img.shields.io/badge/%F0%9F%8C%9F%20F%20F%20F-${n(a)}-yellow?style=for-the-badge`,alt:"for-the-badge"},null,8,d)])]),h]))}});export{A as __pageData,D as default};