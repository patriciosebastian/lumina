<script>
    (function() {
        const appearance = '<?php echo e($appearance ?? "system"); ?>'
        if (appearance === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            if (prefersDark) {
                document.documentElement.classList.add('dark');
            }
        }
    })();
</script>

<style>
    html {
        background-color: var(--background);
    }

    html.dark {
        background-color: var(--background);
    }
</style>
<?php /**PATH /var/www/html/resources/views/components/theme-init.blade.php ENDPATH**/ ?>