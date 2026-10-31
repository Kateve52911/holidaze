import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/venues/$venueId/bookings')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/venues/$venueId/bookings"!</div>;
}
