import{_ as e,c as t,o as r,a as o}from"./app.b04d529e.js";const g=JSON.parse('{"title":"Typo3","description":"","frontmatter":{"head":[["meta",{"name":"description","content":""}]]},"headers":[{"level":2,"title":"Connect with community \u{1F917}","slug":"connect-with-community-\u{1F917}"}],"relativePath":"tutorials/cms-and-frameworks/typo3.md","lastUpdated":1665821927000}'),a={name:"tutorials/cms-and-frameworks/typo3.md"},s=o('<h1 id="typo3" tabindex="-1">Typo3 <a class="header-anchor" href="#typo3" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>\u{1F6A7} \xA0 This chapter is work in progress (WIP) . Happy to hear <a href="https://github.com/mandrasch/my-ddev-lab/issues" target="_blank" rel="noopener noreferrer">your feedback / ideas</a>!</p></div><p><strong>Quickstart</strong></p><p>For a quickstart see the official typo3 docs: <a href="https://ddev.readthedocs.io/en/latest/users/quickstart/#typo3" target="_blank" rel="noopener noreferrer">https://ddev.readthedocs.io/en/latest/users/quickstart/#typo3</a></p><p>TYPO3 Quick Installation Guide using DDEV, Composer and Sitepackagebuilder:</p><p><a href="https://florian.geierstanger.org/blog/typo3-installation-guide" target="_blank" rel="noopener noreferrer">https://florian.geierstanger.org/blog/typo3-installation-guide</a></p><p>Also a a very good tutorial on how to setup a local DDEV environment for typo3 and deploy everything via Gitlab/Github/Bitbucket pipelines:</p><p><a href="https://t3terminal.com/blog/de/typo3-gitlab-deployment/" target="_blank" rel="noopener noreferrer">https://t3terminal.com/blog/de/typo3-gitlab-deployment/</a></p><p><strong>DDEV providers (pull) integration</strong></p><p>It is easy to pull the <code>fileadmin/</code> and database via <code>ddev pull</code> (<a href="https://ddev.readthedocs.io/en/latest/users/providers/" target="_blank" rel="noopener noreferrer">Hosting integration</a>). See <a href="https://github.com/drud/ddev/blob/master/pkg/ddevapp/dotddev_assets/providers/rsync.yaml.example" target="_blank" rel="noopener noreferrer">rsync example</a>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>WANTED: Example code. If you have a ddev/providers/-script which pulls database and file admin, please let me know!</p></div><ul><li><p>German tutorial with example code for pulling the database: <a href="https://codeblog.at/staging-datenbank-in-ddev-importieren/" target="_blank" rel="noopener noreferrer">https://codeblog.at/staging-datenbank-in-ddev-importieren/</a></p></li><li><p>You could also use an <code>.env</code> file <a href="https://github.com/drud/ddev/discussions/2940#discussioncomment-1665163" target="_blank" rel="noopener noreferrer">https://github.com/drud/ddev/discussions/2940#discussioncomment-1665163</a></p></li><li><p>You could also use typo3 cli <a href="https://twitter.com/Geddo2k/status/1551831449137041408" target="_blank" rel="noopener noreferrer">https://twitter.com/Geddo2k/status/1551831449137041408</a></p></li><li><p>See twitter discussion <a href="https://twitter.com/m_andrasch/status/1552193558857359360" target="_blank" rel="noopener noreferrer">https://twitter.com/m_andrasch/status/1552193558857359360</a></p></li></ul><p><strong>Vite?</strong></p><ul><li>See twitter discussion: <a href="https://twitter.com/kino_auge/status/1539843362127319040" target="_blank" rel="noopener noreferrer">https://twitter.com/kino_auge/status/1539843362127319040</a></li><li>NEW: <a href="https://github.com/fgeierst/typo3-vite-demo" target="_blank" rel="noopener noreferrer">https://github.com/fgeierst/typo3-vite-demo</a></li></ul><h2 id="connect-with-community-\u{1F917}" tabindex="-1">Connect with community \u{1F917} <a class="header-anchor" href="#connect-with-community-\u{1F917}" aria-hidden="true">#</a></h2><p>There is a dedicated #typo3-Channel on <a href="https://discord.gg/hCZFfAMc5k" target="_blank" rel="noopener noreferrer">DDEV discord</a>!</p>',16),n=[s];function i(p,d,l,c,h,u){return r(),t("div",null,n)}var f=e(a,[["render",i]]);export{g as __pageData,f as default};