import { PocketBaseProvider } from '@/contexts/pocketBaseContext'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="w-full min-h-screen">
      <Outlet />
    </div>
  ),
})