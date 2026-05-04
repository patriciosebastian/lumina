import CenteredBannerCard from "@/components/centeredBannerCard";
import CenteredIconCard from "@/components/centeredIconCard";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricingCard";
import TestimonialCard from "@/components/testimonialCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Chatbox from "@/components/ui/chatbox";
import LuminaTabs from "@/components/ui/luminaTabs";
import { TabsContent } from "@/components/ui/tabs";
import WideBannerCard from "@/components/wideBannerCard";
import { useState } from "react";
import LuminaSwitch from "@/components/ui/luminaSwitch";
import MessageCard from "@/components/messageCard";
import SendMessageButton from "@/components/ui/sendMessageButton";
import VoiceButton from "@/components/ui/voiceButton";
import ContentBubble from "@/components/ui/contentBubble";

{/*
    TODO:
    - Update classes to use rems in all components:
    for widths, heights, padding, margins, and even font sizes.
    - Add a 'text' prop to the button to pass into it's text/children.
*/}

export default function ComponentDevelopment() {
    const [enabled, setEnabled] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleCheckedChange = (updatedMode) => {
      setEnabled(updatedMode);

      const url = updatedMode ? '?enabled=true' : '/component-development';
      window.history.pushState(null, '', url);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
          setMessages(prev => [...prev, { text: message, role: 'user' }]);
          setMessage('');
        }
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

  return (
    <>
        <div className="bg-[#021219] mx-auto min-h-svh">
            <h1 className="text-center text-4xl font-bold my-8">Component Development</h1>
            <div className="pl-4 space-y-16 mb-12">
                <h2 className="text-3xl font-bold mb-4">Navigation</h2>
                <div className="w-fit flex items-center gap-4">
                    <Navbar />
                </div>

                <h2 className="text-3xl font-bold mb-4">Buttons</h2>
                <div className="flex flex-wrap justify-start items-center gap-4">
                    <Button>Ask Lumina</Button>
                    <Button variant={'luminaPrimaryAlt'}>Ask Lumina</Button>
                    <Button variant={'luminaSecondary'}>Ask Lumina 2</Button>
                    <Button variant={'luminaSecondaryAlt'}>Ask Lumina</Button>
                    <SendMessageButton />
                    <VoiceButton />
                </div>

                <h2 className="text-3xl font-bold mb-4">Badges</h2>
                <div className="flex flex-wrap justify-start items-center gap-4">
                    <Badge variant={'luminaPrimary'}>Label</Badge>
                </div>

                <h2 className="text-3xl font-bold mb-4">Cards</h2>
                <div className="flex flex-wrap justify-start gap-4">
                    <WideBannerCard
                        title="Biblically-Inspired Wisdom"
                        subtitle="Answers grounded in faith and wisdom."
                        imageAltText="layered gradient-colored rings"
                    >
                        Scale your operations with our AI solutions designed for flexibility and adaptability. Our architecture grows with your business, ensuring seamless expansion and innovation.
                    </WideBannerCard>
                    <CenteredIconCard
                        title="Guidance Rooted in Divine Wisdom"
                        imgAltText="Smiling robot head"
                    >
                        Lumina offers mentorship and advice grounded in God's wisdom, helping users navigate life's challenges with clarity, faith, and purpose.
                    </CenteredIconCard>
                    <CenteredBannerCard
                        title="Unwavering Support, 24/7"
                        imgAltText="Chat bubble with the letters 'AI' inside"
                    >
                        No matter the topic, nothing is too small or too big for Lumina. Lumina is always there to provide faith-driven guidance, ensuring users always have someone in their corner navigating life with them.
                    </CenteredBannerCard>
                    <TestimonialCard
                        text="We couldn&apos;t be happier with our new website. Proxima&apos;s designers listened to every one of our concerns and crafted a site that truly reflects our brand and mission."
                        authorImg="https://images.unsplash.com/photo-1616268164880-673b3ba611bb?h=56&w=56&auto=format&fit=crop&ixlib=rb-4.1.0"
                        authorName="Tina Morris"
                        authorTitle="Creative Director"
                    />
                    <PricingCard
                        badgeText="Basic Access"
                        title="Free Tier"
                        subtitle="Essential features for startups and small teams."
                        features={[
                            "Limited AI interactions per day (e.g., 3–5 messages).",
                            "No memory recall—responses are session-based.",
                            "Access to general spiritual guidance.",
                        ]}
                        monthly={true}
                        price={0.00}
                    />
                </div>

                <h2 className="text-3xl font-bold mb-4">Chatboxes</h2>
                <div className="w-fit flex flex-wrap justify-start items-center gap-4">
                    <Chatbox className="ml-0" />
                    <MessageCard
                        currentMessage={message}
                        messages={messages}
                        onSendMessage={handleSendMessage}
                        onMessageChange={handleMessageChange}
                        showVoiceButton={true}
                    />
                </div>

                <h2 className="text-3xl font-bold mb-4">Content Bubble</h2>
                <div className="w-fit flex flex-wrap justify-start items-center gap-4">
                    <ContentBubble>
                        Welcome, child of God. How can I guide you today?
                    </ContentBubble>
                </div>

                <h2 className="text-3xl font-bold mb-4">Tabs</h2>
                <div className="w-fit flex flex-wrap justify-start items-center gap-4">
                    <LuminaTabs
                        defaultValue="Monthly"
                        tabs="Monthly, Yearly"
                    >
                        <TabsContent value="Monthly">
                            <p className="text-xl">Aything can go in here using <code>TabsContent</code></p>
                        </TabsContent>
                        <TabsContent value="Yearly">
                            <p className="text-xl">Or in here</p>
                        </TabsContent>
                    </LuminaTabs>
                </div>

                <h2 className="text-3xl font-bold mb-4">Switch</h2>
                <div className="flex flex-wrap justify-start items-center gap-4">
                    <LuminaSwitch
                        checked={enabled}
                        onCheckedChange={handleCheckedChange}
                        checkedText="Alternative Text"
                    />
                </div>
            </div>
        </div>
    </>
  );
}
