# Laravel

::: info
🚧 &nbsp; This chapter is work in progress (WIP) . Happy to hear [your feedback / ideas](https://github.com/mandrasch/my-ddev-lab/issues)!
:::

This is the quickstart for the latest Laravel version with NodeJS LTS:

```bash
ddev config --project-type=laravel --docroot=public --create-docroot --php-version=8.1 --nodejs-version=18
ddev composer create --prefer-dist --no-install --no-scripts laravel/laravel -y
ddev composer install
ddev artisan key:generate
ddev launch
```

Source: Official [DDEV quick start docs](https://ddev.readthedocs.io/en/stable/users/quickstart/#laravel), slightly modified

## Vite support

See the README of [ddev-laravel-vite](https://github.com/mandrasch/ddev-laravel-vite).

- https://github.com/mandrasch/ddev-laravel-vite (WIP / NEW)
- https://github.com/mandrasch/ddev-laravel-breeze-vite/ (Outdated, needs changes)

Also check out [DDEV + vite](/tutorials/nodejs-tools/vite) for more technical information.

## Connect with the community 🤗

Check out [DDEV Discord](https://discord.gg/hCZFfAMc5k)!

<hr>

Outdated documentation:

## Inertia

<TwoClickYoutubePrivacy videoId="XDn_itJ0s64" />

- https://github.com/mandrasch/ddev-breeze-inertia-vue-starter (outdated)

Would be also cool to test Statamic, LiveWire, etc. 🤗
