import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/venues/$venueId/edit')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/venues/$venueId/edit"!</div>;
}
