//src/components/header.tsx
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { NavigationMenuHeader } from "./navbar"
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <>
      <div className="z-10 sticky bg-background py-4 w-full top-0">
        <div className="container flex max-w-screen-2xl items-center">
          <NavigationMenuHeader />
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center">
              <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-10 px-0 hidden sm:inline-flex"
                  )}
                >
                    <Icons.gitHub className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-10 px-0 hidden sm:inline-flex"
                  )}
                >
                  <Icons.linkedin className="h-4 w-4" />
                  <span className="sr-only">Linkedin</span>
              </div>
            </Link>
            <MobileNav />
            <ModeToggle />
          </nav>
        </div>
        </div>

      </div>
    </>
  );
};

export default Header;