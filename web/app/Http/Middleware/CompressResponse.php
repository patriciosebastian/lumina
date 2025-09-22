<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CompressResponse
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        if ($this->shouldCompress($request, $response)) {
            $content = $response->getContent();

            if ($content && function_exists('gzencode')) {
                $compressed = gzencode($content, 6);

                if ($compressed !== false) {
                    $response->setContent($compressed);
                    $response->headers->set('Content-Encoding', 'gzip');
                    $response->headers->set('Content-Length', strlen($compressed));
                    $response->headers->set('Vary', 'Accept-Encoding');
                }
            }
        }

        return $response;
    }

    /**
     * Determine if the response should be compressed.
     */
    private function shouldCompress(Request $request, Response $response): bool
    {
        if (!str_contains($request->header('Accept-Encoding', ''), 'gzip')) {
            return false;
        }

        return !$response->headers->has('Content-Encoding');
    }
}
