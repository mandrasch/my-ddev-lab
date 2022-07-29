import{_ as n,c as e,b as l,a as p,d as s,o,r as t}from"./app.7b98e692.js";const g=JSON.parse('{"title":"Laravel","description":"","frontmatter":{},"headers":[{"level":2,"title":"Starter kits (with vite)","slug":"starter-kits-with-vite"},{"level":3,"title":"Breeze","slug":"breeze"},{"level":2,"title":"Inertia","slug":"inertia"}],"relativePath":"tutorials/cms-and-frameworks/laravel.md","lastUpdated":1659103222000}'),r={name:"tutorials/cms-and-frameworks/laravel.md"},c=p(`<h1 id="laravel" tabindex="-1">Laravel <a class="header-anchor" href="#laravel" aria-hidden="true">#</a></h1><p>This is the quickstart for the latest Laravel version:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ddev config --project-type=laravel --docroot=public --create-docroot </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  ddev start </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  ddev composer create --prefer-dist laravel/laravel </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  ddev </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cat .env.example | sed  -E &#39;s/DB_(HOST|DATABASE|USERNAME|PASSWORD)=(.*)/DB_\\1=db/g&#39; &gt; .env</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  ddev </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sed -i &quot;s#APP_URL=.*#APP_URL=\${DDEV_PRIMARY_URL}#g&quot; .env</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  ddev </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">php artisan key:generate</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>Source: <a href="https://ddev.readthedocs.io/en/stable/users/cli-usage/#laravel-composer-setup-example" target="_blank" rel="noopener noreferrer">DDEV docs</a></p><h2 id="starter-kits-with-vite" tabindex="-1">Starter kits (with vite) <a class="header-anchor" href="#starter-kits-with-vite" aria-hidden="true">#</a></h2><h3 id="breeze" tabindex="-1">Breeze <a class="header-anchor" href="#breeze" aria-hidden="true">#</a></h3><p>\u{1F6A7} Work in progress, currently not working \u{1F6A7}</p><p>This will install the <a href="https://laravel.com/docs/9.x/starter-kits#laravel-breeze" target="_blank" rel="noopener noreferrer">Laravel Breeze</a> starter kit. Recently Laravel switched from LaravelMix/Webpack to vite. Thanks to @torenware for the DDEV vite addon.</p><p>Demo repository: <a href="https://github.com/mandrasch/ddev-laravel-breeze-vite" target="_blank" rel="noopener noreferrer">https://github.com/mandrasch/ddev-laravel-breeze-vite</a></p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># Install Laravel via DDEV composer</span></span>
<span class="line"><span style="color:#A6ACCD;">ddev config --project-type=laravel --docroot=public --create-docroot </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  ddev start </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  ddev composer create --prefer-dist laravel/laravel </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  ddev </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cat .env.example | sed  -E &#39;s/DB_(HOST|DATABASE|USERNAME|PASSWORD)=(.*)/DB_\\1=db/g&#39; &gt; .env</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  ddev </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sed -i &quot;s#APP_URL=.*#APP_URL=\${DDEV_PRIMARY_URL}#g&quot; .env</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  ddev </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">php artisan key:generate</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Install breeze starter kit</span></span>
<span class="line"><span style="color:#A6ACCD;">ddev composer require laravel/breeze --dev </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  ddev artisan breeze:install </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  ddev artisan migrate </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  ddev </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Vite integration via https://github.com/torenware/ddev-viteserve</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Thanks very much to @torenware!</span></span>
<span class="line"><span style="color:#A6ACCD;">ddev get torenware/ddev-viteserve</span></span>
<span class="line"></span></code></pre></div><p>Change <code>VITE_PROJECT_DIR=frontend</code> to <code>VITE_PROJECT_DIR=./</code> in <code>.ddev/docker-compose.viteserve.yaml</code>:</p><div class="language-yaml"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># Set the vite-enabled js project here:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VITE_PROJECT_DIR=./</span></span>
<span class="line"></span></code></pre></div><p>Add https and host URL to <code>vite.config.js</code></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> laravel </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">laravel-vite-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">laravel</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">resources/css/app.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">resources/js/app.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        ])</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">https</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3001</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">hmr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">laravel-breeze-test-vite.ddev.site</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>IMPORTANT:</strong> There was a bug in <a href="https://www.npmjs.com/package/laravel-vite-plugin" target="_blank" rel="noopener noreferrer">laravel-vite-plugin</a>, which did not use hmr.host for the blade @vite template. Update to <a href="https://github.com/laravel/vite-plugin/releases/tag/v0.3.0" target="_blank" rel="noopener noreferrer">v.0.3</a> with</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ddev </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> npm install laravel-vite-plugin@latest</span></span>
<span class="line"></span></code></pre></div><p>Run the following to apply this:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ddev restart</span></span>
<span class="line"><span style="color:#A6ACCD;">ddev vite-serve start</span></span>
<span class="line"></span></code></pre></div><p>Open the login/ page (vite is not used on the index page) with</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ddev launch /login</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Also getting these warnings</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/ddev-laravel-breeze-vite % ddev vite-serve start</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2009WARN\u2009 Moving @tailwindcss/forms that was installed by a different package manager to </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules/.ignored</span></span>
<span class="line"><span style="color:#C3E88D;">\u2009WARN\u2009 Moving alpinejs that was installed by a different package manager to </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">node_modules/.ignored</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2009WARN\u2009 Moving autoprefixer that was installed by a different package manager to </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules/.ignored</span></span>
<span class="line"><span style="color:#C3E88D;">\u2009WARN\u2009 Moving axios that was installed by a different package manager to </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">node_modules/.ignored</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2009WARN\u2009 Moving laravel-vite-plugin that was installed by a different package manager to </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules/.ignored</span></span>
<span class="line"><span style="color:#C3E88D;">\u2009WARN\u2009 4 other warnings</span></span>
<span class="line"></span></code></pre></div><p>Current progress:</p><ul><li><a href="https://github.com/torenware/ddev-viteserve/issues/2" target="_blank" rel="noopener noreferrer">https://github.com/torenware/ddev-viteserve/issues/2</a></li></ul><h2 id="inertia" tabindex="-1">Inertia <a class="header-anchor" href="#inertia" aria-hidden="true">#</a></h2>`,25),i=s("ul",null,[s("li",null,[s("a",{href:"https://github.com/mandrasch/ddev-breeze-inertia-vue-starter",target:"_blank",rel:"noopener noreferrer"},"https://github.com/mandrasch/ddev-breeze-inertia-vue-starter")])],-1);function D(y,A,d,C,F,v){const a=t("TwoClickYoutubePrivacy");return o(),e("div",null,[c,l(a,{videoId:"XDn_itJ0s64"}),i])}var u=n(r,[["render",D]]);export{g as __pageData,u as default};
