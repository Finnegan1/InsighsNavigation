import React from 'react'
import ReactDOM from 'react-dom/client'
import "./globals.css";


// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { PocketBaseContextType, PocketBaseProvider, usePocketBase as usePocketBase } from './contexts/pocketBaseContext';

export type RouterContext = {
  pocketBase: PocketBaseContextType
}

// Create a new router instance
const router = createRouter({ 
  routeTree,
  context: {
    pocketBase: undefined!, // This will be set after we wrap the app in an PocketBaseProvider
  } as RouterContext,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      )

function InnerApp() {
  const pocketBase = usePocketBase();
  return <>
    <RouterProvider router={router} context={{ pocketBase }} />
    <TanStackRouterDevtools router={router}/>
  </>
}

function App() {
  return (
    <PocketBaseProvider>
      <InnerApp />
    </PocketBaseProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
