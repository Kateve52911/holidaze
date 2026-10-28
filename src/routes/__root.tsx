import {
  createRootRouteWithContext,
  Outlet,
  HeadContent,
} from '@tanstack/react-router';
import type { QueryClient } from '@tanstack/react-query';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
  <>
    <div className="flex flex-col min-h-screen">
      <HeadContent />
      <div className="flex-1 pb-10">
        <Outlet />
      </div>
    </div>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  { component: RootLayout },
);
