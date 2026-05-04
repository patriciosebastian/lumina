import Logo from '../../images/Salos.svg';
import { Switch } from '@/components/ui/switch';

const Header = ({ enabled, setEnabled, switchText }) => {

    return <div className="relative h-auto min-h-[100px] flex justify-between items-center px-8 py-4 mb-4">
        <div>
            <img
                src={Logo}
                width={116}
                height={32}
                alt="Lumina Logo"
            />
        </div>
        <div className="relative bg-linear-to-b from-[#54C0F100] to-[#54C0F133] flex items-center justify-between px-4 w-[181px] h-[48px] gradient-border-mask rounded-[68px] text-white cursor-pointer">
            <span className="text-[#54C0F1] text-sm">{switchText}</span>
            <Switch checked={enabled} onCheckedChange={setEnabled} />
        </div>
    </div>;
};

export default Header;
