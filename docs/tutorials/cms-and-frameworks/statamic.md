---
head:
  - - meta
    - name: description
      content: ""
---

::: info
This chapter is work in progress (WIP), [browsersync / asset compilation](https://github.com/tyler36/ddev-browsersync#laravel-mix-example) needs to be implemented for example. Happy to hear [your feedback / ideas](https://github.com/mandrasch/my-ddev-lab/issues)!
:::

# Statamic

## Example repositories

- https://github.com/mandrasch/ddev-statamic-blank ([🚀&nbsp; Open in Gitpod](https://gitpod.io/#https://github.com/mandrasch/ddev-statamic-blank/))
- Peak Starter Kit (WIP)

## Quickstart

```bash
mkdir my-new-statamic
cd my-new-statamic/
ddev config --project-type=laravel --docroot=public --create-docroot
ddev composer create statamic/statamic
ddev exec "cp .env.example .env"
ddev artisan key:generate
ddev launch
```

Set the APP_URL to ddev project URL in .env, e.g. `APP_URL=https://ddev-statamic-blank.ddev.site`

Add support for `please` command in `.ddev/commands/web`:
https://github.com/mandrasch/ddev-statamic-blank/blob/main/.ddev/commands/web/please

Afterwards you can create your admin user:

```bash
ddev please make:user
ddev launch /cp
```

## Install a starter kit (Peak)

1. Follow quickstart above
2. Run `ddev please starter-kit:install studio1902/statamic-peak`

Currently fails with

```bash
Composer could not authenticate with GitHub!
Please generate a personal access token at: https://github.com/settings/tokens/new
Then save your token for future use by running the following command:
composer config --global --auth github-oauth.github.com [your-token-here]
Error installing starter kit [studio1902/statamic-peak].
```

See: https://peak.1902.studio/getting-started/installation.html#installation-via-the-cli
