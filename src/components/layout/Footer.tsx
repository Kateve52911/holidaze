import { Link } from '@tanstack/react-router';
import { HouseHeart } from 'lucide-react';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Separator } from '@/components/ui/separator.tsx';

export default function Footer() {
  return (
    <footer className="bg-secondary-foreground p-6 rounded-t-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 ">
        <div className="flex flex-col lg:flex-row md:justify-self-start items-center lg:items-start gap-6 md:text-left">
          <div className="flex flex-col">
            <Link
              to="/"
              className="font-heading text-5xl text-background "
              aria-label="Holidaze, go to homepage"
            >
              <div className="flex items-center text-background mx-4">
                <HouseHeart size={45} strokeWidth={1.25} />
                Holidaze
              </div>
            </Link>
            <p className="text-left mx-4 font-light text-background">
              Slow down. Stay awhile.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row md:justify-self-end items-center md:items-end gap-6 md:text-left md:pt-6">
            <div className="flex flex-row md:flex-col gap-2 items-center md:items-start  md:text-left">
              <p className="hidden md:block text-background font-bold">
                Explore
              </p>
              <Link to="/" className=" text-background ">
                Home
              </Link>
              <Link to="/venues" className="  text-background ">
                Venues
              </Link>
              <Link to="/about" className="  text-background ">
                About
              </Link>
            </div>
            <div className=" flex flex-row md:flex-col gap-2 items-center md:items-start md:text-left">
              <p className="hidden md:block text-background font-bold">Help</p>
              <Link to="/login" className=" text-background ">
                Sign in
              </Link>
              <Link to="/contact" className="  text-background ">
                Contact us
              </Link>
              <Link to="/terms" className="  text-background ">
                Terms
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:justify-self-end items-center md:items-start gap-2 md:text-left md:pt-6 w-xs md:w-md md:mx-4 mx-7">
          <p className="text-background font-bold">Newsletter</p>
          <p className="text-background">
            Join our newsletter to be the first to see new venues and receive
            great deals!
          </p>
          <div className="flex items-center gap-2">
            <Input className=" w-xxs md:w-xs" placeholder="Enter your email" />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </div>
      <Separator className="my-6" />
      <div>
        <div className="items-center text-background md:text-left font-light mx-4">
          <p>
            &copy; {new Date().getFullYear()} Kathrine M. Evensen. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
