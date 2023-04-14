---
head:
  - - meta
    - name: description
      content: ""
---

# NodeJS (build) tools

Information: The vite docs were moved to [vite subpage](vite.html).

## Browsersync

There is a great plugin for DDEV made by tyler36:

- https://github.com/tyler36/ddev-browsersync

## Laravel Mix + Browsersync

- https://github.com/tyler36/ddev-browsersync#laravel-mix-example
- Examples:
  - https://github.com/mandrasch/ddev-typo3-mix-svelte

In some projects I needed to use also the following in the footer of my template:

```php
@if (getenv('APP_ENV') === 'local')
  <script id="__bs_script__">//<![CDATA[
    document.write("<script async src='https://HOST:3000/browser-sync/browser-sync-client.js'></script>".replace("HOST", location.hostname));
    //]]>
  </script>
@endif
```

## Connect with the community 🤗

There are dedicated CMS channels on [DDEV discord](https://discord.gg/hCZFfAMc5k), e.g. for Laravel, WordPress, typo3, CraftCMS, Drupal, etc.!
