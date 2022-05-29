---
head:
  - - meta
    - name: description
      content: "Installing WordPress in DDEV is super simple. DDEV has already built-in support for the WordPress Command Line Tools (WP-CLI),therefore you can just download WordPress and install it locally:"
---

# Quickly install WordPress with DDEV

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

### Optional

```

# optional: you can use the following installation command

# or finish the installation in the browser (see next step, run ddev launch)

# (we need to use single quotes to get the primary site URL from .ddev/config.yaml as variable)

`ddev wp core install --url='$DDEV_PRIMARY_URL' --title='New-WordPress' --admin_user=admin --admin_email=admin@example.com --prompt=admin_password`

# open the website (https://my-wp-site.ddev.site) in your browser:

# open WordPress admin dashboard in your browser:

ddev launch wp-admin/

```

```

```
