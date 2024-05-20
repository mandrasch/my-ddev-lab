---
head:
  - - meta
    - name: description
      content: ""
---

# nginx Proxy for Headless CMS

This is an awesome and clean way of using NodeJS and/or PHP in one project within DDEV!

I'm not quite finished adapting this to work with PHP + NodeJS combined in DDEV, but as I heard some people do it this way already.

The NodeJS project will be in a separate subfolder like `frontend/`, php in the main folder. The trick is the [custom nginx configuration for the NodeJS project](https://github.com/mandrasch/ddev-laravel-breeze-sveltekit/blob/main/.ddev/nginx_full/frontend.conf) + the [additional hostname in .ddev/config.yaml](https://github.com/mandrasch/ddev-laravel-breeze-sveltekit/blob/main/.ddev/config.yaml).

- Classic PHP backend (Laravel) with NodeJS frontend (SvelteKit) https://github.com/mandrasch/ddev-laravel-breeze-sveltekit
- Two NodeJS projects within DDEV https://www.lullabot.com/articles/nodejs-development-ddev
- Another guide: Drupal + NextJS
  https://www.velir.com/ideas/2024/05/13/how-to-run-headless-drupal-and-nextjs-on-ddev

Thanks very much to Andy Blum for writing https://www.lullabot.com/articles/nodejs-development-ddev!
