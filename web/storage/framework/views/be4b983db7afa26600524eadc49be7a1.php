<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>" class="<?php echo \Illuminate\Support\Arr::toCssClasses(['dark' => ($appearance ?? 'system') == 'dark']); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

        <?php if (isset($component)) { $__componentOriginalff3018920f514a2a3356c625e214876e = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalff3018920f514a2a3356c625e214876e = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'components.theme-init','data' => []] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('theme-init'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalff3018920f514a2a3356c625e214876e)): ?>
<?php $attributes = $__attributesOriginalff3018920f514a2a3356c625e214876e; ?>
<?php unset($__attributesOriginalff3018920f514a2a3356c625e214876e); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalff3018920f514a2a3356c625e214876e)): ?>
<?php $component = $__componentOriginalff3018920f514a2a3356c625e214876e; ?>
<?php unset($__componentOriginalff3018920f514a2a3356c625e214876e); ?>
<?php endif; ?>

        <title inertia>Lumina</title>

        <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
        <link rel="preload" href="https://fonts.bunny.net/css?family=dm-sans:200,300,400,500,600,700,800,900" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://fonts.bunny.net/css?family=dm-sans:200,300,400,500,600,700,800,900"></noscript>

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Lumina" />
        <link rel="manifest" href="/site.webmanifest" />

        
        <script defer data-domain="chatwithlumina.com" src="https://plausible.io/js/script.hash.tagged-events.js"></script>

        <?php echo app('Tighten\Ziggy\BladeRouteGenerator')->generate(); ?>
        <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
        
        <?php echo app('Illuminate\Foundation\Vite')(['resources/js/app.tsx']); ?>
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->head; } ?>
    </head>
    <body class="font-sans antialiased">
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->body; } else { ?><div id="app" data-page="<?php echo e(json_encode($page)); ?>"></div><?php } ?>
    </body>
</html>
<?php /**PATH /var/www/html/resources/views/app.blade.php ENDPATH**/ ?>