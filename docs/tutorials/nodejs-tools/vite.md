---
head:
  - - meta
    - name: description
      content: ""
---

# Vite

There is a new plugin for DDEV called [viteserve](https://github.com/torenware/ddev-viteserve) by torenware. It runs vite in the background and has support for package managers npm, yarn and pnpm (default).

You can configure it (after installation) via `.ddev/.env`, here is an example for having vite config in a subfolder. If you want to use the project root, use `VITE_PROJECT_DIR=.`.

```bash
# start vite
VITE_PROJECT_DIR=wp-content/themes/twentytwentytwo-child/
VITE_PRIMARY_PORT=5173
VITE_SECONDARY_PORT=5273
VITE_JS_PACKAGE_MGR=npm
# end vite
```

Vite integration differs by CMS, each CMS has their own approach. Some use a combination of a special NodeJS vite plugin + PHP code, e.g. Laravel. Some only use PHP integration. See examples here:

- Laravel: https://ddev.readthedocs.io/en/stable/users/quickstart/#using-vite
- CraftCMS: https://nystudio107.com/docs/vite/#using-ddev
- Typo3: https://github.com/fgeierst/typo3-vite-demo
- WordPress: https://github.com/mandrasch/ddev-wp-vite-demo

More to come!

## Technical background

The challenge in terms of DDEV is that you should acknowledge that DDEV runs it own reverse proxy and takes care of HTTPS. Vite is just merely waiting in the DDEV container and needs to respond to port 5173 and accept any incoming data traffic. Vite does not(!) need to run https itself.

DDEV then needs to expose the port 5173 via https to the outside, this is done in [docker-compose.viteserve.yaml](https://github.com/torenware/ddev-viteserve/blob/master/docker-compose.viteserve.yaml).

An important first check is that vite is accessible via `https://your-ddev-project.ddev.site::5173/@vite/client?ver=1.0.0` after you run `ddev vite-serve start`.

Afterwards your CMS / PHP frameworks needs to be configured accordingly, see above. The official docs for this can be found here: https://vitejs.dev/guide/backend-integration.html

## Full documentation

See full documentation for DDEV viteserve here: https://github.com/torenware/ddev-viteserve

## Connect with the community 🤗

There are dedicated CMS channels on [DDEV discord](https://discord.gg/hCZFfAMc5k), e.g. for Laravel, WordPress, typo3, CraftCMS, Drupal, etc.!
