import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/venues/new')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/venue/new"!</div>;
}
