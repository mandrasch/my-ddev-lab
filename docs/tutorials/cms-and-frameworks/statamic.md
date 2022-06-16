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
# Add support for CLI please command
ddev get mandrasch/ddev-please
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

```bash
mkdir my-new-statamic
cd my-new-statamic/
ddev config --project-type=laravel --docroot=public --create-docroot
ddev composer create statamic/statamic
# Add support for CLI please command
ddev get mandrasch/ddev-please
# Install starterkit 
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

Currently fails with

```bash
Composer could not authenticate with GitHub!
Please generate a personal access token at: https://github.com/settings/tokens/new
Then save your token for future use by running the following command:
composer config --global --auth github-oauth.github.com [your-token-here]
Error installing starter kit [studio1902/statamic-peak].
```

See: https://peak.1902.studio/getting-started/installation.html#installation-via-the-cli

**TODO:** Add support for [browsersync / asset compilation](https://github.com/tyler36/ddev-browsersync#laravel-mix-example) via LaravelMix.


## Pull content / media files

DDEV offers an incredible feature called [Hosting Provider Integration](https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/). This enables writing little scripts which can pull files from remote servers to your local development project.

TODO: Add example
