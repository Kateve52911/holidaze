import { createFileRoute } from '@tanstack/react-router';
import RegisterForm from '@/components/forms/RegisterForm.tsx';
import { HouseHeart } from 'lucide-react';

export const Route = createFileRoute('/register/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <HouseHeart color="#6D1F2E" strokeWidth={1.25} size={75} />
        <h1 className="text-primary">Create account </h1>
      </div>

      <RegisterForm />
    </div>
  );
}
