# Composer

DDEV has built-in support for composer. DDEV has a special command called

```bash
ddev composer create "<package>:<version>"
```

It is basically a wrapper around [composer create-project](https://getcomposer.org/doc/03-cli.md#create-project), but it moves all files to the project folder root automatically after installation.

This is quite handy, because it is very simple to setup a simple php project and pull in a project repository, e.g. [getkirby/starterkit](https://github.com/getkirby/starterkit):

```
mkdir my-new-project
cd my-new-project/
ddev config --project-type=php
ddev composer create getkirby/starterkit
ddev launch
```

Read more in the [official docs](https://ddev.readthedocs.io/en/stable/users/developer-tools/#ddev-and-composer).
