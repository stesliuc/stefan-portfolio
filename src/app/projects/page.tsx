//src/app/projects.tsx

import Link from 'next/link'; 
import Image from 'next/image'

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
      <main>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl p-4">
        Projects
        </h1>
        <div id="scraper">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 p-4">
            Scraper
            </h2>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                    <p>This is a simple web scraper I built. This was one of my first coding projects, and I hoped to achieve three things</p>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="learn-scraping">
                            <AccordionTrigger>Learn Scraping</AccordionTrigger>
                            <AccordionContent>
                               Learn how to scrape web content using Requests and BeautifulSoup.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="good-research">
                            <AccordionTrigger>Rep Best Practices</AccordionTrigger>
                            <AccordionContent>
                                Follow the best practices defined in 
                                <Link href="https://goodresearch.dev/index.html" className="hover:underline ps-1">
                                    &quot;The Good Research Code Handbook&quot;
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="gather-data">
                            <AccordionTrigger>Gather Data</AccordionTrigger>
                            <AccordionContent>
                              Gather text data for planned Machine Learning projects.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Link href="https://github.com/stesliuc/scraper" className={buttonVariants({ variant: "outline" })}>
                        Github
                    </Link>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <Image
                        src="/hanginthere.jpeg"
                        width={500}
                        height={500}
                        alt="Hanging in there"
                    />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
        <div id="portfolio">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 p-4">
                Portfolio
            </h2>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                    <Image
                        src="/hanginthere.jpeg"
                        width={500}
                        height={500}
                        alt="Hanging in there"
                    />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                <p>Description of Portfolio Project</p>
                    <Link href="https://github.com/stesliuc/stefan-portfolio" className={buttonVariants({ variant: "outline" })}>Github</Link>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
        <div id = "llm">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 p-4">
                Llama3 Model
            </h2>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                    <p>Description of Llame3 LLM Project</p>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                    <Image
                        src="/hanginthere.jpeg"
                        width={500}
                        height={500}
                        alt="Hanging in there"
                    />
                </ResizablePanel>
            </ResizablePanelGroup>
            </div>
      </main>
    );
  }