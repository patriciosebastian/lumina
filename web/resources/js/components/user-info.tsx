import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { type User } from '@/types';
import userAvatar from '../../images/SALOS_Dove_O_Group_1.svg';
import { Head } from '@inertiajs/react';

export function UserInfo({ user, showEmail = false }: { user: User; showEmail?: boolean }) {
    const getInitials = useInitials();

    if (!user) {
        user = {
            name: 'Guest',
            email: '',
            avatar: '',
            id: -1,
            created_at: '',
            updated_at: '',
            email_verified_at: ''
        };
    }

    return (
        <>
            <Head>
                <link rel="preload" href={userAvatar} as="image" />
            </Head>
            <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                <AvatarImage src={userAvatar || user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                    {getInitials(user.name)}
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                {showEmail && <span className="text-muted-foreground truncate text-xs">{user.email}</span>}
            </div>
        </>
    );
}
