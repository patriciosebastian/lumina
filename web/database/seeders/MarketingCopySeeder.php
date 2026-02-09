<?php

namespace Database\Seeders;

use App\Models\MarketingCopy;
use Illuminate\Database\Seeder;

class MarketingCopySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $marketingCopyData = [
            // Announcement bar
            [
                'key' => 'announcement_show',
                'name' => 'Show Announcement Bar',
                'content' => 'true',
                'type' => 'boolean',
            ],
            [
                'key' => 'announcement_text',
                'name' => 'Announcement Bar Text',
                'content' => 'Welcome to the Beta 🎉 We want to hear from you! Please report any feedback or bugs you find to <a href="mailto:info@salosai.com" class="underline">info@salosai.com</a>',
                'type' => 'textarea',
            ],

            // Hero section
            [
                'key' => 'hero_tagline',
                'name' => 'Hero Tagline',
                'content' => 'Your Bible Based AI Mentor',
                'type' => 'text',
            ],
            [
                'key' => 'hero_title',
                'name' => 'Hero Title',
                'content' => 'Wisdom at Your Fingertips',
                'type' => 'text',
            ],

            // About section
            [
                'key' => 'about_paragraph_1',
                'name' => 'About Paragraph 1',
                'content' => 'Inspired by the wisdom of Solomon, guided by The Word, and powered by AI. Salos helps you discover God\'s truth, realign your purpose, and supplement your spiritual journey.',
                'type' => 'textarea',
            ],
            [
                'key' => 'about_paragraph_2',
                'name' => 'About Paragraph 2',
                'content' => 'By integrating the timeless truth of Scripture with the convenience of artificial intelligence, Salos seeks to inspire, guide, and uplift individuals in their pursuit of purpose and spiritual direction through cutting edge AI chat features, robust journaling mechanics, and purposeful habit formation.',
                'type' => 'textarea',
            ],

            // Features section
            [
                'key' => 'features_title',
                'name' => 'Features Section Title',
                'content' => 'Step Into Your Potential With Our AI Solutions',
                'type' => 'text',
            ],
            [
                'key' => 'features_subtitle',
                'name' => 'Features Section Subtitle',
                'content' => 'Discover the transformative power of an AI with the purpose of helping you find your true purpose in Jesus.',
                'type' => 'textarea',
            ],

            // Feature cards
            [
                'key' => 'feature_1_title',
                'name' => 'Feature 1 Title',
                'content' => 'Biblical Based Wisdom',
                'type' => 'text',
            ],
            [
                'key' => 'feature_1_subtitle',
                'name' => 'Feature 1 Subtitle',
                'content' => 'Answers grounded in God\'s Word.',
                'type' => 'text',
            ],
            [
                'key' => 'feature_1_description',
                'name' => 'Feature 1 Description',
                'content' => 'With logic derived exclusively from the teachings of Jesus and the wisdom of the Bible, SALOS empowers users to invite Jesus into their day to day schedule to be reminded and grounded in true purpose.',
                'type' => 'textarea',
            ],

            [
                'key' => 'feature_2_title',
                'name' => 'Feature 2 Title',
                'content' => 'AI-Powered Mentorship',
                'type' => 'text',
            ],
            [
                'key' => 'feature_2_subtitle',
                'name' => 'Feature 2 Subtitle',
                'content' => 'Learn and grow through advanced AI.',
                'type' => 'text',
            ],
            [
                'key' => 'feature_2_description',
                'name' => 'Feature 2 Description',
                'content' => 'Memory recall and biblical based advice helps users navigate life\'s questions. Integration of a robust database, rooted in eternal truth, offers tailored solutions applicable to modern day situations. Bible based chat and journal functions encourage users to build a deeper relationship with Jesus.',
                'type' => 'textarea',
            ],

            [
                'key' => 'feature_3_title',
                'name' => 'Feature 3 Title',
                'content' => 'Biblical and Theological Accuracy',
                'type' => 'text',
            ],
            [
                'key' => 'feature_3_subtitle',
                'name' => 'Feature 3 Subtitle',
                'content' => 'Retrieval-Augmented Generation.',
                'type' => 'text',
            ],
            [
                'key' => 'feature_3_description',
                'name' => 'Feature 3 Description',
                'content' => 'AI responses draw exclusively from our curated database of the complete Bible and select Christian theological works. Response generation is based on trusted Christian sources meant to guide and direct users with the truth of the Word and the understanding of theological concepts, ultimately leading to Jesus.',
                'type' => 'textarea',
            ],

            // Benefits section
            [
                'key' => 'benefits_title',
                'name' => 'Benefits Section Title',
                'content' => 'An Unparalleled Experience',
                'type' => 'text',
            ],
            [
                'key' => 'benefits_subtitle',
                'name' => 'Benefits Section Subtitle',
                'content' => 'Each distinctly crafted solution provides personal guidance for your individual spiritual journey as you seek to grow and further a relationship with Jesus.',
                'type' => 'textarea',
            ],

            // Benefit cards
            [
                'key' => 'benefit_1_title',
                'name' => 'Benefit 1 Title',
                'content' => 'Guidance Rooted in Divine Wisdom',
                'type' => 'text',
            ],
            [
                'key' => 'benefit_1_description',
                'name' => 'Benefit 1 Description',
                'content' => 'Mentorship and biblical based advice grounded in everlasting truth allows users to navigate life\'s obstacles through understanding God\'s Word and directing users to build a stronger relationship with Jesus.',
                'type' => 'textarea',
            ],

            [
                'key' => 'benefit_2_title',
                'name' => 'Benefit 2 Title',
                'content' => 'Righteous Mentor For Life\'s Journey',
                'type' => 'text',
            ],
            [
                'key' => 'benefit_2_subtitle',
                'name' => 'Benefit 2 Subtitle',
                'content' => 'Learn, grow, and receive guidance through advanced AI.',
                'type' => 'text',
            ],
            [
                'key' => 'benefit_2_description',
                'name' => 'Benefit 2 Description',
                'content' => 'Unlike traditional self-help tools, SALOS grows alongside users, meeting users in any circumstance and growing as the user progresses in their journey while providing continuous support, encouragement, and wisdom tailored to their unique journey.',
                'type' => 'textarea',
            ],

            [
                'key' => 'benefit_3_title',
                'name' => 'Benefit 3 Title',
                'content' => 'Spiritual Growth & Personal Development',
                'type' => 'text',
            ],
            [
                'key' => 'benefit_3_subtitle',
                'name' => 'Benefit 3 Subtitle',
                'content' => 'Ask questions anytime, anywhere.',
                'type' => 'text',
            ],
            [
                'key' => 'benefit_3_description',
                'name' => 'Benefit 3 Description',
                'content' => 'By integrating biblical teachings and profound spiritual insights, SALOS strategically helps users grow in their faith, align with their higher purpose, and live a more fulfilling life.',
                'type' => 'textarea',
            ],

            [
                'key' => 'benefit_4_title',
                'name' => 'Benefit 4 Title',
                'content' => 'Actionable & Life-Changing Advice',
                'type' => 'text',
            ],
            [
                'key' => 'benefit_4_subtitle',
                'name' => 'Benefit 4 Subtitle',
                'content' => 'Ask questions anytime, anywhere.',
                'type' => 'text',
            ],
            [
                'key' => 'benefit_4_description',
                'name' => 'Benefit 4 Description',
                'content' => 'All Scripture is breathed out by God and profitable for teaching and training in righteousness. Using the Word of God, SALOS provides real, actionable steps users can take to improve their circumstances.',
                'type' => 'textarea',
            ],

            // Pricing section
            [
                'key' => 'pricing_title',
                'name' => 'Pricing Section Title',
                'content' => 'Pricing',
                'type' => 'text',
            ],
            [
                'key' => 'pricing_subtitle',
                'name' => 'Pricing Section Subtitle',
                'content' => 'Select a plan designed to maximize your experience',
                'type' => 'textarea',
            ],

            // Mobile app section
            [
                'key' => 'mobile_app_title',
                'name' => 'Mobile App Section Title',
                'content' => 'Connecting Innovation With Eternal Truth',
                'type' => 'text',
            ],
            [
                'key' => 'mobile_app_description',
                'name' => 'Mobile App Description',
                'content' => 'SALOS mobile is our cutting-edge solution designed to supplement your spiritual journey by inviting Jesus into all areas of your life.',
                'type' => 'textarea',
            ],

            // Bible verses
            [
                'key' => 'verse_1_reference',
                'name' => 'Bible Verse 1 Reference',
                'content' => 'Romans 12:2:',
                'type' => 'text',
            ],
            [
                'key' => 'verse_1_text',
                'name' => 'Bible Verse 1 Text',
                'content' => '"Do not conform to the pattern of this world, but be transformed by the renewing of your mind"',
                'type' => 'textarea',
            ],
            [
                'key' => 'verse_2_reference',
                'name' => 'Bible Verse 2 Reference',
                'content' => 'Philippians 4:13:',
                'type' => 'text',
            ],
            [
                'key' => 'verse_2_text',
                'name' => 'Bible Verse 2 Text',
                'content' => '"I can do all things through Christ who strengthens me"',
                'type' => 'textarea',
            ],
        ];

        foreach ($marketingCopyData as $data) {
            MarketingCopy::updateOrCreate(
                ['key' => $data['key']],
                $data
            );
        }
    }
}
