<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;

class Chat extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'user_id',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    /**
     * Get the user that owns the chat.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the messages for the chat.
     */
    public function messages(): HasMany
    {
        return $this->hasMany(Message::class)->orderBy('created_at', 'asc');
    }

    /**
     * Check if the chat can be edited by the given user.
     */
    public function canBeEditedBy(User $user): bool
    {
        return $this->user_id === $user->id;
    }

    /**
     * Get the count of messages in the chat.
     */
    public function getMessagesCount(): int
    {
        return $this->messages()->count();
    }

    /**
     * Get the latest message in the chat.
     */
    public function getLatestMessage(): ?Message
    {
        return $this->messages()->latest()->first();
    }

    /**
     * Get the first message in the chat.
     */
    public function getFirstMessage(): ?Message
    {
        return $this->messages()->oldest()->first();
    }

    /**
     * Scope a query to only include chats for a specific user.
     */
    public function scopeForUser(Builder $query, User $user): Builder
    {
        return $query->where('user_id', $user->id);
    }

    /**
     * Scope a query to order chats by creation date.
     */
    public function scopeLatest(Builder $query): Builder
    {
        return $query->orderBy('created_at', 'desc');
    }

    /**
     * Get the chat's display name (truncated if too long).
     */
    public function getDisplayNameAttribute(): string
    {
        return strlen($this->name) > 50 ? substr($this->name, 0, 50) . '...' : $this->name;
    }

    /**
     * Get a preview of the chat based on the first user message.
     */
    public function getChatPreviewAttribute(): string
    {
        $firstUserMessage = $this->messages()->where('role', 'user')->first();
        
        if (!$firstUserMessage) {
            return 'No messages yet';
        }
        
        $content = strip_tags($firstUserMessage->content);
        return strlen($content) > 100 ? substr($content, 0, 100) . '...' : $content;
    }
}