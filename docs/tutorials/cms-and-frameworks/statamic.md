---
head:
  - - meta
    - name: description
      content: ""
---

::: info
This chapter is work in progress (WIP) 🚧, [browsersync / asset compilation](https://github.com/tyler36/ddev-browsersync#laravel-mix-example) needs to be implemented for example. Happy to hear [your feedback / ideas](https://github.com/mandrasch/my-ddev-lab/issues)!
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
# Add support for CLI please command:
ddev get mandrasch/ddev-statamic-please
# Set the APP_URL to ddev project URL in .env,
# e.g. APP_URL=https://ddev-statamic-blank.ddev.site
# TODO: automate this step as well via bash command
ddev launch
```

Afterwards you can create your admin user:

```bash
ddev please make:user
ddev launch /cp
```

**TODO:** Add support for [browsersync / asset compilation](https://github.com/tyler36/ddev-browsersync#laravel-mix-example) via LaravelMix.

## Install a starter kit (Peak)

https://peak.1902.studio/

```bash
mkdir my-new-statamic
cd my-new-statamic/
ddev config --project-type=laravel --docroot=public --create-docroot
ddev composer create statamic/statamic
# Add support for CLI please command:
ddev get mandrasch/ddev-statamic-please
# Install starter kit 
ddev please starter-kit:install studio1902/statamic-peak
# Generate config & key
ddev exec "cp .env.example .env"
ddev artisan key:generate
# Set the APP_URL to ddev project URL in .env,
# e.g. APP_URL=https://ddev-statamic-blank.ddev.site
# TODO: automate this step as well via bash command
ddev launch
```

Afterwards you can create your admin user:

```bash
ddev please make:user
ddev launch /cp
```

General source: https://peak.1902.studio/getting-started/installation.html#installation-via-the-cli

**TODO:** Add support for [browsersync / asset compilation](https://github.com/tyler36/ddev-browsersync#laravel-mix-example) via LaravelMix.

### Troubleshooting

If the starter kit install fails with `Composer could not authenticate with GitHub!`, [generate a token with no permissions](https://github.com/settings/tokens/new) on GitHub and store it to DDEV:

```bash
ddev composer config --global --auth github-oauth.github.com [your-token-here]
```

## Pull content / media files

DDEV offers an incredible feature called [Hosting Provider Integration](https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/). This enables writing little scripts which can pull files from remote servers to your local development project.

### Git strategy

To use push, we'll ignore the content folder in git locally:

Add `/content to `.gitignore`

TODO: Add example
