//src/app/projects.tsx

import Link from 'next/link'; 
import Image from 'next/image'
import { Metadata } from "next";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Stefan's Projects",
  description: "Page where I showcase the projects I have worked on",
};

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { buttonVariants } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function Projects() {
    return (
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10">
            <div className="container max-w-6xl py-6">
                <div className="flex flex-col items-start gap-6 md:flex-row md:justify-between md:gap-8">
                    <div className="flex-1 space-y-4">
                        <h1 className="scroll-m-20 text-4xl py-4 font-extrabold tracking-tight lg:text-5xl">
                            Projects
                        </h1>
                        <p className="leading-7 [&:not(:first-child)]:text-xl text-muted-foreground">
                        Find all my recent coding projects here.
                        </p>
                        <div className="grid grid-cols-2 gap-3 mt-8">
                        <div id = "digit-classifier" className="col-span-2">
                                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 py-4">
                                <Link
                                href="https://github.com/stesliuc/digit-classifier"
                                target="_blank"
                                rel="noreferrer"
                                className="pr-4"
                                >
                                    <div
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "w-10 px-0 items-center sm:inline-flex"
                                    )}
                                    >
                                        <Icons.gitHub className="h-5 w-5" />
                                        <span className="sr-only">GitHub</span>
                                        
                                    </div>
                                </Link>
                                Digit Classifier
                                </h2>
                            </div>
                            <div className="col-span-1 col-start-1">
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                I wanted to learn the math behind neural nets so I wrote a simple digit classifier using just linear algebra.
                                The classifier recognizes digits from the
                                <Link href="https://www.kaggle.com/datasets/hojjatk/mnist-dataset" 
                                            target="_blank"
                                            rel="noreferrer"
                                            className="hover:underline ps-1 pe-1">
                                                MNIST Dataset
                                </Link>
                                and implements a forward and backpropogation algorithm to train itself.
                                </p>
                            </div>
                            <div className="flex justify-center items-center  col-span-1 col-start-2">

                                <Icons.digitclassifier />
                                
                            </div>
                            <div id="portfolio" className="col-span-2">
                                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 py-4">
                                <Link
                                href="https://github.com/stesliuc/stefan-portfolio"
                                target="_blank"
                                rel="noreferrer"
                                className="pr-4"
                                >
                                    <div
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "w-10 px-0 items-center sm:inline-flex"
                                    )}
                                    >
                                        <Icons.gitHub className="h-5 w-5" />
                                        <span className="sr-only">GitHub</span>
                                        
                                    </div>
                                </Link>
                                Portfolio Website
                                </h2>
                            </div>
                            <div className="flex justify-center items-center col-span-1 col-start-1">

                                <Icons.portfolio />

                            </div>
                            <div className="col-span-1 col-start-2">
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                This is the website you are currently reading. I wanted to gain experience coding websites and apps, and build a space to interact with the world.
                                </p>
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                This website is built using
                                <Link href="https://nextjs.org" target="_blank" rel="noreferrer" className="hover:underline ps-1">Next.js 14</Link>, 
                                <Link href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="hover:underline ps-1">tailwind css</Link>,
                                and deployed with<Link href="https://vercel.com" target="_blank" rel="noreferrer" className="hover:underline ps-1">Vercel</Link>.
                                </p>
                            </div>
                            
                            <div id="scraper" className="col-span-2">
                                <h2 className="mt-10 scroll-m-20 border-b text-3xl font-semibold tracking-tight transition-colors first:mt-0 py-4">
                                <Link
                                href="https://github.com/stesliuc/scraper"
                                target="_blank"
                                rel="noreferrer"
                                className="pr-4"
                                >
                                    <div
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "w-10 px-0 items-center sm:inline-flex"
                                    )}
                                    >
                                        <Icons.gitHub className="h-5 w-5" />
                                        <span className="sr-only">GitHub</span>
                                        
                                    </div>
                                </Link>
                                Web Scraper
                                </h2>
                            </div>
                            <div className="col-span-1 col-start-1">
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                This is a simple web scraper I built. This was one of my first coding projects, and I hoped to achieve three things:
                                </p>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="learn-scraping" className="border-none" >
                                        <AccordionTrigger>Learn Scraping</AccordionTrigger>
                                        <AccordionContent>
                                        Learn how to scrape web content using Requests and BeautifulSoup.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="good-research" className="border-none" >
                                        <AccordionTrigger>Rep Best Practices</AccordionTrigger>
                                        <AccordionContent>
                                            Follow the best practices defined in 
                                            <Link href="https://goodresearch.dev/index.html" 
                                            target="_blank"
                                            rel="noreferrer"
                                            className="hover:underline ps-1">
                                                &quot;The Good Research Code Handbook&quot;
                                            </Link>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="gather-data" className="border-none">
                                        <AccordionTrigger>Gather Data</AccordionTrigger>
                                        <AccordionContent>
                                        Gather text data for planned machine learning projects.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className="flex justify-center items-center col-span-1 col-start-2">
                                
                                <Icons.webscraper />
                                
                            </div>
                            <div id="tvrtl" className="col-span-2">
                                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 py-4">
                                <Link
                                href="https://github.com/samrroyall/tvrtl"
                                target="_blank"
                                rel="noreferrer"
                                className="pr-4"
                                >
                                    <div
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "w-10 px-0 items-center sm:inline-flex"
                                    )}
                                    >
                                        <Icons.gitHub className="h-5 w-5" />
                                        <span className="sr-only">GitHub</span>
                                        
                                    </div>
                                </Link>
                                tvrtl
                                </h2>
                            </div>
                            <div className="flex justify-center items-center col-span-1 col-start-1">

                                <Icons.tvrtl />

                            </div>
                            <div className="col-span-1 col-start-2">
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                In Chicago there is a bar called
                                    <Link href="https://www.thetinlizzie.com/turtle-races"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline px-1">Tin Lizzies</Link> 
                                that hosts turtle races.
                                Drunk patrons can bet and cheer on much loved and definitely not exploited turtles that meander around an arena.
                                Considering how popular this was in the local neighborhood, my good friend
                                    <Link href="https://www.samroyall.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline px-1">Sam Royall</Link> 
                                and I thought this would lend itself to a great gambling app.
                                </p>
                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                I was very interested in brownian motion, and b-splines in computer animation, so I focused on procedurally generating the smooth random path the turtle would take.
                                You can find a demo of our app in the 
                                    <Link href="https://github.com/samrroyall/tvrtl"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline ps-1">github</Link>.
                                Happy gambling!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
  }