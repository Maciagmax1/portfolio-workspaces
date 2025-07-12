import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { NavContent } from "@/utils/sanity";
import { Menu as MenuIcon } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

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
        side="bottom"
        className="h-10/12"
        renderTools={<ThemeToggle className="w-fit sm:hidden" />}
      >
        <nav className="flex w-full flex-col items-start">
          {navigationContent?.navigationItems?.map((item) => (
            <div key={item.label || item.url} className="w-full">
              <Button
                variant="link"
                asChild
                className="w-full justify-start"
                onClick={() => setOpen(false)}
              >
                <a href={item.url}>{item.label}</a>
              </Button>
              {item.children && item.children.length > 0 && (
                <div className="ml-4 flex flex-col">
                  {item.children.map((child) => (
                    <Button
                      key={child.label || child.url}
                      variant="link"
                      asChild
                      className="w-full justify-start"
                      onClick={() => setOpen(false)}
                    >
                      <a href={child.url}>{child.label}</a>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
