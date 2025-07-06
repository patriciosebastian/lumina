<?php

namespace Database\Factories;

use App\Enums\MessageRole;
use App\Models\Chat;
use App\Models\Message;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Message>
 */
class MessageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\Illuminate\Database\Eloquent\Model>
     */
    protected $model = Message::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $chat = Chat::factory();
        $role = $this->faker->randomElement([MessageRole::USER, MessageRole::ASSISTANT]);

        return [
            'content' => $this->generateContentForRole($role),
            'role' => $role,
            'chat_id' => $chat,
            'user_id' => function (array $attributes) {
                return Chat::find($attributes['chat_id'])->user_id;
            },
            'created_at' => $this->faker->dateTimeBetween('-2 months', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate content based on the message role.
     */
    private function generateContentForRole(MessageRole $role): string
    {
        if ($role === MessageRole::USER) {
            return $this->generateUserContent();
        }
        
        return $this->generateAssistantContent();
    }

    /**
     * Generate realistic user message content.
     */
    private function generateUserContent(): string
    {
        $userMessages = [
            "I'm feeling overwhelmed with work lately. Can you help me figure out how to manage my stress?",
            "I want to start a new habit but I keep procrastinating. Any advice?",
            "I'm having trouble communicating with my partner. What should I do?",
            "I feel like I'm not making progress toward my goals. How can I stay motivated?",
            "I'm struggling with self-confidence. How can I build more confidence?",
            "I want to make a career change but I'm scared. What steps should I take?",
            "I'm feeling lonely and isolated. How can I connect with others?",
            "I'm having trouble sleeping and it's affecting my daily life. Any suggestions?",
            "I want to be more mindful and present. Where should I start?",
            "I'm dealing with a difficult family situation. How should I handle it?",
            "I feel stuck in my current situation. How can I create positive change?",
            "I'm working on forgiving someone who hurt me. It's really hard.",
            "I want to develop better boundaries with people. How do I start?",
            "I'm feeling anxious about the future. How can I find peace?",
            "I want to discover my life purpose. Where do I begin?",
        ];

        return $this->faker->randomElement($userMessages);
    }

    /**
     * Generate realistic assistant message content.
     */
    private function generateAssistantContent(): string
    {
        $assistantMessages = [
            "When you feel overwhelmed, remember Philippians 4:6-7: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.' Let's pray and seek God's peace together. What would you like to bring before Him?",
            "Building new habits can be hard, but Galatians 6:9 encourages us: 'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.' Let's ask God for perseverance and wisdom as you start this new journey.",
            "James 1:19 says, 'Everyone should be quick to listen, slow to speak and slow to become angry.' Healthy communication is rooted in love and patience. How can you invite God into your conversations with your partner?",
            "If you feel stuck, remember Proverbs 3:5-6: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.' Let's pray for guidance and renewed motivation.",
            "Psalm 139:14 reminds us, 'I praise you because I am fearfully and wonderfully made.' Your worth comes from God. What situations challenge your confidence, and how can we pray for you to see yourself through God's eyes?",
            "Isaiah 41:10 says, 'So do not fear, for I am with you; do not be dismayed, for I am your God.' Career changes can be daunting, but God promises to guide and strengthen you. What are you sensing God is leading you toward?",
            "Psalm 68:6 tells us, 'God sets the lonely in families.' If you're feeling isolated, know that God cares deeply for you and desires community for you. How can we pray for new connections and meaningful relationships in your life?",
            "Matthew 11:28 says, 'Come to me, all you who are weary and burdened, and I will give you rest.' Sleep troubles can be heavy, but Jesus invites you to find rest in Him. Would you like to pray together for peace and restful sleep?",
            "Psalm 46:10 says, 'Be still, and know that I am God.' Mindfulness can be a way to draw closer to God and experience His presence. Have you tried spending quiet time with God in prayer or reflection?",
            "Romans 12:18 encourages, 'If it is possible, as far as it depends on you, live at peace with everyone.' Family situations can be complex, but God offers wisdom and peace. What specific challenges are you facing that we can bring to Him in prayer?",
        ];

        return $this->faker->randomElement($assistantMessages);
    }

    /**
     * Indicate that the message should belong to a specific chat.
     */
    public function forChat(Chat $chat): static
    {
        return $this->state(fn (array $attributes) => [
            'chat_id' => $chat->id,
            'user_id' => $chat->user_id,
        ]);
    }

    /**
     * Indicate that the message should belong to a specific user.
     */
    public function forUser(User $user): static
    {
        return $this->state(fn (array $attributes) => [
            'user_id' => $user->id,
        ]);
    }

    /**
     * Indicate that the message should be from a user.
     */
    public function fromUser(): static
    {
        return $this->state(fn (array $attributes) => [
            'role' => MessageRole::USER,
            'content' => $this->generateUserContent(),
        ]);
    }

    /**
     * Indicate that the message should be from the assistant.
     */
    public function fromAssistant(): static
    {
        return $this->state(fn (array $attributes) => [
            'role' => MessageRole::ASSISTANT,
            'content' => $this->generateAssistantContent(),
        ]);
    }

    /**
     * Indicate that the message should have specific content.
     */
    public function withContent(string $content): static
    {
        return $this->state(fn (array $attributes) => [
            'content' => $content,
        ]);
    }

    /**
     * Indicate that the message should be created recently.
     */
    public function recent(): static
    {
        return $this->state(fn (array $attributes) => [
            'created_at' => $this->faker->dateTimeBetween('-1 week', 'now'),
        ]);
    }

    /**
     * Indicate that the message should be created today.
     */
    public function today(): static
    {
        return $this->state(fn (array $attributes) => [
            'created_at' => $this->faker->dateTimeBetween('today', 'now'),
        ]);
    }

    /**
     * Create a short message.
     */
    public function short(): static
    {
        $shortMessages = [
            "Thank you for your help!",
            "I understand now.",
            "That makes sense.",
            "I'll try that approach.",
            "How do I get started?",
            "Can you explain more?",
            "I'm feeling better about this.",
            "What's the next step?",
        ];

        return $this->state(fn (array $attributes) => [
            'content' => $this->faker->randomElement($shortMessages),
        ]);
    }

    /**
     * Create a long message.
     */
    public function long(): static
    {
        return $this->state(fn (array $attributes) => [
            'content' => $this->faker->paragraphs(rand(3, 6), true),
        ]);
    }
}
