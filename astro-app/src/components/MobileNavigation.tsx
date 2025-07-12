import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { NavContent } from "@/utils/sanity";
import { ChevronDown, Menu as MenuIcon } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

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
        className="h-full"
        renderTools={<ThemeToggle className="w-fit sm:hidden" />}
      >
        <nav className="flex w-full flex-col items-start">
          {navigationContent?.navigationItems?.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            return (
              <div key={item.label || item.url} className="w-full">
                {hasChildren ? (
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="link"
                        className="text-foreground w-fit justify-start text-lg font-bold"
                      >
                        {item.label}
                        <ChevronDown />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="ml-4 flex flex-col">
                        {item.children?.map((child) => (
                          <Button
                            key={child.label || child.url}
                            variant="link"
                            asChild
                            className="text-foreground w-fit justify-start"
                            onClick={() => setOpen(false)}
                          >
                            <a href={child.url}>{child.label}</a>
                          </Button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Button
                    variant="link"
                    asChild
                    className="text-foreground w-fit justify-start text-lg font-bold"
                    onClick={() => setOpen(false)}
                  >
                    <a href={item.url}>{item.label}</a>
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
