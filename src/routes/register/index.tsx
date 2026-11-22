import { Button } from '@/components/ui/button';
import { login } from '@/services/api/auth/login';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/register/')({
  component: RouteComponent,
});

function RouteComponent() {
  const testObject = {
    email: 'test_holidaze_98@stud.noroff.no',
    password: 'test_holdaze_98',
  };

  async function handleOnClick() {
    const result = await login(testObject);
    console.log(result);
  }

  return (
    <div>
      Hello "/register/"
      <Button onClick={handleOnClick}>Log in</Button>
    </div>
  );
}
