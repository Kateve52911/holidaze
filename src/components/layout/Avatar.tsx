import { useAuth } from '@/auth/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserRound } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function UserAvatar() {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <Link to="/profile" className="flex items-center text-foreground">
      <Avatar>
        <AvatarImage src={user.avatar?.url} alt={user.avatar?.alt} />
        <AvatarFallback>
          <UserRound strokeWidth={1.25} />
        </AvatarFallback>
      </Avatar>
      <p className="p-2">Hello {user.name}</p>
    </Link>
  );
}
