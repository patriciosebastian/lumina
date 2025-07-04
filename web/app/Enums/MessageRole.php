<?php

namespace App\Enums;

enum MessageRole: string
{
    case USER = 'user';
    case ASSISTANT = 'assistant';
    
    public function label(): string
    {
        return match($this) {
            self::USER => 'User',
            self::ASSISTANT => 'Assistant',
        };
    }
    
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
    
    public function isUser(): bool
    {
        return $this === self::USER;
    }
    
    public function isAssistant(): bool
    {
        return $this === self::ASSISTANT;
    }
}