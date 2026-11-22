import { Link } from '@tanstack/react-router';
import { HouseHeart } from 'lucide-react';
import UserAvatar from '@/components/layout/Avatar.tsx';
import AuthButtons from '@/components/layout/AuthButtons.tsx';

export default function Header() {
  return (
    <header className=" p-2 bg-white sticky rounded-lg right-10 left-10 top-5 z-50 mx-10 shadow-card">
      <div className=" w-full">
        <div className="grid grid-cols-[1fr_auto] items-center gap-2">
          <div className=" flex items-center">
            <Link
              to="/"
              className=" font-serif md:text-5xl text-2xl text-ink p-2"
              aria-label="Holidaze, go to homepage"
            >
              <div className="flex items-center px-4 text-primary">
                <HouseHeart size={45} strokeWidth={1.25} />
                Holidaze
              </div>
            </Link>
            <nav className="flex justify-self-start gap-6 content-center">
              <Link
                to="/"
                className="[&.active]:after:w-full [&.active]:text-primary after:left-1/2 after:-translate-x-1/2 after:w-0 relative after:absolute after:-bottom-1 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              >
                Home
              </Link>
              <Link
                to="/venues"
                className="[&.active]:after:w-full [&.active]:text-primary after:left-1/2 after:-translate-x-1/2 after:w-0 relative after:absolute after:-bottom-1 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              >
                Venues
              </Link>
              <Link
                to="/about"
                className="[&.active]:after:w-full [&.active]:text-primary after:left-1/2 after:-translate-x-1/2 after:w-0 relative after:absolute after:-bottom-1 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="[&.active]:after:w-full [&.active]:text-primary after:left-1/2 after:-translate-x-1/2 after:w-0 relative after:absolute after:-bottom-1 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              >
                Contact
              </Link>
            </nav>
          </div>
          <UserAvatar />
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
