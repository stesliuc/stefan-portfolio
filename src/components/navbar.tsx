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
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Icons } from "./icons";


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
  {
    title: "Martial Arts",
    href: "/interests/martialarts",
    description:
      "My thoughts on different martial arts as a practictioner of Brazilian Jiu Jitsu and Muay Thai",
  },
]

export function NavigationMenuHeader() {
  return (

    <NavigationMenu className="flex items-center space-x-4 lg:space-x-6">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" className="mr-3 flex items-center space-x-2 hover:opacity-65">
          <Icons.logo className="h-12 w-12" />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="max-sm:hidden">
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="max-sm:hidden">
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="max-sm:hidden">
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/projects"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                    Projects
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Various coding and math projects I have undertaken. 
                      I work on projects that help me learn new concepts, or are useful to my work and personal life.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/projects/#scraper" title="Scraper">
                A simple web scraper I built to practice development best practices.
              </ListItem>
              <ListItem href="/projects/#portfolio" title="Portfolio">
                The website you are currently reading!
              </ListItem>
              <ListItem href="/projects/#llm" title="Llama Model">
                In progress project where I implement LLM research using Llama3.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="max-sm:hidden">
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
        <NavigationMenuItem className="max-sm:hidden">
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
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