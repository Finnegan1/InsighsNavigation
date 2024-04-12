import { HeaderProtected } from "@/components/header-protected";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/_layout")({
  component: () => (
    <div className="flex flex-col w-full min-h-screen">
      <HeaderProtected />
      <Outlet />
    </div>
  ),
});
