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
import { ModeToggle } from "./ModeToggle";

export function Navigation({
  navigationContent,
  menuItemClasses = "",
  menuContentClasses = "w-[500px] p-4 grid gap-2 grid-cols-2",
}: {
  navigationContent: NavContent | null;
  menuItemClasses?: string;
  menuContentClasses?: string;
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
                <a href={item.url} className={menuItemClasses}>
                  {item.label}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className={menuContentClasses}>
                  {item.children.map((child) => (
                    <ListItem
                      key={child.label}
                      title={child.label}
                      href={child.url}
                      className={menuItemClasses}
                    >
                      {child.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ),
        )}
        <ModeToggle />
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
          <div className="text-sm leading-none font-semibold">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
