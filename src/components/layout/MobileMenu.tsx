import { Link } from '@tanstack/react-router';
import { navLinks } from './navLinks';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { HouseHeart, Menu } from 'lucide-react';
import UserAvatar from '@/components/layout/Avatar';
import AuthButtons from '@/components/layout/AuthButtons';

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger aria-label="Open menu">
        <Menu color="#6D1F2E" strokeWidth={1.25} nonScalingStroke />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center px-4 text-primary">
              <HouseHeart size={45} strokeWidth={1.25} />
              Holidaze
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center px-4 text-primary">
          {navLinks.map((link) => (
            <SheetClose
              key={link.to}
              render={
                <Link
                  to={link.to}
                  className="[&.active]:after:w-full [&.active]:text-primary [&.active]:font-bold after:left-1/2 after:-translate-x-1/2 after:w-0 relative after:absolute after:-bottom-1 after:h-0.5 after:bg-primary py-4 "
                >
                  {link.label}
                </Link>
              }
            />
          ))}
        </div>
        <div className="flex flex-col w-full">
          <UserAvatar />
          <AuthButtons />
        </div>
      </SheetContent>
    </Sheet>
  );
}
