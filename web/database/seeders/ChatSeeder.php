<?php

namespace Database\Seeders;

use App\Enums\MessageRole;
use App\Models\Chat;
use App\Models\Message;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChatSeeder extends Seeder
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
            $chatCount = rand(3, 6);
            
            for ($i = 0; $i < $chatCount; $i++) {
                $chat = Chat::factory()
                    ->forUser($user)
                    ->create();

                $this->createChatMessages($chat);
            }
        });

        $this->createExampleChats();
    }

    /**
     * Create messages for a given chat.
     */
    private function createChatMessages(Chat $chat): void
    {
        $messageCount = rand(4, 20);
        
        // Start with a user message
        $isUserTurn = true;
        $baseTime = fake()->dateTimeBetween('-2 months', 'now');
        
        for ($i = 0; $i < $messageCount; $i++) {
            // Chronological
            $messageTime = (clone $baseTime)->modify("+{$i} minutes");
            
            Message::factory()
                ->forChat($chat)
                ->state([
                    'role' => $isUserTurn ? MessageRole::USER : MessageRole::ASSISTANT,
                    'content' => $isUserTurn ? $this->generateUserMessage($i) : $this->generateAssistantMessage($i),
                    'created_at' => $messageTime,
                    'updated_at' => $messageTime,
                ])
                ->create();
            
            // Alternate between user and assistant
            $isUserTurn = !$isUserTurn;
        }
    }

    /**
     * Generate contextual user messages.
     */
    private function generateUserMessage(int $messageIndex): string
    {
        if ($messageIndex === 0) {
            $openingMessages = [
                "Hi Lumina, I'm feeling overwhelmed with work lately. Can you help me figure out how to manage my stress?",
                "I want to start a new habit but I keep procrastinating. Any advice?",
                "I'm having trouble communicating with my partner. What should I do?",
                "I feel like I'm not making progress toward my goals. How can I stay motivated?",
                "I'm struggling with self-confidence. How can I build more confidence?",
                "I want to make a career change but I'm scared. What steps should I take?",
                "I'm feeling lonely and isolated. How can I connect with others?",
                "I want to be more mindful and present. Where should I start?",
            ];
            return fake()->randomElement($openingMessages);
        }
        
        $followUpMessages = [
            "That's really helpful, thank you. Can you give me some specific examples?",
            "I hadn't thought about it that way. How do I actually implement this?",
            "That makes sense. What would be the first step I should take?",
            "I've tried something like that before but struggled. Any tips for staying consistent?",
            "This is exactly what I needed to hear. Can you help me create a plan?",
            "I'm feeling more hopeful about this now. What else should I consider?",
            "Thank you for being so patient with me. I have another question...",
            "I really appreciate your guidance. How long does it usually take to see results?",
        ];
        
        return fake()->randomElement($followUpMessages);
    }

    /**
     * Generate contextual assistant messages.
     */
    private function generateAssistantMessage(int $messageIndex): string
    {
        if ($messageIndex === 0) {
            $openingResponses = [
                "I understand you're feeling overwhelmed with work. That's completely natural, and I'm here to help you find some strategies to manage that stress. Let's start by identifying what specifically is causing you the most stress right now.",
                "Procrastination is something many people struggle with, and it's great that you're ready to address it. Building new habits takes time and patience with yourself. What's the habit you're most excited to start?",
                "Communication in relationships can be challenging, but it's wonderful that you're seeking to improve it. Good communication is the foundation of healthy relationships. Can you tell me more about what specific communication challenges you're facing?",
                "Feeling stuck with goals is frustrating, but it's also a sign that you're self-aware and want to grow. Sometimes we need to reassess our approach or break things down into smaller steps. What goals are you working toward right now?",
                "Self-confidence is something we all work on throughout our lives. You've already taken a brave step by acknowledging this and seeking help. Confidence often grows through small, consistent actions. What areas of your life would you like to feel more confident in?",
                "Career changes can feel scary because they represent stepping into the unknown, but they can also be incredibly rewarding. Your awareness of this fear shows wisdom. What's drawing you toward this career change?",
                "Feeling lonely is more common than you might think, especially in our modern world. The fact that you're reaching out shows strength and a desire to connect. What kinds of connections are you hoping to build?",
                "Mindfulness and presence are beautiful practices that can transform how we experience life. Starting this journey shows great self-awareness. What's motivating you to explore mindfulness right now?",
            ];
            return fake()->randomElement($openingResponses);
        }
        
        $followUpResponses = [
            "That's a great question, and I'm glad you're thinking practically about implementation. Here are some specific steps you can take...",
            "I can see you're really committed to making this work. Let me share a framework that might help you stay consistent...",
            "Your willingness to try again shows real resilience. Here's what I'd suggest for your first step...",
            "It's completely normal to have tried similar approaches before. What I'm hearing is that you're ready to approach this differently this time...",
            "I'm so glad this resonates with you. Creating a structured plan can really help. Let's break this down into manageable pieces...",
            "Your hope is inspiring, and that positive energy will serve you well. Here are some additional factors to consider...",
            "It's my pleasure to support you on this journey. Your other question is equally important, so let's explore that...",
            "Results can vary from person to person, but typically you might start noticing small shifts within a few weeks. The key is consistency...",
            "Building on what we've discussed, I think it would be helpful to also consider...",
            "You're asking all the right questions. This shows you're approaching this thoughtfully. Let me offer another perspective...",
            "I can sense your determination, and that's one of your greatest assets in this process. Here's what I'd recommend next...",
            "That insight you just shared is really valuable. It shows you understand yourself well. Let's use that awareness to...",
        ];
        
        return fake()->randomElement($followUpResponses);
    }

    /**
     * Create some example chats with specific themes and realistic conversations.
     */
    private function createExampleChats(): void
    {
        $firstUser = User::first();
        
        if (!$firstUser) {
            return;
        }

        $careerChat = Chat::factory()
            ->forUser($firstUser)
            ->withName('Career Transition Guidance')
            ->create();

        $this->createSpecificChat($careerChat, [
            ['role' => MessageRole::USER, 'content' => "Hi Lumina, I'm considering leaving my current job to pursue a career in UX design. I have some design skills but I'm worried about making the transition. What should I consider?"],
            ['role' => MessageRole::ASSISTANT, 'content' => "It's exciting that you're considering a career in UX design! Career transitions can feel overwhelming, but they're also opportunities for growth. Let's explore this step by step. First, tell me about your current design skills and experience - what have you worked on so far?"],
            ['role' => MessageRole::USER, 'content' => "I've been doing some freelance logo design and I've taken a few online courses about user experience. I really enjoy the problem-solving aspect of design, but I don't have professional UX experience yet."],
            ['role' => MessageRole::ASSISTANT, 'content' => "That's a solid foundation! Your freelance work shows you can deliver for clients, and your interest in problem-solving is essential for UX. Here's what I'd suggest: start building a UX portfolio with personal projects, consider volunteering for nonprofits to get real experience, and maybe look into UX bootcamps or mentorship programs. What feels most actionable to you right now?"],
            ['role' => MessageRole::USER, 'content' => "The portfolio idea makes sense. How do I create UX projects without clients though?"],
            ['role' => MessageRole::ASSISTANT, 'content' => "Great question! You can create case studies by redesigning existing apps or websites, solving problems you've personally experienced, or even designing solutions for local businesses (with their permission). The key is showing your process: research, problem definition, ideation, prototyping, and testing. Would you like me to help you brainstorm some specific project ideas?"],
        ]);

        $growthChat = Chat::factory()
            ->forUser($firstUser)
            ->withName('Building Daily Habits')
            ->create();

        $this->createSpecificChat($growthChat, [
            ['role' => MessageRole::USER, 'content' => "I want to build better daily habits but I always seem to give up after a few days. I've tried meditation, exercise, reading - nothing seems to stick. What am I doing wrong?"],
            ['role' => MessageRole::ASSISTANT, 'content' => "It sounds like you're motivated to grow, which is wonderful! The fact that you keep trying shows real commitment. Often when habits don't stick, it's because we're trying to change too much at once or setting unrealistic expectations. Tell me, when you tried these habits, what did your routine look like?"],
            ['role' => MessageRole::USER, 'content' => "I usually try to do everything at once - wake up early, meditate for 20 minutes, exercise for an hour, then read for 30 minutes. I think I was being too ambitious."],
            ['role' => MessageRole::ASSISTANT, 'content' => "You're absolutely right - that's a very ambitious routine! Your self-awareness is impressive. Let's try a different approach: start with just ONE tiny habit that takes 2-3 minutes. Maybe 3 minutes of meditation OR 10 minutes of reading. Which of these feels most important to you right now?"],
            ['role' => MessageRole::USER, 'content' => "I think meditation would help me the most. I've been feeling pretty stressed lately."],
            ['role' => MessageRole::ASSISTANT, 'content' => "Meditation is perfect for stress management. Let's start with just 3 minutes each morning - maybe right after you brush your teeth, so it's linked to an existing habit. Use a simple app like Headspace or just focus on breathing. The goal is consistency, not perfection. Can you commit to just 3 minutes for one week?"],
        ]);

        $relationshipChat = Chat::factory()
            ->forUser($firstUser)
            ->withName('Improving Communication')
            ->create();

        $this->createSpecificChat($relationshipChat, [
            ['role' => MessageRole::USER, 'content' => "My partner and I have been having the same argument over and over. We both get defensive and nothing gets resolved. How can we break this cycle?"],
            ['role' => MessageRole::ASSISTANT, 'content' => "Recurring arguments can be so frustrating because they often leave both people feeling unheard. It's great that you're looking for solutions instead of just accepting the pattern. These cycles usually happen when we're addressing the surface issue but not the underlying need. Can you tell me what these arguments are typically about?"],
            ['role' => MessageRole::USER, 'content' => "It usually starts with something small, like household chores or plans we made. But then it escalates and we end up arguing about bigger things like respect and consideration."],
            ['role' => MessageRole::ASSISTANT, 'content' => "That's very insightful - you're recognizing that the surface issue (chores, plans) isn't really what the argument is about. It sounds like the deeper needs are around feeling respected and considered. When these conversations start, try this: take a breath and say something like 'I can see we're both getting upset. What I really need is to feel heard. Can we try this differently?' What do you think about that approach?"],
            ['role' => MessageRole::USER, 'content' => "That sounds reasonable, but what if they're not willing to pause and restart the conversation?"],
            ['role' => MessageRole::ASSISTANT, 'content' => "That's a valid concern. You can only control your own actions, not your partner's response. But often, when one person changes their approach, it creates space for the other to respond differently too. If they're not ready to pause in the moment, you might try: 'I care about resolving this, but I need a few minutes to collect my thoughts. Can we revisit this in 20 minutes?' This gives both of you time to reset."],
        ]);
    }

    /**
     * Create a specific chat with predefined messages.
     */
    private function createSpecificChat(Chat $chat, array $messages): void
    {
        $baseTime = fake()->dateTimeBetween('-1 month', '-1 week');
        
        foreach ($messages as $index => $messageData) {
            $messageTime = (clone $baseTime)->modify("+{$index} minutes");
            
            Message::factory()
                ->forChat($chat)
                ->state([
                    'role' => $messageData['role'],
                    'content' => $messageData['content'],
                    'created_at' => $messageTime,
                    'updated_at' => $messageTime,
                ])
                ->create();
        }
    }
}
