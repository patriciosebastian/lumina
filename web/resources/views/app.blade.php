<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <x-theme-init />

        <title inertia>SALOS</title>

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=dm-sans:200,300,400,500,600,700,800,900" rel="stylesheet" />

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="SALOS" />
        <link rel="manifest" href="/site.webmanifest" />

        {{-- Plausible Analytics --}}
        <script defer data-domain="salosai.com" src="https://plausible.io/js/script.hash.tagged-events.js"></script>

        @routes
        @viteReactRefresh
        {{-- @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"]) --}}
        @vite(['resources/js/app.tsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
