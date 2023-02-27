<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <!-- Scripts -->
        @routes
        <link rel="stylesheet" href="{{ mix('theme/css/app.css') }}">
        <script src="{{ mix('js/inertia/app.js') }}" defer></script>
        <script src="{{ mix('theme/js/app.js') }}" defer></script>
        @inertiaHead
    </head>
    <body class="nk-body npc-default has-apps-sidebar has-sidebar no-touch nk-nio-theme">
        <div class="nk-app-root">
            @inertia
        </div>
    </body>
</html>
