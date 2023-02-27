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

mix.js('resources/js/app.js', 'public/js/inertia').vue()
    .alias({'@': 'resources/js', 'modules': 'Modules'})
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
    
mix.scripts([
    'resources/theme/js/bundle.js',
    'resources/theme/js/scripts.js',
], 'public/theme/js/app.js')

mix.styles([
    'resources/theme/css/dashlite.css',
    'resources/theme/css/theme.css',
], 'public/theme/css/app.css')