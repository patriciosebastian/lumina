<?php

namespace Database\Factories;

use App\Models\Journal;
use App\Models\JournalEntry;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JournalEntry>
 */
class JournalEntryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\Illuminate\Database\Eloquent\Model>
     */
    protected $model = JournalEntry::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $journal = Journal::factory();
        
        return [
            'title' => $this->faker->sentence(4, true),
            'content' => $this->faker->paragraphs(rand(3, 8), true),
            'journal_id' => $journal,
            'user_id' => function (array $attributes) {
                return Journal::find($attributes['journal_id'])->user_id;
            },
            'created_at' => $this->faker->dateTimeBetween('-3 months', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Indicate that the journal entry should belong to a specific journal.
     */
    public function forJournal(Journal $journal): static
    {
        return $this->state(fn (array $attributes) => [
            'journal_id' => $journal->id,
            'user_id' => $journal->user_id,
        ]);
    }

    /**
     * Indicate that the journal entry should belong to a specific user.
     */
    public function forUser(User $user): static
    {
        return $this->state(fn (array $attributes) => [
            'user_id' => $user->id,
        ]);
    }

    /**
     * Indicate that the journal entry should have a specific title.
     */
    public function withTitle(string $title): static
    {
        return $this->state(fn (array $attributes) => [
            'title' => $title,
        ]);
    }

    /**
     * Indicate that the journal entry should have short content.
     */
    public function short(): static
    {
        return $this->state(fn (array $attributes) => [
            'content' => $this->faker->paragraph(),
        ]);
    }

    /**
     * Indicate that the journal entry should have long content.
     */
    public function long(): static
    {
        return $this->state(fn (array $attributes) => [
            'content' => $this->faker->paragraphs(rand(10, 20), true),
        ]);
    }

    /**
     * Indicate that the journal entry should be created recently.
     */
    public function recent(): static
    {
        return $this->state(fn (array $attributes) => [
            'created_at' => $this->faker->dateTimeBetween('-1 week', 'now'),
        ]);
    }

    /**
     * Indicate that the journal entry should be created today.
     */
    public function today(): static
    {
        return $this->state(fn (array $attributes) => [
            'created_at' => $this->faker->dateTimeBetween('today', 'now'),
        ]);
    }

    /**
     * Create a gratitude journal entry.
     */
    public function gratitude(): static
    {
        return $this->state(fn (array $attributes) => [
            'title' => 'Daily Gratitude - ' . $this->faker->date(),
            'content' => $this->faker->paragraph() . "\n\nToday I'm grateful for:\n" . 
                        "• " . $this->faker->sentence() . "\n" .
                        "• " . $this->faker->sentence() . "\n" .
                        "• " . $this->faker->sentence(),
        ]);
    }

    /**
     * Create a reflection journal entry.
     */
    public function reflection(): static
    {
        return $this->state(fn (array $attributes) => [
            'title' => 'Weekly Reflection - ' . $this->faker->date(),
            'content' => "This week's highlights:\n" . $this->faker->paragraph() . 
                        "\n\nChallenges faced:\n" . $this->faker->paragraph() .
                        "\n\nLessons learned:\n" . $this->faker->paragraph(),
        ]);
    }
}
