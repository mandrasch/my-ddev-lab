import{_ as e,c as t,o as a,a as s}from"./app.ae8a6e4d.js";const k='{"title":"Statamic","description":"","frontmatter":{"head":[["meta",{"name":"description","content":""}]]},"headers":[{"level":2,"title":"Example repositories","slug":"example-repositories"},{"level":2,"title":"Quickstart","slug":"quickstart"},{"level":2,"title":"Install a starter kit (Peak)","slug":"install-a-starter-kit-peak"},{"level":3,"title":"Troubleshooting","slug":"troubleshooting"},{"level":2,"title":"Pull content / media files from production","slug":"pull-content-media-files-from-production"},{"level":2,"title":"TODOs","slug":"todos"}],"relativePath":"tutorials/cms-and-frameworks/statamic.md","lastUpdated":1655392493000}',n={},o=s(`<div class="info custom-block"><p class="custom-block-title">INFO</p><p>This chapter is work in progress (WIP) \u{1F6A7}, <a href="https://github.com/tyler36/ddev-browsersync#laravel-mix-example" target="_blank" rel="noopener noreferrer">browsersync / asset compilation</a> needs to be implemented for example. Happy to hear <a href="https://github.com/mandrasch/my-ddev-lab/issues" target="_blank" rel="noopener noreferrer">your feedback / ideas</a>!</p></div><h1 id="statamic" tabindex="-1">Statamic <a class="header-anchor" href="#statamic" aria-hidden="true">#</a></h1><h2 id="example-repositories" tabindex="-1">Example repositories <a class="header-anchor" href="#example-repositories" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/mandrasch/ddev-statamic-blank" target="_blank" rel="noopener noreferrer">https://github.com/mandrasch/ddev-statamic-blank</a> (<a href="https://gitpod.io/#https://github.com/mandrasch/ddev-statamic-blank/" target="_blank" rel="noopener noreferrer">\u{1F680}\xA0 Open in Gitpod</a>)</li><li>Peak Starter Kit (WIP)</li></ul><h2 id="quickstart" tabindex="-1">Quickstart <a class="header-anchor" href="#quickstart" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">mkdir</span> my-new-statamic
<span class="token builtin class-name">cd</span> my-new-statamic/
ddev config --project-type<span class="token operator">=</span>laravel --docroot<span class="token operator">=</span>public --create-docroot
ddev <span class="token function">composer</span> create statamic/statamic
ddev <span class="token builtin class-name">exec</span> <span class="token string">&quot;cp .env.example .env&quot;</span>
ddev artisan key:generate
<span class="token comment"># Add support for CLI please command:</span>
ddev get mandrasch/ddev-statamic-please
<span class="token comment"># Set the APP_URL to ddev project URL in .env,</span>
<span class="token comment"># e.g. APP_URL=https://ddev-statamic-blank.ddev.site</span>
<span class="token comment"># TODO: automate this step as well via bash command</span>
ddev launch
</code></pre></div><p>Afterwards you can create your admin user:</p><div class="language-bash"><pre><code>ddev please make:user
ddev launch /cp
</code></pre></div><p><strong>TODO:</strong> Add support for <a href="https://github.com/tyler36/ddev-browsersync#laravel-mix-example" target="_blank" rel="noopener noreferrer">browsersync / asset compilation</a> via LaravelMix.</p><h2 id="install-a-starter-kit-peak" tabindex="-1">Install a starter kit (Peak) <a class="header-anchor" href="#install-a-starter-kit-peak" aria-hidden="true">#</a></h2><p><a href="https://peak.1902.studio/" target="_blank" rel="noopener noreferrer">https://peak.1902.studio/</a></p><div class="language-bash"><pre><code><span class="token function">mkdir</span> my-new-statamic
<span class="token builtin class-name">cd</span> my-new-statamic/
ddev config --project-type<span class="token operator">=</span>laravel --docroot<span class="token operator">=</span>public --create-docroot
ddev <span class="token function">composer</span> create statamic/statamic
<span class="token comment"># Add support for CLI please command:</span>
ddev get mandrasch/ddev-statamic-please
<span class="token comment"># Install starter kit </span>
ddev please starter-kit:install studio1902/statamic-peak
<span class="token comment"># Generate config &amp; key</span>
ddev <span class="token builtin class-name">exec</span> <span class="token string">&quot;cp .env.example .env&quot;</span>
ddev artisan key:generate
<span class="token comment"># Set the APP_URL to ddev project URL in .env,</span>
<span class="token comment"># e.g. APP_URL=https://ddev-statamic-blank.ddev.site</span>
<span class="token comment"># TODO: automate this step as well via bash command</span>
ddev launch
</code></pre></div><p>Afterwards you can create your admin user:</p><div class="language-bash"><pre><code>ddev please make:user
ddev launch /cp
</code></pre></div><p>General source: <a href="https://peak.1902.studio/getting-started/installation.html#installation-via-the-cli" target="_blank" rel="noopener noreferrer">https://peak.1902.studio/getting-started/installation.html#installation-via-the-cli</a></p><p><strong>TODO:</strong> Add support for <a href="https://github.com/tyler36/ddev-browsersync#laravel-mix-example" target="_blank" rel="noopener noreferrer">browsersync / asset compilation</a> via LaravelMix.</p><h3 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a></h3><p>If the starter kit install fails with <code>Composer could not authenticate with GitHub!</code>, <a href="https://github.com/settings/tokens/new" target="_blank" rel="noopener noreferrer">generate a token with no permissions</a> on GitHub and store it to DDEV:</p><div class="language-bash"><pre><code>ddev <span class="token function">composer</span> config --global --auth github-oauth.github.com <span class="token punctuation">[</span>your-token-here<span class="token punctuation">]</span>
</code></pre></div><h2 id="pull-content-media-files-from-production" tabindex="-1">Pull content / media files from production <a class="header-anchor" href="#pull-content-media-files-from-production" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This chapter is work in progress (WIP) \u{1F6A7}</p></div><p>DDEV offers an incredible feature called <a href="https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/" target="_blank" rel="noopener noreferrer">Hosting Provider Integration</a>. This enables writing little scripts which can pull files from remote servers to your local development project.</p><p>Disclaimer: Statamic offers <a href="https://statamic.dev/git-automation" target="_blank" rel="noopener noreferrer">Git automation</a>. This approach is not used here, since I want to separate config (git) from site content (on live server).</p><p>First add these lines to your <code>.gitignore</code> file. We will pull the site specific content from the production / live site and don&#39;t store it in git.</p><div class="language-bash"><pre><code><span class="token comment"># Don&#39;t store site specific content, we&#39;ll pull it from live site</span>
<span class="token comment"># (Comment these lines if you wan&#39;t to use Git automation)</span>
/content
/users
/public/assets
/storage/forms/
</code></pre></div><p>TODO: Add example for pull of these directories to local DDEV / use extension/.zip to implement this as well?</p><h2 id="todos" tabindex="-1">TODOs <a class="header-anchor" href="#todos" aria-hidden="true">#</a></h2>`,27),r=[o];function i(l,c,p,d,m,h){return a(),t("div",null,r)}var v=e(n,[["render",i]]);export{k as __pageData,v as default};
