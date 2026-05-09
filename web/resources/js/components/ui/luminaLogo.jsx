export default function LuminaLogo({ className = '' }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* Nine-ray sun mark in gold */}
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B8922A"
                strokeWidth="1"
                strokeLinecap="round"
                style={{ fill: 'none', width: 22, height: 22, flexShrink: 0 }}
                role="img"
                aria-label="Lumina"
            >
                <circle cx="12" cy="12" r="3.4" />
                <line x1="12" y1="2" x2="12" y2="5.5" />
                <line x1="12" y1="18.5" x2="12" y2="22" />
                <line x1="2" y1="12" x2="5.5" y2="12" />
                <line x1="18.5" y1="12" x2="22" y2="12" />
                <line x1="4.9" y1="4.9" x2="7.4" y2="7.4" />
                <line x1="16.6" y1="16.6" x2="19.1" y2="19.1" />
                <line x1="4.9" y1="19.1" x2="7.4" y2="16.6" />
                <line x1="16.6" y1="7.4" x2="19.1" y2="4.9" />
            </svg>
            {/* Wordmark in Cormorant Garamond */}
            <span
                style={{
                    fontFamily: "'Cormorant Garamond', Garamond, serif",
                    letterSpacing: '0.04em',
                    fontSize: 22,
                    fontWeight: 400,
                    color: '#2C2416',
                    lineHeight: 1,
                }}
            >
                Lumina
            </span>
        </div>
    );
}
