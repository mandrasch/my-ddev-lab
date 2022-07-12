# Laravel

This is the quickstart for the latest Laravel version:

```bash
ddev config --project-type=laravel --docroot=public --create-docroot && \
  ddev start && \
  ddev composer create --prefer-dist laravel/laravel && \
  ddev exec "cat .env.example | sed  -E 's/DB_(HOST|DATABASE|USERNAME|PASSWORD)=(.*)/DB_\1=db/g' > .env" && \
  ddev exec 'sed -i "s#APP_URL=.*#APP_URL=${DDEV_PRIMARY_URL}#g" .env' && \
  ddev exec "php artisan key:generate"
```

Source: [DDEV docs](https://ddev.readthedocs.io/en/stable/users/cli-usage/#laravel-composer-setup-example)

## Starter kits (with vite)

### Breeze

🚧 Work in progress, currently not working 🚧

This will install the [Laravel Breeze](https://laravel.com/docs/9.x/starter-kits#laravel-breeze) starter kit. Recently Laravel switched from LaravelMix/Webpack to vite. Thanks to @torenware for the DDEV vite addon.

Demo repository: https://github.com/mandrasch/ddev-laravel-breeze-vite

```bash
# Install Laravel via DDEV composer
ddev config --project-type=laravel --docroot=public --create-docroot && \
  ddev start && \
  ddev composer create --prefer-dist laravel/laravel && \
  ddev exec "cat .env.example | sed  -E 's/DB_(HOST|DATABASE|USERNAME|PASSWORD)=(.*)/DB_\1=db/g' > .env" && \
  ddev exec 'sed -i "s#APP_URL=.*#APP_URL=${DDEV_PRIMARY_URL}#g" .env' && \
  ddev exec "php artisan key:generate"

# Install breeze starter kit
ddev composer require laravel/breeze --dev && \
  ddev artisan breeze:install && \
  ddev artisan migrate && \
  ddev exec npm install

# Vite integration via https://github.com/torenware/ddev-viteserve
# Thanks very much to @torenware!
ddev get torenware/ddev-viteserve
```

Change `VITE_PROJECT_DIR=frontend` to `VITE_PROJECT_DIR=./` in `.ddev/docker-compose.viteserve.yaml`:

```yaml
    environment:
      # Set the vite-enabled js project here:
      - VITE_PROJECT_DIR=./
```

Add https and host URL to `vite.config.js`

```javascript
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
    ],
    server: {
        https: true,
        port: 3001,
        hmr: {
          host: 'laravel-breeze-test-vite.ddev.site'
        }
    },
});
```


**IMPORTANT:** There was a bug in [laravel-vite-plugin](https://www.npmjs.com/package/laravel-vite-plugin), which did not use hmr.host for the blade @vite template. Update to [v.0.3](https://github.com/laravel/vite-plugin/releases/tag/v0.3.0) with

```bash
ddev exec npm install laravel-vite-plugin@latest
```

Run the following to apply this:

```bash
ddev restart
ddev vite-serve start
```

Open the login/ page (vite is not used on the index page) with

```
ddev launch /login
````

Also getting these warnings

```bash
/ddev-laravel-breeze-vite % ddev vite-serve start
 WARN  Moving @tailwindcss/forms that was installed by a different package manager to "node_modules/.ignored
 WARN  Moving alpinejs that was installed by a different package manager to "node_modules/.ignored
 WARN  Moving autoprefixer that was installed by a different package manager to "node_modules/.ignored
 WARN  Moving axios that was installed by a different package manager to "node_modules/.ignored
 WARN  Moving laravel-vite-plugin that was installed by a different package manager to "node_modules/.ignored
 WARN  4 other warnings
```

Current progress:

- https://github.com/torenware/ddev-viteserve/issues/2


## Inertia

<TwoClickYoutubePrivacy videoId="XDn_itJ0s64" />

- https://github.com/mandrasch/ddev-breeze-inertia-vue-starter
