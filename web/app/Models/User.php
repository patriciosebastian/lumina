<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Cashier\Billable;
use function Illuminate\Events\queueable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;
    use Notifiable;
    use Billable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * The "booted" method of the model.
     */
    protected static function booted(): void
    {
        static::updated(queueable(function (User $customer) {
            if ($customer->hasStripeId()) {
                $customer->syncStripeCustomerDetails();
            }
        }));
    }

    /**
     * Get the journals for the user.
     */
    public function journals(): HasMany
    {
        return $this->hasMany(Journal::class);
    }

    /**
     * Get the chats for the user.
     */
    public function chats(): HasMany
    {
        return $this->hasMany(Chat::class);
    }

    /**
     * Get the journal entries for the user.
     */
    public function journalEntries(): HasMany
    {
        return $this->hasMany(JournalEntry::class);
    }

    /**
     * Get the messages for the user.
     */
    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }

    /**
     * Get the journal entries for the user through journals.
     */
    public function journalEntriesThrough(): HasManyThrough
    {
        return $this->hasManyThrough(JournalEntry::class, Journal::class);
    }

    /**
     * Get the messages for the user through chats.
     */
    public function messagesThrough(): HasManyThrough
    {
        return $this->hasManyThrough(Message::class, Chat::class);
    }

    /**
     * Get the count of journals for the user.
     */
    public function getJournalsCountAttribute(): int
    {
        return $this->journals()->count();
    }

    /**
     * Get the count of chats for the user.
     */
    public function getChatsCountAttribute(): int
    {
        return $this->chats()->count();
    }

    /**
     * Get the count of journal entries for the user.
     */
    public function getJournalEntriesCountAttribute(): int
    {
        return $this->journalEntries()->count();
    }

    /**
     * Get the count of messages for the user.
     */
    public function getMessagesCountAttribute(): int
    {
        return $this->messages()->count();
    }

    /**
     * Get the user's most recent journal.
     */
    public function getLatestJournal(): ?Journal
    {
        return $this->journals()->latest()->first();
    }

    /**
     * Get the user's most recent chat.
     */
    public function getLatestChat(): ?Chat
    {
        return $this->chats()->latest()->first();
    }

    /**
     * Get the user's most recent journal entry.
     */
    public function getLatestJournalEntry(): ?JournalEntry
    {
        return $this->journalEntries()->latest()->first();
    }

    /**
     * Get the user's most recent message.
     */
    public function getLatestMessage(): ?Message
    {
        return $this->messages()->latest()->first();
    }
}
