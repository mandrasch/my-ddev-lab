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
# (https://github.com/mandrasch/ddev-statamic-please)
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

**TODO:** 
### Troubleshooting

If the starter kit install fails with `Composer could not authenticate with GitHub!`, [generate a token with no permissions](https://github.com/settings/tokens/new) on GitHub and store it to DDEV:

```bash
ddev composer config --global --auth github-oauth.github.com [your-token-here]
```

## Pull content / media files from production

::: info
This chapter is work in progress (WIP) 🚧
:::

DDEV offers an incredible feature called [Hosting Provider Integration](https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/). This enables writing little scripts which can pull files from remote servers to your local development project.

Disclaimer: Statamic offers [Git automation](https://statamic.dev/git-automation). This approach is not used here, since I want to separate config (git) from site content (on live server). 

First add these lines to your `.gitignore` file. We will pull the site specific content from the production / live site and don't store it in git.

```bash
# Don't store site specific content, we'll pull it from live site
# (Comment these lines if you wan't to use Git automation)
/content
/users
/public/assets
/storage/forms/
```

TODO: Add example for pull of these directories to local DDEV / use extension/.zip to implement this as well?

## TODOs

- [ ] Add support for [browsersync / asset compilation](https://github.com/tyler36/ddev-browsersync#laravel-mix-example) via LaravelMix.
- [ ] Add simple command to quickstart for replacing .env APP_URL with DDEV_PRIMARY_URL (https://discord.com/channels/664580571770388500/912420662847619162/992748945107341372)
- [ ] Add support for Vite as soon as it is implemented officially
- [ ] Implement DDEV pull as addon

