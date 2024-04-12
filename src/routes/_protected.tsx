import { RouterContext } from "@/main";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  beforeLoad: async ({ context }) => {
    if(!(context as RouterContext).pocketBase.pocketBase.authStore.isValid){
        throw redirect({
            to: "/landingPage",
        })
    }
  },
  component: () => (
    <>
      <Outlet />
    </>
  ),
});
