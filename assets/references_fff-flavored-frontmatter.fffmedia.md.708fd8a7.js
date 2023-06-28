import{_ as s,o as a,c as n,V as l}from"./chunks/framework.8f17d1d7.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"references/fff-flavored-frontmatter.fffmedia.md","filePath":"references/fff-flavored-frontmatter.fffmedia.md","lastUpdated":null}'),o={name:"references/fff-flavored-frontmatter.fffmedia.md"},p=l(`<p><a href="./">Home</a> &gt; <a href="./fff-flavored-frontmatter.html">fff-flavored-frontmatter</a> &gt; <a href="./fff-flavored-frontmatter.fffmedia.html">FFFMedia</a></p><h2 id="fffmedia-type" tabindex="-1">FFFMedia type <a class="header-anchor" href="#fffmedia-type" aria-label="Permalink to &quot;FFFMedia type&quot;">​</a></h2><p>Media Variables</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-darker vp-code-dark"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">FFFMedia</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#EEFFFF;"> </span><span style="color:#C792EA;">extends</span><span style="color:#EEFFFF;"> (</span><span style="color:#FFCB6B;">boolean</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">|</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#EEFFFF;">) </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#89DDFF;">&gt;</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">FFFOptionalType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">FFFImage</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">images</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">FFFOptionalType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#EEFFFF;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">FFFImage</span><span style="color:#EEFFFF;">[]</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">audio</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">FFFOptionalType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">FFFAudio</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">video</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">FFFOptionalType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">FFFVideo</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#F07178;">alt</span><span style="color:#89DDFF;">?:</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre><pre class="shiki material-theme-lighter vp-code-light"><code><span class="line"><span style="color:#9C3EDA;">type</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">FFFMedia</span><span style="color:#39ADB5;">&lt;</span><span style="color:#E2931D;">T</span><span style="color:#90A4AE;"> </span><span style="color:#9C3EDA;">extends</span><span style="color:#90A4AE;"> (</span><span style="color:#E2931D;">boolean</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">|</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">undefined</span><span style="color:#90A4AE;">) </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">undefined</span><span style="color:#39ADB5;">&gt;</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">=</span><span style="color:#90A4AE;"> </span><span style="color:#39ADB5;">{</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">image</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">FFFOptionalType</span><span style="color:#39ADB5;">&lt;</span><span style="color:#E2931D;">T</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">string</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">FFFImage</span><span style="color:#39ADB5;">&gt;;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">images</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">FFFOptionalType</span><span style="color:#39ADB5;">&lt;</span><span style="color:#E2931D;">T</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">string</span><span style="color:#90A4AE;">[]</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">FFFImage</span><span style="color:#90A4AE;">[]</span><span style="color:#39ADB5;">&gt;;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">audio</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">FFFOptionalType</span><span style="color:#39ADB5;">&lt;</span><span style="color:#E2931D;">T</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">string</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">FFFAudio</span><span style="color:#39ADB5;">&gt;;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">video</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">FFFOptionalType</span><span style="color:#39ADB5;">&lt;</span><span style="color:#E2931D;">T</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">string</span><span style="color:#39ADB5;">,</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">FFFVideo</span><span style="color:#39ADB5;">&gt;;</span></span>
<span class="line"><span style="color:#90A4AE;">    </span><span style="color:#E53935;">alt</span><span style="color:#39ADB5;">?:</span><span style="color:#90A4AE;"> </span><span style="color:#E2931D;">string</span><span style="color:#39ADB5;">;</span></span>
<span class="line"><span style="color:#39ADB5;">};</span></span></code></pre></div><p><strong>References:</strong> <a href="./fff-flavored-frontmatter.fffoptionaltype.html">FFFOptionalType</a>, <a href="./fff-flavored-frontmatter.fffimage.html">FFFImage</a>, <a href="./fff-flavored-frontmatter.fffaudio.html">FFFAudio</a>, <a href="./fff-flavored-frontmatter.fffvideo.html">FFFVideo</a></p>`,6),e=[p];function t(F,r,c,y,E,D){return a(),n("div",null,e)}const A=s(o,[["render",t]]);export{i as __pageData,A as default};