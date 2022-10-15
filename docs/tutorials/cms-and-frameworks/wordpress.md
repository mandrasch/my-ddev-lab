---
head:
  - - meta
    - name: description
      content: "Installing WordPress in DDEV is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI),therefore you can just download WordPress and install it locally:"
---

# WordPress

::: info
🚧 &nbsp; This chapter is work in progress (WIP) . Happy to hear [your feedback / ideas](https://github.com/mandrasch/my-ddev-lab/issues)!
:::

## Quick install

Installing WordPress with [DDEV](https://ddev.readthedocs.io/en/stable/) is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI).

If you create a DDEV project with `ddev config --project-type=wordpress`, a wp-config.php is created which already contains the correct database connection settings (db, db, db) for DDEV.

Therefore it is really easy to install a fresh WordPress with just a few commands:

<TwoClickYoutubePrivacy videoId="Cn72ix44ex4" />

The commands shown in this video:

```bash
mkdir my-wp-site
cd my-wp-site/

# create a new DDEV project inside the newly created folder
# (the primary URL is automatically set to https://<folder>.ddev.site)
ddev config --project-type=wordpress
ddev start

# download latest WordPress (via WP-CLI)
ddev wp core download

# finish the installtion in your browser:
ddev launch
```

Source: [Quick start docs for DDEV + WordPress](https://ddev.readthedocs.io/en/stable/users/cli-usage/#command-line-setup-example-using-wp-cli)

## Pulling WordPress

DDEV offers an incredible feature called [Hosting Provider Integration](https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/). This enables writing little scripts which can pull databases and files from remote servers to your local development project.

I wrote an example online tool to help you get started with the basic configuration:

- https://ddev-pull-wp.mandrasch.eu/

Here is an example video for SSH pull:

<TwoClickYoutubePrivacy videoId="lEGL65H-hts" />

### Pull via SSH

- Generator: https://ddev-pull-wp.mandrasch.eu/
- Docs: https://github.com/mandrasch/ddev-pull-wp-scripts#%EF%B8%8F--ddev-pull-ssh

More information, maybe slightly outdated:

- https://matthias-andrasch.eu/blog/2022/pull-a-wordpress-site-into-ddev-2022-edition/

### Pull via SSH into Gitpod

TODO: Add this method / how to use SSH keys there?

### Pull via BackWPup

Don't want to fiddle around with SSH? You can just use the free BackWpUp plugin to create a `.zip` backup and import it into a DDEV WordPress project.

- Generator: https://ddev-pull-wp.mandrasch.eu/
- Docs: https://github.com/mandrasch/ddev-pull-wp-scripts#-ddev-pull-backup

TODO: Add screencast

More resources, maybe slightly outdated:

- https://matthias-andrasch.eu/blog/2021/import-a-wordpress-site-into-ddev-ddev-pull-backwpupfile/

### Pull via BackWPup into GitPod

You can even use DDEV in your browser (via Gitpod cloud), if you don't have a local development environment currently setup. This could be also a good way to let designers participate in PHP projects in future:

- https://matthias-andrasch.eu/blog/2022/launch-a-wordpress-clone-in-your-browser-via-ddev-gitpod-launcher/

TODO: Add screencast
TODO: Add more information

## Vite integration

- See: https://github.com/mandrasch/ddev-wp-vite-demo

## Roots Sage (+ Roots Bedrock)

Roots offers "Advanced WordPress Development Tools". I decided to test them with DDEV:

- https://github.com/mandrasch/ddev-bedrock-sage
- https://github.com/mandrasch/ddev-wp-sage

Current open question regarding [HMR and internal links](https://discourse.roots.io/t/should-links-be-replaced-with-port-3000-as-well-in-dev-mode-hmr-ddev/24026)

## Timber

[Timber](https://upstatement.com/timber/) "helps you create fully-customized WordPress themes faster with more sustainable code. With Timber, you write your HTML using the Twig Template Engine separate from your PHP files.".

I created some example repositories, v2 is currently in beta and my demo is not fully functional yet:

- https://github.com/mandrasch/ddev-wp-timber-v1 (stable)
- https://github.com/mandrasch/ddev-wp-timber-v2 (beta)

## Connect with community 🤗

There is a dedicated #WordPress-Channel on [DDEV discord](https://discord.gg/hCZFfAMc5k)!
