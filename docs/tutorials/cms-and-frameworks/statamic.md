---
head:
  - - meta
    - name: description
      content: ""
---

::: info
This chapter is work in progress (WIP) 🚧, [browsersync / asset compilation](https://github.com/tyler36/ddev-browsersync#laravel-mix-example) needs to be implemented for example. Also support for [vite](https://stackoverflow.com/questions/72130137/ddev-laravel-vite-websockets-with-soketi-trouble-with-port-configuration/72405747) would be awesome. Happy to hear [your feedback / ideas](https://github.com/mandrasch/my-ddev-lab/issues)!
:::

# Statamic

I published a series (work in progress) on dev.to as well: [My Statamic deployment journey](https://dev.to/mandrasch/series/18729).

## Example repositories

- https://github.com/mandrasch/ddev-statamic-blank ([🚀&nbsp; Open in Gitpod](https://gitpod.io/#https://github.com/mandrasch/ddev-statamic-blank/))
- Peak Starter Kit (WIP)

## Quickstart

```bash
mkdir my-new-statamic
cd my-new-statamic/

# Create configuration for DDEV project
ddev config --project-type=laravel --docroot=public --create-docroot

# Install latest statamic via DDEV + composer
# (https://ddev.readthedocs.io/en/stable/users/developer-tools/#ddev-and-composer)
ddev composer create statamic/statamic

# Generate config, set APP_URL & generate key
ddev exec "cp .env.example .env"
ddev exec 'sed -i "/APP_URL=/c APP_URL=$DDEV_PRIMARY_URL" .env'
ddev artisan key:generate

# Add support for CLI please command via simple DDEV-addon:
# (https://github.com/mandrasch/ddev-statamic-please)
ddev get mandrasch/ddev-statamic-please

# Compile JS/SCSS
ddev exec npm install
ddev exec npm run dev

ddev launch
```

Afterwards you can create your admin user:

```bash
ddev please make:user
ddev launch /cp
```

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
# Generate config, set APP_URL & generate key
ddev exec "cp .env.example .env"
ddev artisan key:generate
ddev exec 'sed -i "/APP_URL=/c APP_URL=$DDEV_PRIMARY_URL" .env'
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
(https://discord.com/channels/664580571770388500/912420662847619162/992748945107341372)
- [ ] Add support for Vite as soon as it is implemented officially https://stackoverflow.com/questions/72130137/ddev-laravel-vite-websockets-with-soketi-trouble-with-port-configuration/72405747
- [ ] Implement DDEV pull script as addon(?)

# Bonus info

- If you need database support, just add DDEVs database connection settings to `.env` via `ddev exec "cat .env.example | sed  -E 's/DB_(HOST|DATABASE|USERNAME|PASSWORD)=(.*)/DB_\1=db/g' > .env"`
- https://ddev.com/ddev-local/getting-started-with-ddev-and-composer/
