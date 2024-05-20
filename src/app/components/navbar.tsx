//src/app/components/navbar.tsx

"use client"

import Link from "next/link";
import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const interests: { title: string; href: string; description: string }[] = [
  {
    title: "Books",
    href: "/interests/books",
    description:
      "A list of the most recent books I have read with my thoughts on them.",
  },
  {
    title: "Areas I want to Study",
    href: "/interests/studies",
    description:
      "A page with all the areas of study I am interested in learning about.",
  },
]

export function NavigationMenuHeader() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Welcome to Stefan&apos;s website!
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Home">
                Home Page of my Portfolio
              </ListItem>
              <ListItem href="/about" title="About Me">
                Who am I?
              </ListItem>
              <ListItem href="/blog" title="Blog">
                Blog of some of my thoughts.
              </ListItem> 
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      <NavigationMenuItem>
          <NavigationMenuTrigger>Interests</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {interests.map((interests) => (
                    <ListItem
                      key={interests.title}
                      title={interests.title}
                      href={interests.href}
                    >
                      {interests.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          <NavigationMenuItem>
          <Link href="/blog">
            <NavigationMenuLink>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
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
  )
})
ListItem.displayName = "ListItem"