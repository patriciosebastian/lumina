export default function Announcement({ className = '', children }) {
  return (
    <div className={`text-center bg-primary-950 py-1.5 ${className}`}>
        {children}
    </div>
  );
}
