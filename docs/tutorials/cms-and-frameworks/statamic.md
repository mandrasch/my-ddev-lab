---
head:
  - - meta
    - name: description
      content: ""
---

# Statamic

## Example repositories

- https://github.com/mandrasch/ddev-statamic-blank
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
