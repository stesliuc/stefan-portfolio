//src/components/header.tsx
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { NavigationMenuHeader } from "./navbar"
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { Mail } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="z-10 sticky bg-background backdrop-blur-smpy-4 w-full top-0">
        <div className="container flex max-w-screen-2xl items-center">
          <NavigationMenuHeader />
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center">
              <Link target="_blank" rel="noreferrer" href="mailto:mihaitesliuc@gmail.com">
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-10 px-0 hidden sm:inline-flex"
                  )}>
                        <span className="sr-only">Mail</span>
                        <Mail className="h-5 w-5" />
                </div>
              </Link>
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
                    <Icons.gitHub className="h-5 w-5" />
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
                  <Icons.linkedin className="h-5 w-5" />
                  <span className="sr-only">Linkedin</span>
              </div>
            </Link>
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
        </div>

      </div>
    </>
  );
};

export default Header;