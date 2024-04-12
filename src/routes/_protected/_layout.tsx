import { Header } from "@/components/header";
import { HeaderProtected } from "@/components/header-protected";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { Package2Icon, SearchIcon } from "lucide-react";

export const Route = createFileRoute("/_protected/_layout")({
  component: () => (
    <div className="flex flex-col w-full min-h-screen">
      <HeaderProtected />
      <Outlet />
    </div>
  ),
});
