<?php

namespace App\Models;

use App\Enums\MessageRole;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Builder;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'role',
        'chat_id',
        'user_id',
    ];

    protected $casts = [
        'role' => MessageRole::class,
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the chat that owns the message.
     */
    public function chat(): BelongsTo
    {
        return $this->belongsTo(Chat::class);
    }

    /**
     * Get the user that owns the message.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Check if the message can be edited by the given user.
     */
    public function canBeEditedBy(User $user): bool
    {
        return $this->user_id === $user->id;
    }

    /**
     * Check if the message is from the user.
     */
    public function isFromUser(): bool
    {
        return $this->role === MessageRole::USER;
    }

    /**
     * Check if the message is from the assistant.
     */
    public function isFromAssistant(): bool
    {
        return $this->role === MessageRole::ASSISTANT;
    }

    /**
     * Scope a query to only include messages for a specific user.
     */
    public function scopeForUser(Builder $query, User $user): Builder
    {
        return $query->where('user_id', $user->id);
    }

    /**
     * Scope a query to only include messages for a specific chat.
     */
    public function scopeForChat(Builder $query, Chat $chat): Builder
    {
        return $query->where('chat_id', $chat->id);
    }

    /**
     * Scope a query to only include user messages.
     */
    public function scopeFromUser(Builder $query): Builder
    {
        return $query->where('role', MessageRole::USER);
    }

    /**
     * Scope a query to only include assistant messages.
     */
    public function scopeFromAssistant(Builder $query): Builder
    {
        return $query->where('role', MessageRole::ASSISTANT);
    }

    /**
     * Scope a query to order messages by creation date.
     */
    public function scopeLatest(Builder $query): Builder
    {
        return $query->orderBy('created_at', 'desc');
    }

    /**
     * Scope a query to order messages by creation date (oldest first).
     */
    public function scopeOldest(Builder $query): Builder
    {
        return $query->orderBy('created_at', 'asc');
    }

    /**
     * Get the message's content preview (truncated).
     */
    public function getContentPreviewAttribute(): string
    {
        $content = strip_tags($this->content);
        return strlen($content) > 100 ? substr($content, 0, 100) . '...' : $content;
    }

    /**
     * Get the word count of the message content.
     */
    public function getWordCountAttribute(): int
    {
        return str_word_count(strip_tags($this->content));
    }

    /**
     * Get the character count of the message content.
     */
    public function getCharacterCountAttribute(): int
    {
        return strlen(strip_tags($this->content));
    }
}