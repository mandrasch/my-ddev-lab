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

This will install the [Laravel Breeze](https://laravel.com/docs/9.x/starter-kits#laravel-breeze) starter kit. Recently Laravel switched from LaravelMix/Webpack to vite.

```bash

# Install Laravel via DDEV composer
ddev config --project-type=laravel --docroot=public --create-docroot && \
  ddev start && \
  ddev composer create --prefer-dist laravel/laravel && \
  ddev exec "cat .env.example | sed  -E 's/DB_(HOST|DATABASE|USERNAME|PASSWORD)=(.*)/DB_\1=db/g' > .env" && \
  ddev exec 'sed -i "s#APP_URL=.*#APP_URL=${DDEV_PRIMARY_URL}#g" .env' && \
  ddev exec "php artisan key:generate"

# Install breeze starter kit
ddev composer require laravel/breeze --dev
ddev artisan breeze:install
ddev artisan migrate
ddev exec npm install

# Vite integration via https://github.com/torenware/ddev-viteserve
ddev get torenware/ddev-viteserve
# Change VITE_PROJECT_DIR=frontend to VITE_PROJECT_DIR=./
# in .ddev/docker-compose.viteserve.yaml
ddev restart
ddev vite-serve start
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
        host: 'laravel-breeze-test-vite.ddev.site',
    },
});
```

Open the login/ page (vite is not used on the index page) with

```
ddev launch /login
````

Currently it results in:

```bash
GET https://[::]:3000/@vite/client net::ERR_BLOCKED_BY_CLIENT
```

And visiting `<my-site>.ddev.site:3000/@vite/client` results in `Fehlercode: SSL_ERROR_RX_RECORD_TOO_LONG` (Firefox).


## Inertia

<TwoClickYoutubePrivacy videoId="XDn_itJ0s64" />

- https://github.com/mandrasch/ddev-breeze-inertia-vue-starter
