import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <div className="flex items-center gap-2.5">
            <AppLogoIcon className="size-6 text-[#B8922A]" />
            <span
                style={{ fontFamily: "'Cormorant Garamond', Garamond, serif", letterSpacing: '0.04em' }}
                className="text-[22px] font-normal leading-none text-[#2C2416] dark:text-[#FAF6EE]"
            >
                Lumina
            </span>
        </div>
    );
}
