import{_ as s,E as r,o,c as l,J as t,S as e}from"./chunks/framework.1a6f23fa.js";const w=JSON.parse('{"title":"WordPress","description":"Installing WordPress in DDEV is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI),therefore you can just download WordPress and install it locally:","frontmatter":{"head":[["meta",{"name":"description","content":"Installing WordPress in DDEV is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI),therefore you can just download WordPress and install it locally:"}]]},"headers":[],"relativePath":"tutorials/cms-and-frameworks/wordpress.md","filePath":"tutorials/cms-and-frameworks/wordpress.md","lastUpdated":1692430344000}'),n={name:"tutorials/cms-and-frameworks/wordpress.md"},i=e('<h1 id="wordpress" tabindex="-1">WordPress <a class="header-anchor" href="#wordpress" aria-label="Permalink to &quot;WordPress&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>🚧   This chapter is work in progress (WIP) . Happy to hear <a href="https://github.com/mandrasch/my-ddev-lab/issues" target="_blank" rel="noreferrer">your feedback / ideas</a>!</p></div><h2 id="quick-install" tabindex="-1">Quick install <a class="header-anchor" href="#quick-install" aria-label="Permalink to &quot;Quick install&quot;">​</a></h2><p>Installing WordPress with <a href="https://ddev.readthedocs.io/en/stable/" target="_blank" rel="noreferrer">DDEV</a> is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI).</p><p>If you create a DDEV project with <code>ddev config --project-type=wordpress</code>, a wp-config.php is created which already contains the correct database connection settings (db, db, db) for DDEV.</p><p>Therefore it is really easy to install a fresh WordPress with just a few commands:</p>',6),p=e(`<p>The commands shown in this video:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-wp-site</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-wp-site/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># create a new DDEV project inside the newly created folder</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># (the primary URL is automatically set to https://&lt;folder&gt;.ddev.site)</span></span>
<span class="line"><span style="color:#FFCB6B;">ddev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--project-type=wordpress</span></span>
<span class="line"><span style="color:#FFCB6B;">ddev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># download latest WordPress (via WP-CLI)</span></span>
<span class="line"><span style="color:#FFCB6B;">ddev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">core</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">download</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># finish the installtion in your browser:</span></span>
<span class="line"><span style="color:#FFCB6B;">ddev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">launch</span></span></code></pre></div><p>Source: <a href="https://ddev.readthedocs.io/en/stable/users/cli-usage/#command-line-setup-example-using-wp-cli" target="_blank" rel="noreferrer">Quick start docs for DDEV + WordPress</a></p><h2 id="vite-integration" tabindex="-1">Vite integration <a class="header-anchor" href="#vite-integration" aria-label="Permalink to &quot;Vite integration&quot;">​</a></h2><p>See latest demo repository <a href="https://github.com/mandrasch/ddev-wp-vite-demo" target="_blank" rel="noreferrer">https://github.com/mandrasch/ddev-wp-vite-demo</a> and more information on this docs page: <a href="./../nodejs-tools/vite.html">DDEV + Vite</a>.</p><h2 id="acf-blocks-svelte-vite-🧡" tabindex="-1">ACF Blocks + Svelte + Vite 🧡 <a class="header-anchor" href="#acf-blocks-svelte-vite-🧡" aria-label="Permalink to &quot;ACF Blocks + Svelte + Vite 🧡&quot;">​</a></h2><p><a href="https://github.com/mandrasch/ddev-wp-acf-blocks-svelte" target="_blank" rel="noreferrer">https://github.com/mandrasch/ddev-wp-acf-blocks-svelte</a></p><h2 id="pulling-wordpress-ddev-pull" tabindex="-1">Pulling WordPress (ddev pull) <a class="header-anchor" href="#pulling-wordpress-ddev-pull" aria-label="Permalink to &quot;Pulling WordPress (ddev pull)&quot;">​</a></h2><p>DDEV offers an incredible feature called <a href="https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/" target="_blank" rel="noreferrer">Hosting Provider Integration</a>. This enables writing little scripts which can pull databases and files from remote servers to your local development project.</p><p>I wrote an example online tool to help you get started with the basic configuration:</p><ul><li><a href="https://ddev-pull-wp.mandrasch.eu/" target="_blank" rel="noreferrer">https://ddev-pull-wp.mandrasch.eu/</a></li></ul><p>Here is an example video for SSH pull:</p>`,12),d=e('<h3 id="pull-via-ssh" tabindex="-1">Pull via SSH <a class="header-anchor" href="#pull-via-ssh" aria-label="Permalink to &quot;Pull via SSH&quot;">​</a></h3><ul><li>Generator: <a href="https://ddev-pull-wp.mandrasch.eu/" target="_blank" rel="noreferrer">https://ddev-pull-wp.mandrasch.eu/</a></li><li>Docs: <a href="https://github.com/mandrasch/ddev-pull-wp-scripts#%EF%B8%8F--ddev-pull-ssh" target="_blank" rel="noreferrer">https://github.com/mandrasch/ddev-pull-wp-scripts#️--ddev-pull-ssh</a></li></ul><p>More information, maybe slightly outdated:</p><ul><li><a href="https://matthias-andrasch.eu/blog/2022/pull-a-wordpress-site-into-ddev-2022-edition/" target="_blank" rel="noreferrer">https://matthias-andrasch.eu/blog/2022/pull-a-wordpress-site-into-ddev-2022-edition/</a></li></ul><h3 id="pull-via-ssh-into-gitpod-github-codespaces" tabindex="-1">Pull via SSH into Gitpod / GitHub Codespaces <a class="header-anchor" href="#pull-via-ssh-into-gitpod-github-codespaces" aria-label="Permalink to &quot;Pull via SSH into Gitpod / GitHub Codespaces&quot;">​</a></h3><p><em>Did not try this yet</em></p><h3 id="pull-via-backwpup" tabindex="-1">Pull via BackWPup <a class="header-anchor" href="#pull-via-backwpup" aria-label="Permalink to &quot;Pull via BackWPup&quot;">​</a></h3><p>Don&#39;t want to fiddle around with SSH? You can just use the free BackWpUp plugin to create a <code>.zip</code> backup and import it into a DDEV WordPress project.</p><ul><li><p>Generator: <a href="https://ddev-pull-wp.mandrasch.eu/" target="_blank" rel="noreferrer">https://ddev-pull-wp.mandrasch.eu/</a></p></li><li><p>Docs: <a href="https://github.com/mandrasch/ddev-pull-wp-scripts#-ddev-pull-backup" target="_blank" rel="noreferrer">https://github.com/mandrasch/ddev-pull-wp-scripts#-ddev-pull-backup</a></p></li><li><p>Tutorial: <a href="https://dev.to/mandrasch/import-wordpress-site-into-local-project-via-ddev-backwpup-18p6" target="_blank" rel="noreferrer">https://dev.to/mandrasch/import-wordpress-site-into-local-project-via-ddev-backwpup-18p6</a></p></li></ul><h3 id="pull-via-backwpup-into-gitpod" tabindex="-1">Pull via BackWPup into GitPod <a class="header-anchor" href="#pull-via-backwpup-into-gitpod" aria-label="Permalink to &quot;Pull via BackWPup into GitPod&quot;">​</a></h3><p>You can even use DDEV in your browser (via Gitpod cloud), if you don&#39;t have a local development environment currently setup. This could be also a good way to let designers participate in PHP projects in future:</p><ul><li><a href="https://matthias-andrasch.eu/blog/2022/launch-a-wordpress-clone-in-your-browser-via-ddev-gitpod-launcher/" target="_blank" rel="noreferrer">https://matthias-andrasch.eu/blog/2022/launch-a-wordpress-clone-in-your-browser-via-ddev-gitpod-launcher/</a></li></ul><p>TODO: Add screencast TODO: Add more information</p><h2 id="roots-sage-roots-bedrock-old-experiment" tabindex="-1">Roots Sage (+ Roots Bedrock) (old experiment) <a class="header-anchor" href="#roots-sage-roots-bedrock-old-experiment" aria-label="Permalink to &quot;Roots Sage (+ Roots Bedrock) (old experiment)&quot;">​</a></h2><p>Roots offers &quot;Advanced WordPress Development Tools&quot;. I decided to test them with DDEV:</p><ul><li><a href="https://github.com/mandrasch/ddev-bedrock-sage" target="_blank" rel="noreferrer">https://github.com/mandrasch/ddev-bedrock-sage</a></li><li><a href="https://github.com/mandrasch/ddev-wp-sage" target="_blank" rel="noreferrer">https://github.com/mandrasch/ddev-wp-sage</a></li></ul><p>Current open question regarding <a href="https://discourse.roots.io/t/should-links-be-replaced-with-port-3000-as-well-in-dev-mode-hmr-ddev/24026" target="_blank" rel="noreferrer">HMR and internal links</a></p><h2 id="timber-old-experiment" tabindex="-1">Timber (old experiment) <a class="header-anchor" href="#timber-old-experiment" aria-label="Permalink to &quot;Timber (old experiment)&quot;">​</a></h2><p><a href="https://upstatement.com/timber/" target="_blank" rel="noreferrer">Timber</a> &quot;helps you create fully-customized WordPress themes faster with more sustainable code. With Timber, you write your HTML using the Twig Template Engine separate from your PHP files.&quot;.</p><p>I created some example repositories, v2 is currently in beta and my demo is not fully functional yet:</p><ul><li><a href="https://github.com/mandrasch/ddev-wp-timber-v1" target="_blank" rel="noreferrer">https://github.com/mandrasch/ddev-wp-timber-v1</a> (stable)</li><li><a href="https://github.com/mandrasch/ddev-wp-timber-v2" target="_blank" rel="noreferrer">https://github.com/mandrasch/ddev-wp-timber-v2</a> (beta)</li></ul><h2 id="connect-with-community-🤗" tabindex="-1">Connect with community 🤗 <a class="header-anchor" href="#connect-with-community-🤗" aria-label="Permalink to &quot;Connect with community 🤗&quot;">​</a></h2><p>There is a dedicated #WordPress-Channel on <a href="https://discord.gg/hCZFfAMc5k" target="_blank" rel="noreferrer">DDEV discord</a>!</p>',23);function c(h,u,m,b,f,v){const a=r("TwoClickYoutubePrivacy");return o(),l("div",null,[i,t(a,{videoId:"Cn72ix44ex4"}),p,t(a,{videoId:"lEGL65H-hts"}),d])}const y=s(n,[["render",c]]);export{w as __pageData,y as default};
