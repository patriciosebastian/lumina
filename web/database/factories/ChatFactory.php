<?php

namespace Database\Factories;

use App\Models\Chat;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Chat>
 */
class ChatFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\Illuminate\Database\Eloquent\Model>
     */
    protected $model = Chat::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $chatTopics = [
            'Life Guidance Session',
            'Career Advice Chat',
            'Relationship Help',
            'Personal Growth Discussion',
            'Mindfulness & Meditation',
            'Goal Setting Session',
            'Problem Solving Chat',
            'Emotional Support',
            'Daily Check-in',
            'Spiritual Guidance',
            'Health & Wellness Talk',
            'Creative Inspiration',
            'Learning & Development',
            'Stress Management',
            'Morning Motivation',
        ];

        return [
            'name' => $this->faker->randomElement($chatTopics),
            'user_id' => User::factory(),
            'created_at' => $this->faker->dateTimeBetween('-3 months', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Indicate that the chat should belong to a specific user.
     */
    public function forUser(User $user): static
    {
        return $this->state(fn (array $attributes) => [
            'user_id' => $user->id,
        ]);
    }

    /**
     * Indicate that the chat should have a specific name.
     */
    public function withName(string $name): static
    {
        return $this->state(fn (array $attributes) => [
            'name' => $name,
        ]);
    }

    /**
     * Indicate that the chat should be created recently.
     */
    public function recent(): static
    {
        return $this->state(fn (array $attributes) => [
            'created_at' => $this->faker->dateTimeBetween('-1 week', 'now'),
        ]);
    }

    /**
     * Indicate that the chat should be created today.
     */
    public function today(): static
    {
        return $this->state(fn (array $attributes) => [
            'created_at' => $this->faker->dateTimeBetween('today', 'now'),
        ]);
    }

    /**
     * Create a chat with a career-focused name.
     */
    public function career(): static
    {
        $careerTopics = [
            'Career Transition Help',
            'Job Interview Preparation',
            'Professional Development',
            'Leadership Coaching',
            'Work-Life Balance',
            'Networking Advice',
            'Skill Development Plan',
        ];

        return $this->state(fn (array $attributes) => [
            'name' => $this->faker->randomElement($careerTopics),
        ]);
    }

    /**
     * Create a chat with a personal growth focus.
     */
    public function personalGrowth(): static
    {
        $growthTopics = [
            'Self-Improvement Journey',
            'Confidence Building',
            'Overcoming Fears',
            'Building Better Habits',
            'Emotional Intelligence',
            'Personal Values Exploration',
            'Inner Peace & Mindfulness',
        ];

        return $this->state(fn (array $attributes) => [
            'name' => $this->faker->randomElement($growthTopics),
        ]);
    }

    /**
     * Create a chat with a relationship focus.
     */
    public function relationship(): static
    {
        $relationshipTopics = [
            'Communication Skills',
            'Conflict Resolution',
            'Building Trust',
            'Family Dynamics',
            'Friendship Advice',
            'Setting Boundaries',
            'Love & Dating Guidance',
        ];

        return $this->state(fn (array $attributes) => [
            'name' => $this->faker->randomElement($relationshipTopics),
        ]);
    }
}
