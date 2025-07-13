import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

type ThemeMode = "light" | "dark" | "system";
const themeModes: ThemeMode[] = ["light", "dark", "system"];

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setThemeState] = React.useState<ThemeMode>(
    (window?.localStorage?.getItem("theme") as ThemeMode) || "system",
  );

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const selectedStyle = (mode: ThemeMode) =>
    theme === mode ? "bg-accent text-accent-foreground" : "";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 flex size-9 items-center justify-center rounded-sm p-2 shadow-none outline-none hover:cursor-pointer focus-visible:ring-0 focus-visible:ring-offset-0",
          className,
        )}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-1">
        {themeModes.map((mode) => (
          <DropdownMenuItem
            key={mode}
            className={selectedStyle(mode)}
            onClick={() => setThemeState(mode)}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
