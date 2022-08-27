---
head:
  - - meta
    - name: description
      content: ""
---

# Craft CMS

::: info
🚧 &nbsp; This chapter is work in progress (WIP) . Happy to hear [your feedback / ideas](https://github.com/mandrasch/my-ddev-lab/issues)!
:::

## Quickstart

Based on [Intro to CraftCMS: Install](https://craftcms.com/docs/getting-started-tutorial/install/)

```sh
mkdir my-crafty-site
cd my-crafty-site/
ddev config --project-type=php --php-version=8.0 --docroot=web --create-docroot
ddev composer create -y craftcms/craft
# Are you ready to begin the setup? (yes|no) [no]: yes
```

You need to input the following answers

_TODO: How can this be automated?_

> At the end of that command, it will ask whether you’d like to begin the setup. Go ahead and answer yes. Then answer the subsequent prompts as follows:

> Which database driver are you using? (mysql or pgsql) → mysql (default)
> Database server name or IP address → db
> Database port → 3306 (default)
> Database username → db
> Database password → db
> Database name → db
> Database table prefix → (leave blank)

> Answer yes to the prompt on whether to install Craft now, and answer the remaining prompts as you like. The only one that matters is Site URL, which you should answer with https://tutorial.ddev.site.

Source: [Intro to CraftCMS: Install](https://craftcms.com/docs/getting-started-tutorial/install/)

Afterwards:

```sh
ddev launch
```

# **TODO:** If you want to make the repository publicly available via GitHub, you might to move the license key to `.env` https://github.com/craftcms/craft/issues/42

## Deployment via Deployer

- [Deploy Craft CMS with DDEV, Deployer and Ploi on Hetzner Cloud - Part 1](https://dev.to/mandrasch/deploy-craft-cms-with-ddev-deployer-and-ploi-on-hetzner-cloud-part-1-27l2)

## Connect with community

There is a dedicated #craftcms-Channel on [DDEV discord](https://discord.gg/hCZFfAMc5k)!
