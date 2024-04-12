import * as React from "react";
import { Link, useNavigate } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Package2Icon, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { usePocketBase } from "@/contexts/pocketBaseContext";
import { UsersResponse } from "@/pocketbase-types";

export function HeaderProtected() {
    const navigate = useNavigate()
    const pocketBase = usePocketBase().pocketBase

    const profileImage = pocketBase.authStore.model 
      ? pocketBase.getFileUrl((pocketBase.authStore.model as UsersResponse), (pocketBase.authStore.model as UsersResponse).avatar, {})
      : ""

    console.log(pocketBase.authStore.model)

  return (
    <div className="flex justify-between p-3">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Package2Icon className="w-6 h-6" />

                <span className="sr-only">Insights Navigation</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Surveys</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <ListItem title="Survey Overview" href="/surveys">
                  View all your surveys in one place
                </ListItem>
                <ListItem title="Create Survey" href="/surveys/create">
                  Create a new survey
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="flex-1 ml-auto sm:flex-initial">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              placeholder="Search surveys..."
              type="search"
            />
          </div>
        </form>
        <Button className="rounded-full" size="icon" variant="ghost">
          <img
            alt="Avatar"
            className="rounded-full"
            height="32"
            src={profileImage}
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32"
            onClick={() => {
              navigate({to: "/settings"})
            }}
          />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
