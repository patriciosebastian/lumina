<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MarketingCopy extends Model
{
    protected $table = 'marketing_copy';

    protected $fillable = [
        'key',
        'name',
        'content',
        'type',
    ];

    protected function casts(): array
    {
        return [
            'content' => 'string',
        ];
    }

    public static function getByKey(string $key): ?string
    {
        return static::where('key', $key)->value('content');
    }

    public static function getAllFormatted(): array
    {
        return static::all()->mapWithKeys(function ($item) {
            if ($item->type === 'boolean') {
                return [$item->key => filter_var($item->content, FILTER_VALIDATE_BOOLEAN)];
            }

            return [$item->key => $item->content];
        })->toArray();
    }
}
