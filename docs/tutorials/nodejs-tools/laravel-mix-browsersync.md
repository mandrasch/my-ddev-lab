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

Unfortunately the docs only reflect HTTP usage currently, for HTTPS see:

- https://github.com/drud/ddev-browsersync/pull/21

For HTTPS you need to use:

```yaml
# .ddev/docker-compose.browsersync.yaml
# Override the web container's standard HTTP_EXPOSE and HTTPS_EXPOSE
# This is to expose the browsersync port.
version: "3.6"
services:
  web:
    expose:
      - "3000"
    environment:
      - HTTP_EXPOSE=${DDEV_ROUTER_HTTP_PORT}:80,${DDEV_MAILHOG_PORT}:8025,3001:3000
      - HTTPS_EXPOSE=${DDEV_ROUTER_HTTPS_PORT}:80,${DDEV_MAILHOG_HTTPS_PORT}:8025,3000:3000
```

Make sure to run `ddev restart` afterwards.

## Laravel Mix + Browsersync

- https://github.com/tyler36/ddev-browsersync#laravel-mix-example

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
