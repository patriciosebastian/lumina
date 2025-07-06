<?php

namespace Database\Seeders;

use App\Models\Journal;
use App\Models\JournalEntry;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JournalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        
        if ($users->isEmpty()) {
            $users = User::factory()->count(5)->create();
        }

        $users->each(function (User $user) {
            $journalCount = rand(2, 4);
            
            for ($i = 0; $i < $journalCount; $i++) {
                $journal = Journal::factory()
                    ->forUser($user)
                    ->create();

                $this->createJournalEntries($journal);
            }
        });

        $this->createExampleJournals();
    }

    /**
     * Create journal entries for a given journal.
     */
    private function createJournalEntries(Journal $journal): void
    {
        $entryCount = rand(3, 12);

        for ($i = 0; $i < $entryCount; $i++) {
            $createdAt = fake()->dateTimeBetween('-3 months', 'now');
            
            JournalEntry::factory()
                ->forJournal($journal)
                ->create([
                    'created_at' => $createdAt,
                    'updated_at' => fake()->dateTimeBetween($createdAt, 'now'),
                ]);
        }

        // Add some special entry types
        if (rand(1, 3) === 1) {
            JournalEntry::factory()
                ->forJournal($journal)
                ->gratitude()
                ->create();
        }

        if (rand(1, 3) === 1) {
            JournalEntry::factory()
                ->forJournal($journal)
                ->reflection()
                ->create();
        }
    }

    /**
     * Create some example journals with specific themes.
     */
    private function createExampleJournals(): void
    {
        $firstUser = User::first();
        
        if (!$firstUser) {
            return;
        }

        $gratitudeJournal = Journal::factory()
            ->forUser($firstUser)
            ->withName('Daily Gratitude')
            ->create([
                'description' => 'A place to record daily moments of gratitude and appreciation.'
            ]);

        for ($i = 0; $i < 10; $i++) {
            JournalEntry::factory()
                ->forJournal($gratitudeJournal)
                ->gratitude()
                ->create([
                    'created_at' => fake()->dateTimeBetween('-1 month', 'now'),
                ]);
        }

        $growthJournal = Journal::factory()
            ->forUser($firstUser)
            ->withName('Personal Growth Journey')
            ->create([
                'description' => 'Tracking my personal development and self-improvement journey.'
            ]);

        for ($i = 0; $i < 6; $i++) {
            JournalEntry::factory()
                ->forJournal($growthJournal)
                ->reflection()
                ->create([
                    'created_at' => fake()->dateTimeBetween('-2 months', 'now'),
                ]);
        }

        $dreamJournal = Journal::factory()
            ->forUser($firstUser)
            ->withName('Dream Journal')
            ->create([
                'description' => 'Recording my dreams and subconscious thoughts.'
            ]);

        for ($i = 0; $i < 8; $i++) {
            JournalEntry::factory()
                ->forJournal($dreamJournal)
                ->create([
                    'title' => 'Dream - ' . fake()->date(),
                    'content' => 'Last night I dreamed about ' . fake()->sentence() . 
                                ' The dream felt very ' . fake()->randomElement(['vivid', 'peaceful', 'strange', 'meaningful']) . 
                                '. ' . fake()->paragraph(),
                    'created_at' => fake()->dateTimeBetween('-1 month', 'now'),
                ]);
        }
    }
}
