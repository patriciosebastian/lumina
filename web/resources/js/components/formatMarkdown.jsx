import ReactMarkdown from 'react-markdown';

export default function FormatMarkdown({ content }) {
    const safeContent = typeof content === 'string' ? content : '';

    const cleanContent = safeContent
        .replace(/[\u2013\u2014]/g, '—')
        .replace(/\u2212/g, '-')
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201C\u201D]/g, '"')
        .replace(/\u2032/g, "'")
        .replace(/\u2033/g, '"')
        .replace(/<E2><80><99>/g, "'")
        .replace(/<E2><80><9C>/g, '"')
        .replace(/<E2><80><9D>/g, '"')
        .replace(/<E2><80><94>/g, '—')
        .replace(/<E2><80><93>/g, '–');

    return (
        <div className="message-content">
            <ReactMarkdown
                components={{
                    p: ({ children }) => <p className="mb-3 leading-relaxed">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc pl-6 mb-3 space-y-1">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-6 mb-3 space-y-1">{children}</ol>,
                    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                    em: ({ children }) => <em className="italic">{children}</em>,
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary-950 pl-4 italic text-foreground/90 my-3">
                            {children}
                        </blockquote>
                    ),
                    h1: ({ children }) => <h1 className="text-xl font-bold mb-3">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-lg font-semibold mb-2">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-md font-medium mb-2">{children}</h3>,
                    code: ({ inline, children }) =>
                        inline ? (
                            <code className="bg-gray-900 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
                        ) : (
                            <pre className="bg-gray-900 p-3 rounded-lg overflow-x-auto mb-3">
                                <code className="text-sm font-mono">{children}</code>
                            </pre>
                        ),
                }}
            >
                {cleanContent}
            </ReactMarkdown>
        </div>
    );
}
