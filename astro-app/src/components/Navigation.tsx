import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { type NavContent } from "@/utils/sanity";

export function Navigation({
  navigationContent,
  menuItemClassName = "",
  menuContentClassName = "w-[500px] p-4 grid gap-2 grid-cols-2",
}: {
  navigationContent: NavContent | null;
  menuItemClassName?: string;
  menuContentClassName?: string;
}) {

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {navigationContent?.navigationItems?.map((item) =>
          !item.children || item.children.length === 0 ? (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href={item.url} className={menuItemClassName}>
                  {item.label}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className={menuContentClassName}>
                  {item.children.map((child) => (
                    <ListItem
                      key={child.label}
                      title={child.label}
                      href={child.url}
                      className={menuItemClassName}
                    >
                      {child.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentProps<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="text-sm leading-none font-medium">
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
