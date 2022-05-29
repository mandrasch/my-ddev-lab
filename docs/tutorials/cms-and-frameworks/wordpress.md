---
head:
  - - meta
    - name: description
      content: "Installing WordPress in DDEV is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI),therefore you can just download WordPress and install it locally:"
---

# WordPress

## Quick install

Installing WordPress with DDEV is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI).

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

[Official docs](https://ddev.readthedocs.io/en/stable/users/cli-usage/#command-line-setup-example-using-wp-cli)

## Pulling WordPress

DDEV offers an incredible feature called [Hosting Provider Integration](https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/). This enables writing little scripts which can pull databases and files from remote servers to your local development project.

- TODO: Move docs from https://github.com/mandrasch/ddev-pull-wp-scripts to this documenation.
- TODO: Move blog posts?
  - https://matthias-andrasch.eu/blog/2022/launch-a-wordpress-clone-in-your-browser-via-ddev-gitpod-launcher/
  - https://matthias-andrasch.eu/blog/2022/pull-a-wordpress-site-into-ddev-2022-edition/
  - https://matthias-andrasch.eu/blog/2021/import-a-wordpress-site-into-ddev-ddev-pull-backwpupfile/
- What about online tool? https://ddev-pull-wp.mandrasch.eu/

### Pull via BackWPup

TODO: Add screencast

- https://github.com/mandrasch/ddev-pull-wp-scripts#-ddev-pull-backup

TODO: Add content

### Pull via BackWPup into GitPod

TODO: Add screencast

- https://github.com/mandrasch/ddev-pull-wp-scripts#-ddev-pull-backup
- https://matthias-andrasch.eu/blog/2022/launch-a-wordpress-clone-in-your-browser-via-ddev-gitpod-launcher/

TODO: Add content

### Pull via SSH

- https://github.com/mandrasch/ddev-pull-wp-scripts#%EF%B8%8F--ddev-pull-ssh

<TwoClickYoutubePrivacy videoId="lEGL65H-hts" />

### Pull via SSH into Gitpod

TODO: Add content / how to use SSH keys there?
