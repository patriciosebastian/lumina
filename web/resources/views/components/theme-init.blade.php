<script>
    (function() {
        const appearance = '{{ $appearance ?? "system" }}'
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
