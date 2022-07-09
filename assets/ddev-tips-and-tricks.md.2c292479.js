import{_ as e,c as a,o as s,a as t}from"./app.f17146ad.js";const f='{"title":"Tips & tricks","description":"","frontmatter":{},"headers":[],"relativePath":"ddev-tips-and-tricks.md","lastUpdated":1657354994000}',r={},n=t(`<h1 id="tips-tricks" tabindex="-1">Tips &amp; tricks <a class="header-anchor" href="#tips-tricks" aria-hidden="true">#</a></h1><p><strong>Clean up all the containers</strong></p><p>Your local files will be kept, but all containers will be deleted (and databases will be deleted).</p><div class="language-bash"><pre><code>ddev delete images
<span class="token function">docker</span> rmi -f <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images -q<span class="token variable">)</span></span>
</code></pre></div><p>Source: <a href="https://discord.com/channels/664580571770388500/993786554386489414/993864023634358352" target="_blank" rel="noopener noreferrer">Discord</a>, thx to @rfay!</p><p><strong>Save energy</strong></p><div class="language-bash"><pre><code>ddev poweroff
</code></pre></div><p><strong>Update DDEV</strong></p><p>See <a href="https://github.com/drud/ddev/releases" target="_blank" rel="noopener noreferrer">latest Release</a> for instructions. The current version can be shown via</p><div class="language-bash"><pre><code>ddev -v
</code></pre></div>`,10),o=[n];function d(c,i,p,l,_,h){return s(),a("div",null,o)}var g=e(r,[["render",d]]);export{f as __pageData,g as default};