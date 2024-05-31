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
                <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                    <div className="flex-1 space-y-4">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                            Projects
                        </h1>
                        <div className="grid grid-cols-2 gap-3 mt-8">
                            <div className="col-span-1 col-start-1">
                                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 py-4">
                                Scraper
                                </h2>
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
                                            <Link href="https://goodresearch.dev/index.html" className="hover:underline ps-1">
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
                                <Link
                                href="https://github.com/stesliuc/scraper"
                                target="_blank"
                                rel="noreferrer"
                                >
                                    <div
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "w-10 px-0 items-center hidden sm:inline-flex"
                                    )}
                                    >
                                        <Icons.gitHub className="h-5 w-5" />
                                        <span className="sr-only">GitHub</span>
                                        
                                    </div>
                                </Link>
                            </div>
                            <div className="col-span-1 col-start-2">
                                <p>
                                Aliquam tristique volutpat velit sit amet vehicula. Proin venenatis pellentesque commodo. Mauris tristique ipsum et ornare facilisis. Suspendisse vitae nibh nulla. Suspendisse potenti. Aliquam vestibulum justo eget libero imperdiet tempus at a purus. Sed nec metus scelerisque, varius ligula in, varius mauris. Curabitur vitae turpis lacus. Nam venenatis leo non scelerisque rutrum. Donec sodales suscipit pretium. Praesent lorem turpis, laoreet in nisi quis, sagittis iaculis purus. Maecenas blandit arcu lorem, quis molestie risus varius sed. Nam ac massa nulla.
                                </p>
                            </div>
                            <div className="col-span-1 col-start-1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id lorem lobortis, aliquam nunc in, lobortis tellus. Mauris vehicula facilisis ullamcorper. Proin a finibus metus. Vestibulum felis dui, tempus luctus est in, mollis dapibus turpis. Donec porttitor purus nisl, in malesuada nunc ullamcorper vitae. Nullam elementum porta erat sed porta. Donec id risus tortor. In hac habitasse platea dictumst. Cras finibus in erat ut sagittis. Curabitur eu pharetra erat. In sagittis vitae libero placerat placerat. Cras eget sapien id elit egestas consectetur luctus id nibh. Aenean sit amet augue a est dignissim feugiat.

                                </p>
                            </div>
                            <div className="col-span-1 col-start-2">
                            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 py-4">
                                Scraper
                                </h2>
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
                                            <Link href="https://goodresearch.dev/index.html" className="hover:underline ps-1">
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
                                <Link
                                href="https://github.com/stesliuc/scraper"
                                target="_blank"
                                rel="noreferrer"
                                >
                                    <div
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "w-10 px-0 items-center hidden sm:inline-flex"
                                    )}
                                    >
                                        <Icons.gitHub className="h-5 w-5" />
                                        <span className="sr-only">GitHub</span>
                                        
                                    </div>
                                </Link>
                            </div>
                            <div className="col-span-1 col-start-1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id lorem lobortis, aliquam nunc in, lobortis tellus. Mauris vehicula facilisis ullamcorper. Proin a finibus metus. Vestibulum felis dui, tempus luctus est in, mollis dapibus turpis. Donec porttitor purus nisl, in malesuada nunc ullamcorper vitae. Nullam elementum porta erat sed porta. Donec id risus tortor. In hac habitasse platea dictumst. Cras finibus in erat ut sagittis. Curabitur eu pharetra erat. In sagittis vitae libero placerat placerat. Cras eget sapien id elit egestas consectetur luctus id nibh. Aenean sit amet augue a est dignissim feugiat.

                                </p>
                            </div>
                            <div className="col-span-1 col-start-2">
                                <p>
                                Aliquam tristique volutpat velit sit amet vehicula. Proin venenatis pellentesque commodo. Mauris tristique ipsum et ornare facilisis. Suspendisse vitae nibh nulla. Suspendisse potenti. Aliquam vestibulum justo eget libero imperdiet tempus at a purus. Sed nec metus scelerisque, varius ligula in, varius mauris. Curabitur vitae turpis lacus. Nam venenatis leo non scelerisque rutrum. Donec sodales suscipit pretium. Praesent lorem turpis, laoreet in nisi quis, sagittis iaculis purus. Maecenas blandit arcu lorem, quis molestie risus varius sed. Nam ac massa nulla.
                                </p>
                            </div>
                        </div>
                        <div id="scraper">
                        
                        </div>
                        <div id="portfolio">
                            
                        </div>
                        <div id = "llm">
                            
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
  }