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

// move this to sanity studio
const components: { title: string; href: string; description: string }[] = [
  {
    title: "JavaScript",
    href: "/skills/javascript",
    description: "The foundation for frontend development",
  },
  {
    title: "Cascading Style Sheets",
    href: "/skills/css",
    description: "A web developers paint brush",
  },
  {
    title: "React",
    href: "/skills/react",
    description: "Simplified development interacting with the virtual DOM",
  },
  {
    title: "NextJS",
    href: "/skills/nextjs",
    description: "Serverside HTML prerendering",
  },
  {
    title: "Astro",
    href: "skils/astro",
    description: "Lightweight and campatible",
  },
  {
    title: "HTML",
    href: "/skills/html",
    description: "The DOM and the skeleton for the web",
  },
];

export function Navigation() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/">Home</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/about-me">About Me</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Background</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Experience</div>
                    <div className="text-muted-foreground">
                      Visit my previous roles
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Projects</div>
                    <div className="text-muted-foreground">
                      Browse some of my work
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#">
                    <div className="font-medium">Recommendations</div>
                    <div className="text-muted-foreground">
                      Read what others say
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Skills</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#">Contact</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
