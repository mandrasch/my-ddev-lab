---
head:
  - - meta
    - name: description
      content: ""
---

# Vite (in PHP CMS)

NEW: I wrote a detailed guide here: https://ddev.com/blog/working-with-vite-in-ddev/

## Expose all the ports!!1

The most important thing for vite is to expose the vite port (5173) so that it can be accessed from outside the DDEV docker container (= from your laptop).

Thanks to DDEV, this is quite simple. Just add the following to the `.ddev/config.yaml`, the http_port does not really matter.

```yaml
# .ddev/config.yaml
web_extra_exposed_ports:
  - name: node-vite
    container_port: 5173
    http_port: 5172
    https_port: 5173
```

⚠️ A `ddev restart` is needed after that.

You can check the current status via `ddev describe`. See DDEV docs for more information on [web_extra_exposed_ports](https://ddev.readthedocs.io/en/stable/users/extend/customization-extendibility/#exposing-extra-ports-via-ddev-router).

## Using vite in frameworks / CMS

Vite integration differs by CMS, each CMS has their own approach. Some use a combination of a special NodeJS vite plugin + PHP code (Laravel). Some use vite as it is and use PHP integration for including the vite client scripts accordingly.

See some examples here:

### Laravel

- https://github.com/mandrasch/ddev-laravel-vite
- https://github.com/mandrasch/ddev-laravel-breeze-vite/ (Outdated, needs changes)
- https://github.com/tyler36/lara10-base-demo/

### CraftCMS

- https://github.com/mandrasch/ddev-craftcms-vite
- See: https://nystudio107.com/docs/vite/#using-ddev
- https://twitter.com/thomasbendl/status/1628741476355112962 / https://github.com/szenario-fordesigners/craft-vite-starter

### TYPO3

- https://github.com/fgeierst/typo3-vite-demo by Florian Geierstanger
- https://github.com/mandrasch/ddev-typo3-vite-svelte (WIP)

### WordPress

- WordPress: https://github.com/mandrasch/ddev-wp-vite-demo (OLD)
- NEW: https://github.com/mandrasch/ddev-typo3-vite-svelte
- NEW: https://github.com/mandrasch/ddev-wp-acf-blocks-svelte

## Technical background

The challenge in terms of DDEV is that you should acknowledge that DDEV runs it own reverse proxy and takes care of HTTPS. Vite is just merely waiting in the DDEV container and needs to respond to port 5173 and accept any incoming data traffic. Vite does not(!) need to run https itself.

DDEV then needs to expose the port 5173 via https to the outside, this is done in [docker-compose.viteserve.yaml](https://github.com/torenware/ddev-viteserve/blob/master/docker-compose.viteserve.yaml).

An important first check is that vite is accessible via `https://your-ddev-project.ddev.site:5173/@vite/client?ver=1.0.0` after you run `ddev vite-serve start`.

Afterwards your CMS / PHP frameworks needs to be configured accordingly, see above. The official docs for this can be found here: https://vitejs.dev/guide/backend-integration.html

## Codespaces

Codespaces works differently since there is no ddev router used. Therefore exposing ports via `.ddev/config.yaml` will not work. You need to use docker compose file again, see e.g. https://github.com/mandrasch/ddev-craftcms-vite/blob/main/.devcontainer/postCreateCommand.sh for a workaround.

## Connect with the community 🤗

There are dedicated CMS channels on [DDEV discord](https://discord.gg/hCZFfAMc5k), e.g. for Laravel, WordPress, typo3, CraftCMS, Drupal, etc.!
