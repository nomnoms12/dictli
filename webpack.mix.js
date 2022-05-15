const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/index.tsx', 'public/js/app.js')
    .extract()
    .sourceMaps();

if (mix.inProduction()) {
    mix.version();
}

mix.browserSync('localhost:8000');
mix.disableSuccessNotifications();
