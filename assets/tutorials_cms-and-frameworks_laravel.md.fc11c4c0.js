import{_ as n,c as s,b as t,a as p,d as a,r as o,o as r}from"./app.f17146ad.js";const f='{"title":"Laravel","description":"","frontmatter":{},"headers":[{"level":2,"title":"Starter kits (with vite)","slug":"starter-kits-with-vite"},{"level":3,"title":"Breeze","slug":"breeze"},{"level":2,"title":"Inertia","slug":"inertia"}],"relativePath":"tutorials/cms-and-frameworks/laravel.md","lastUpdated":1657654054000}',l={},c=p(`<h1 id="laravel" tabindex="-1">Laravel <a class="header-anchor" href="#laravel" aria-hidden="true">#</a></h1><p>This is the quickstart for the latest Laravel version:</p><div class="language-bash"><pre><code>ddev config --project-type<span class="token operator">=</span>laravel --docroot<span class="token operator">=</span>public --create-docroot <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  ddev start <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  ddev <span class="token function">composer</span> create --prefer-dist laravel/laravel <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  ddev <span class="token builtin class-name">exec</span> <span class="token string">&quot;cat .env.example | sed  -E &#39;s/DB_(HOST|DATABASE|USERNAME|PASSWORD)=(.*)/DB_<span class="token entity" title="\\1">\\1</span>=db/g&#39; &gt; .env&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  ddev <span class="token builtin class-name">exec</span> <span class="token string">&#39;sed -i &quot;s#APP_URL=.*#APP_URL=\${DDEV_PRIMARY_URL}#g&quot; .env&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  ddev <span class="token builtin class-name">exec</span> <span class="token string">&quot;php artisan key:generate&quot;</span>
</code></pre></div><p>Source: <a href="https://ddev.readthedocs.io/en/stable/users/cli-usage/#laravel-composer-setup-example" target="_blank" rel="noopener noreferrer">DDEV docs</a></p><h2 id="starter-kits-with-vite" tabindex="-1">Starter kits (with vite) <a class="header-anchor" href="#starter-kits-with-vite" aria-hidden="true">#</a></h2><h3 id="breeze" tabindex="-1">Breeze <a class="header-anchor" href="#breeze" aria-hidden="true">#</a></h3><p>\u{1F6A7} Work in progress, currently not working \u{1F6A7}</p><p>This will install the <a href="https://laravel.com/docs/9.x/starter-kits#laravel-breeze" target="_blank" rel="noopener noreferrer">Laravel Breeze</a> starter kit. Recently Laravel switched from LaravelMix/Webpack to vite. Thanks to @torenware for the DDEV vite addon.</p><p>Demo repository: <a href="https://github.com/mandrasch/ddev-laravel-breeze-vite" target="_blank" rel="noopener noreferrer">https://github.com/mandrasch/ddev-laravel-breeze-vite</a></p><div class="language-bash"><pre><code><span class="token comment"># Install Laravel via DDEV composer</span>
ddev config --project-type<span class="token operator">=</span>laravel --docroot<span class="token operator">=</span>public --create-docroot <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  ddev start <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  ddev <span class="token function">composer</span> create --prefer-dist laravel/laravel <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  ddev <span class="token builtin class-name">exec</span> <span class="token string">&quot;cat .env.example | sed  -E &#39;s/DB_(HOST|DATABASE|USERNAME|PASSWORD)=(.*)/DB_<span class="token entity" title="\\1">\\1</span>=db/g&#39; &gt; .env&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  ddev <span class="token builtin class-name">exec</span> <span class="token string">&#39;sed -i &quot;s#APP_URL=.*#APP_URL=\${DDEV_PRIMARY_URL}#g&quot; .env&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  ddev <span class="token builtin class-name">exec</span> <span class="token string">&quot;php artisan key:generate&quot;</span>

<span class="token comment"># Install breeze starter kit</span>
ddev <span class="token function">composer</span> require laravel/breeze --dev <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  ddev artisan breeze:install <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  ddev artisan migrate <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
  ddev <span class="token builtin class-name">exec</span> <span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># Vite integration via https://github.com/torenware/ddev-viteserve</span>
<span class="token comment"># Thanks very much to @torenware!</span>
ddev get torenware/ddev-viteserve
</code></pre></div><p>Change <code>VITE_PROJECT_DIR=frontend</code> to <code>VITE_PROJECT_DIR=./</code> in <code>.ddev/docker-compose.viteserve.yaml</code>:</p><div class="language-yaml"><pre><code>    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token comment"># Set the vite-enabled js project here:</span>
      <span class="token punctuation">-</span> VITE_PROJECT_DIR=./
</code></pre></div><p>Add https and host URL to <code>vite.config.js</code></p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> laravel <span class="token keyword">from</span> <span class="token string">&#39;laravel-vite-plugin&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">laravel</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string">&#39;resources/css/app.css&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;resources/js/app.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3001</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hmr</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;laravel-breeze-test-vite.ddev.site&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>IMPORTANT:</strong> There was a bug in <a href="https://www.npmjs.com/package/laravel-vite-plugin" target="_blank" rel="noopener noreferrer">laravel-vite-plugin</a>, which did not use hmr.host for the blade @vite template. Update to <a href="https://github.com/laravel/vite-plugin/releases/tag/v0.3.0" target="_blank" rel="noopener noreferrer">v.0.3</a> with</p><div class="language-bash"><pre><code>ddev <span class="token builtin class-name">exec</span> <span class="token function">npm</span> <span class="token function">install</span> laravel-vite-plugin@latest
</code></pre></div><p>Run the following to apply this:</p><div class="language-bash"><pre><code>ddev restart
ddev vite-serve start
</code></pre></div><p>Open the login/ page (vite is not used on the index page) with</p><div class="language-"><pre><code>ddev launch /login
</code></pre></div><p>Also getting these warnings</p><div class="language-bash"><pre><code>/ddev-laravel-breeze-vite % ddev vite-serve start
\u2009WARN\u2009 Moving @tailwindcss/forms that was installed by a different package manager to <span class="token string">&quot;node_modules/.ignored
\u2009WARN\u2009 Moving alpinejs that was installed by a different package manager to &quot;</span>node_modules/.ignored
\u2009WARN\u2009 Moving autoprefixer that was installed by a different package manager to <span class="token string">&quot;node_modules/.ignored
\u2009WARN\u2009 Moving axios that was installed by a different package manager to &quot;</span>node_modules/.ignored
\u2009WARN\u2009 Moving laravel-vite-plugin that was installed by a different package manager to &quot;node_modules/.ignored
\u2009WARN\u2009 <span class="token number">4</span> other warnings
</code></pre></div><p>Current progress:</p><ul><li><a href="https://github.com/torenware/ddev-viteserve/issues/2" target="_blank" rel="noopener noreferrer">https://github.com/torenware/ddev-viteserve/issues/2</a></li></ul><h2 id="inertia" tabindex="-1">Inertia <a class="header-anchor" href="#inertia" aria-hidden="true">#</a></h2>`,25),i=a("ul",null,[a("li",null,[a("a",{href:"https://github.com/mandrasch/ddev-breeze-inertia-vue-starter",target:"_blank",rel:"noopener noreferrer"},"https://github.com/mandrasch/ddev-breeze-inertia-vue-starter")])],-1);function d(u,k,v,g,h,m){const e=o("TwoClickYoutubePrivacy");return r(),s("div",null,[c,t(e,{videoId:"XDn_itJ0s64"}),i])}var _=n(l,[["render",d]]);export{f as __pageData,_ as default};
