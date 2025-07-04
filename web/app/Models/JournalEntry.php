<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Builder;

class JournalEntry extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'journal_id',
        'user_id',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the journal that owns the entry.
     */
    public function journal(): BelongsTo
    {
        return $this->belongsTo(Journal::class);
    }

    /**
     * Get the user that owns the entry.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Check if the entry can be edited by the given user.
     */
    public function canBeEditedBy(User $user): bool
    {
        return $this->user_id === $user->id;
    }

    /**
     * Scope a query to only include entries for a specific user.
     */
    public function scopeForUser(Builder $query, User $user): Builder
    {
        return $query->where('user_id', $user->id);
    }

    /**
     * Scope a query to only include entries for a specific journal.
     */
    public function scopeForJournal(Builder $query, Journal $journal): Builder
    {
        return $query->where('journal_id', $journal->id);
    }

    /**
     * Scope a query to order entries by creation date.
     */
    public function scopeLatest(Builder $query): Builder
    {
        return $query->orderBy('created_at', 'desc');
    }

    /**
     * Get the entry's display title (truncated if too long).
     */
    public function getDisplayTitleAttribute(): string
    {
        return strlen($this->title) > 50 ? substr($this->title, 0, 50) . '...' : $this->title;
    }

    /**
     * Get the entry's content preview (truncated).
     */
    public function getContentPreviewAttribute(): string
    {
        return strlen($this->content) > 200 ? substr(strip_tags($this->content), 0, 200) . '...' : strip_tags($this->content);
    }

    /**
     * Get the word count of the entry content.
     */
    public function getWordCountAttribute(): int
    {
        return str_word_count(strip_tags($this->content));
    }
}