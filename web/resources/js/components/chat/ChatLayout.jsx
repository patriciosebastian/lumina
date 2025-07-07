import Header from "@/components/header";
import JournalSidebar from "./JournalSidebar";

export default function ChatLayout({ isJournalMode, onCheckedChange, showSidebar, children, setSelectedJournal, selectedJournal }) {
    return (
        <div>
            <Header
                enabled={isJournalMode}
                setEnabled={onCheckedChange}
                switchText={isJournalMode ? "Miracle Journal" : "Chat with SALOS"}
            />

            <div className="flex flex-col gap-5 md:flex-row px-4 md:px-8">
                {showSidebar && isJournalMode && (
                    <div className="md:w-1/3">
                        <JournalSidebar setSelectedJournal={setSelectedJournal} selectedJournal={selectedJournal} />
                    </div>
                )}
                <div className={showSidebar && isJournalMode ? "md:w-2/3" : "w-full"}>
                    {children}
                </div>
            </div>
        </div>
    );
}
