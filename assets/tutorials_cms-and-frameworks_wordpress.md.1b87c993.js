import{_ as t,c as s,b as r,a as e,o,r as n}from"./app.b04d529e.js";const w=JSON.parse('{"title":"WordPress","description":"Installing WordPress in DDEV is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI),therefore you can just download WordPress and install it locally:","frontmatter":{"head":[["meta",{"name":"description","content":"Installing WordPress in DDEV is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI),therefore you can just download WordPress and install it locally:"}]]},"headers":[{"level":2,"title":"Quick install","slug":"quick-install"},{"level":2,"title":"Pulling WordPress","slug":"pulling-wordpress"},{"level":3,"title":"Pull via SSH","slug":"pull-via-ssh"},{"level":3,"title":"Pull via SSH into Gitpod","slug":"pull-via-ssh-into-gitpod"},{"level":3,"title":"Pull via BackWPup","slug":"pull-via-backwpup"},{"level":3,"title":"Pull via BackWPup into GitPod","slug":"pull-via-backwpup-into-gitpod"},{"level":2,"title":"Vite integration","slug":"vite-integration"},{"level":2,"title":"Roots Sage (+ Roots Bedrock)","slug":"roots-sage-roots-bedrock"},{"level":2,"title":"Timber","slug":"timber"},{"level":2,"title":"Connect with community \u{1F917}","slug":"connect-with-community-\u{1F917}"}],"relativePath":"tutorials/cms-and-frameworks/wordpress.md","lastUpdated":1665821818000}'),l={name:"tutorials/cms-and-frameworks/wordpress.md"},i=e('<h1 id="wordpress" tabindex="-1">WordPress <a class="header-anchor" href="#wordpress" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>\u{1F6A7} \xA0 This chapter is work in progress (WIP) . Happy to hear <a href="https://github.com/mandrasch/my-ddev-lab/issues" target="_blank" rel="noopener noreferrer">your feedback / ideas</a>!</p></div><h2 id="quick-install" tabindex="-1">Quick install <a class="header-anchor" href="#quick-install" aria-hidden="true">#</a></h2><p>Installing WordPress with <a href="https://ddev.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">DDEV</a> is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI).</p><p>If you create a DDEV project with <code>ddev config --project-type=wordpress</code>, a wp-config.php is created which already contains the correct database connection settings (db, db, db) for DDEV.</p><p>Therefore it is really easy to install a fresh WordPress with just a few commands:</p>',6),d=e(`<p>The commands shown in this video:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir my-wp-site</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> my-wp-site/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># create a new DDEV project inside the newly created folder</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># (the primary URL is automatically set to https://&lt;folder&gt;.ddev.site)</span></span>
<span class="line"><span style="color:#A6ACCD;">ddev config --project-type=wordpress</span></span>
<span class="line"><span style="color:#A6ACCD;">ddev start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># download latest WordPress (via WP-CLI)</span></span>
<span class="line"><span style="color:#A6ACCD;">ddev wp core download</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># finish the installtion in your browser:</span></span>
<span class="line"><span style="color:#A6ACCD;">ddev launch</span></span>
<span class="line"></span></code></pre></div><p>Source: <a href="https://ddev.readthedocs.io/en/stable/users/cli-usage/#command-line-setup-example-using-wp-cli" target="_blank" rel="noopener noreferrer">Quick start docs for DDEV + WordPress</a></p><h2 id="pulling-wordpress" tabindex="-1">Pulling WordPress <a class="header-anchor" href="#pulling-wordpress" aria-hidden="true">#</a></h2><p>DDEV offers an incredible feature called <a href="https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/" target="_blank" rel="noopener noreferrer">Hosting Provider Integration</a>. This enables writing little scripts which can pull databases and files from remote servers to your local development project.</p><p>I wrote an example online tool to help you get started with the basic configuration:</p><ul><li><a href="https://ddev-pull-wp.mandrasch.eu/" target="_blank" rel="noopener noreferrer">https://ddev-pull-wp.mandrasch.eu/</a></li></ul><p>Here is an example video for SSH pull:</p>`,8),p=e('<h3 id="pull-via-ssh" tabindex="-1">Pull via SSH <a class="header-anchor" href="#pull-via-ssh" aria-hidden="true">#</a></h3><ul><li>Generator: <a href="https://ddev-pull-wp.mandrasch.eu/" target="_blank" rel="noopener noreferrer">https://ddev-pull-wp.mandrasch.eu/</a></li><li>Docs: <a href="https://github.com/mandrasch/ddev-pull-wp-scripts#%EF%B8%8F--ddev-pull-ssh" target="_blank" rel="noopener noreferrer">https://github.com/mandrasch/ddev-pull-wp-scripts#\uFE0F--ddev-pull-ssh</a></li></ul><p>More information, maybe slightly outdated:</p><ul><li><a href="https://matthias-andrasch.eu/blog/2022/pull-a-wordpress-site-into-ddev-2022-edition/" target="_blank" rel="noopener noreferrer">https://matthias-andrasch.eu/blog/2022/pull-a-wordpress-site-into-ddev-2022-edition/</a></li></ul><h3 id="pull-via-ssh-into-gitpod" tabindex="-1">Pull via SSH into Gitpod <a class="header-anchor" href="#pull-via-ssh-into-gitpod" aria-hidden="true">#</a></h3><p>TODO: Add this method / how to use SSH keys there?</p><h3 id="pull-via-backwpup" tabindex="-1">Pull via BackWPup <a class="header-anchor" href="#pull-via-backwpup" aria-hidden="true">#</a></h3><p>Don&#39;t want to fiddle around with SSH? You can just use the free BackWpUp plugin to create a <code>.zip</code> backup and import it into a DDEV WordPress project.</p><ul><li>Generator: <a href="https://ddev-pull-wp.mandrasch.eu/" target="_blank" rel="noopener noreferrer">https://ddev-pull-wp.mandrasch.eu/</a></li><li>Docs: <a href="https://github.com/mandrasch/ddev-pull-wp-scripts#-ddev-pull-backup" target="_blank" rel="noopener noreferrer">https://github.com/mandrasch/ddev-pull-wp-scripts#-ddev-pull-backup</a></li></ul><p>TODO: Add screencast</p><p>More resources, maybe slightly outdated:</p><ul><li><a href="https://matthias-andrasch.eu/blog/2021/import-a-wordpress-site-into-ddev-ddev-pull-backwpupfile/" target="_blank" rel="noopener noreferrer">https://matthias-andrasch.eu/blog/2021/import-a-wordpress-site-into-ddev-ddev-pull-backwpupfile/</a></li></ul><h3 id="pull-via-backwpup-into-gitpod" tabindex="-1">Pull via BackWPup into GitPod <a class="header-anchor" href="#pull-via-backwpup-into-gitpod" aria-hidden="true">#</a></h3><p>You can even use DDEV in your browser (via Gitpod cloud), if you don&#39;t have a local development environment currently setup. This could be also a good way to let designers participate in PHP projects in future:</p><ul><li><a href="https://matthias-andrasch.eu/blog/2022/launch-a-wordpress-clone-in-your-browser-via-ddev-gitpod-launcher/" target="_blank" rel="noopener noreferrer">https://matthias-andrasch.eu/blog/2022/launch-a-wordpress-clone-in-your-browser-via-ddev-gitpod-launcher/</a></li></ul><p>TODO: Add screencast TODO: Add more information</p><h2 id="vite-integration" tabindex="-1">Vite integration <a class="header-anchor" href="#vite-integration" aria-hidden="true">#</a></h2><ul><li>See: <a href="https://github.com/mandrasch/ddev-wp-vite-demo" target="_blank" rel="noopener noreferrer">https://github.com/mandrasch/ddev-wp-vite-demo</a></li></ul><h2 id="roots-sage-roots-bedrock" tabindex="-1">Roots Sage (+ Roots Bedrock) <a class="header-anchor" href="#roots-sage-roots-bedrock" aria-hidden="true">#</a></h2><p>Roots offers &quot;Advanced WordPress Development Tools&quot;. I decided to test them with DDEV:</p><ul><li><a href="https://github.com/mandrasch/ddev-bedrock-sage" target="_blank" rel="noopener noreferrer">https://github.com/mandrasch/ddev-bedrock-sage</a></li><li><a href="https://github.com/mandrasch/ddev-wp-sage" target="_blank" rel="noopener noreferrer">https://github.com/mandrasch/ddev-wp-sage</a></li></ul><p>Current open question regarding <a href="https://discourse.roots.io/t/should-links-be-replaced-with-port-3000-as-well-in-dev-mode-hmr-ddev/24026" target="_blank" rel="noopener noreferrer">HMR and internal links</a></p><h2 id="timber" tabindex="-1">Timber <a class="header-anchor" href="#timber" aria-hidden="true">#</a></h2><p><a href="https://upstatement.com/timber/" target="_blank" rel="noopener noreferrer">Timber</a> &quot;helps you create fully-customized WordPress themes faster with more sustainable code. With Timber, you write your HTML using the Twig Template Engine separate from your PHP files.&quot;.</p><p>I created some example repositories, v2 is currently in beta and my demo is not fully functional yet:</p><ul><li><a href="https://github.com/mandrasch/ddev-wp-timber-v1" target="_blank" rel="noopener noreferrer">https://github.com/mandrasch/ddev-wp-timber-v1</a> (stable)</li><li><a href="https://github.com/mandrasch/ddev-wp-timber-v2" target="_blank" rel="noopener noreferrer">https://github.com/mandrasch/ddev-wp-timber-v2</a> (beta)</li></ul><h2 id="connect-with-community-\u{1F917}" tabindex="-1">Connect with community \u{1F917} <a class="header-anchor" href="#connect-with-community-\u{1F917}" aria-hidden="true">#</a></h2><p>There is a dedicated #WordPress-Channel on <a href="https://discord.gg/hCZFfAMc5k" target="_blank" rel="noopener noreferrer">DDEV discord</a>!</p>',28);function c(h,u,m,b,v,g){const a=n("TwoClickYoutubePrivacy");return o(),s("div",null,[i,r(a,{videoId:"Cn72ix44ex4"}),d,r(a,{videoId:"lEGL65H-hts"}),p])}var _=t(l,[["render",c]]);export{w as __pageData,_ as default};
