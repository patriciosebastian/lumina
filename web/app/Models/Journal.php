<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;

class Journal extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'description',
        'user_id',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    /**
     * Get the user that owns the journal.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the journal entries for the journal.
     */
    public function entries(): HasMany
    {
        return $this->hasMany(JournalEntry::class)->orderBy('created_at', 'desc');
    }

    /**
     * Check if the journal can be edited by the given user.
     */
    public function canBeEditedBy(User $user): bool
    {
        return $this->user_id === $user->id;
    }

    /**
     * Get the count of journal entries.
     */
    public function getEntriesCount(): int
    {
        return $this->entries()->count();
    }

    /**
     * Get the latest journal entry.
     */
    public function getLatestEntry(): ?JournalEntry
    {
        return $this->entries()->latest()->first();
    }

    /**
     * Scope a query to only include journals for a specific user.
     */
    public function scopeForUser(Builder $query, User $user): Builder
    {
        return $query->where('user_id', $user->id);
    }

    /**
     * Scope a query to order journals by creation date.
     */
    public function scopeLatest(Builder $query): Builder
    {
        return $query->orderBy('created_at', 'desc');
    }

    /**
     * Get the journal's display name (truncated if too long).
     */
    public function getDisplayNameAttribute(): string
    {
        return strlen($this->name) > 50 ? substr($this->name, 0, 50) . '...' : $this->name;
    }
}