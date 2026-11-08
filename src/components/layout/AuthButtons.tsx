import { useAuth } from '@/auth/useAuth';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function AuthButtons() {
  const { isLoggedIn, isVenueManager, logout } = useAuth();
  if (!isLoggedIn) {
    return (
      <div className="flex items-center gap-4">
        <Button variant="secondary" render={<Link to="/login" />}>
          Sign in
        </Button>
        <Button variant="default" render={<Link to="/register" />}>
          Create account
        </Button>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-4">
      {isVenueManager && (
        <Button variant="default" render={<Link to="/venues/new" />}>
          Register a new venue
        </Button>
      )}
      <Button variant="secondary" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
