import{_ as a,c as t,e as o,a as e,b as s,d as r,r as i,o as d}from"./app.72eea6b2.js";const g='{"title":"Quickly install WordPress with DDEV","description":"Installing WordPress in DDEV is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI),therefore you can just download WordPress and install it locally:","frontmatter":{"head":[["meta",{"name":"description","content":"Installing WordPress in DDEV is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI),therefore you can just download WordPress and install it locally:"}]]},"headers":[{"level":3,"title":"Optional","slug":"optional"}],"relativePath":"tutorials/wordpress/quick-install.md","lastUpdated":1653827144000}',l={},c=e("h1",{id:"quickly-install-wordpress-with-ddev",tabindex:"-1"},[s("Quickly install WordPress with DDEV "),e("a",{class:"header-anchor",href:"#quickly-install-wordpress-with-ddev","aria-hidden":"true"},"#")],-1),p=e("p",null,"Installing WordPress with DDEV is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI).",-1),h=e("p",null,[s("If you create a DDEV project with "),e("code",null,"ddev config --project-type=wordpress"),s(", a wp-config.php is created which already contains the correct database connection settings (db, db, db) for DDEV.")],-1),u=e("p",null,"Therefore it is really easy to install a fresh WordPress with just a few commands:",-1),m=r(`<p>The commands shown in this video:</p><div class="language-bash"><pre><code><span class="token function">mkdir</span> my-wp-site
<span class="token builtin class-name">cd</span> my-wp-site/

<span class="token comment"># create a new DDEV project inside the newly created folder</span>
<span class="token comment"># (the primary URL is automatically set to https://&lt;folder&gt;.ddev.site)</span>
ddev config --project-type<span class="token operator">=</span>wordpress
ddev start

<span class="token comment"># download latest WordPress (via WP-CLI)</span>
ddev wp core download

<span class="token comment"># finish the installtion in your browser:</span>
ddev launch
</code></pre></div><p><a href="https://ddev.readthedocs.io/en/stable/users/cli-usage/#command-line-setup-example-using-wp-cli" target="_blank" rel="noopener noreferrer">Official docs</a></p><h3 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-hidden="true">#</a></h3><div class="language-"><pre><code>
# optional: you can use the following installation command

# or finish the installation in the browser (see next step, run ddev launch)

# (we need to use single quotes to get the primary site URL from .ddev/config.yaml as variable)

\`ddev wp core install --url=&#39;$DDEV_PRIMARY_URL&#39; --title=&#39;New-WordPress&#39; --admin_user=admin --admin_email=admin@example.com --prompt=admin_password\`

# open the website (https://my-wp-site.ddev.site) in your browser:

# open WordPress admin dashboard in your browser:

ddev launch wp-admin/

</code></pre></div><div class="language-"><pre><code>
</code></pre></div>`,6);function _(w,f,v,y,D,P){const n=i("TwoClickYoutubePrivacy");return d(),t("div",null,[c,p,h,u,o(n,{videoId:"Cn72ix44ex4"}),m])}var k=a(l,[["render",_]]);export{g as __pageData,k as default};
