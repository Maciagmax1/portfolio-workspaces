import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { NavContent } from "@/utils/sanity";
import { ChevronDown, Menu as MenuIcon } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const matchedPathStyles = (url: string) => {
  const currentPath = window.location.pathname + window.location.search;
  if (url === "/") {
    return currentPath === "/" ? " text-primary" : " text-foreground";
  }
  return currentPath.includes(url) ? " text-primary" : " text-foreground";
};

export function MobileNavigation({
  navigationContent,
}: {
  navigationContent: NavContent | null;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon" className="sm:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="h-full w-[calc(100%-4px)]"
        renderTools={<ThemeToggle className="w-fit sm:hidden" />}
      >
        <nav className="flex w-full flex-col items-start p-4 [&_a]:p-0 [&_button]:p-0 [&_button]:hover:cursor-pointer">
          {navigationContent?.navigationItems?.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            return (
              <div key={item.label || item.url} className="w-full">
                {hasChildren ? (
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="link"
                        className={cn(
                          "w-fit justify-start text-lg font-bold",
                          matchedPathStyles(item.url),
                        )}
                      >
                        {item.label}
                        <ChevronDown />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent
                      className={cn(
                        "text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 outline-none",
                      )}
                    >
                      <div className="ml-4 flex flex-col">
                        {item.children?.map((child) => (
                          <Button
                            key={child.label || child.url}
                            variant="link"
                            asChild
                            className={cn(
                              "w-fit justify-start",
                              matchedPathStyles(child.url),
                            )}
                            onClick={() => setOpen(false)}
                          >
                            <a className="p-0" href={child.url}>
                              {child.label}
                            </a>
                          </Button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Button
                    variant="link"
                    asChild
                    className={cn(
                      "w-fit justify-start text-lg font-bold",
                      matchedPathStyles(item.url),
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <a className="p-0" href={item.url}>
                      {item.label}
                    </a>
                  </Button>
                )}
              </div>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
