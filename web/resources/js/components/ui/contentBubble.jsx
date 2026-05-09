export default function ContentBubble({ className = '', children }) {
    return (
        <div className={`font-book text-base leading-[1.78] text-ink ${className}`}>
            {children}
        </div>
    );
}
