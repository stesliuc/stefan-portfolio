//src/app/about.tsx

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function About() {
    return (
      <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10">
      <div className="container max-w-4xl py-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          About Me
        </h1>
        <blockquote className="text-center mt-6 border-l-2 pl-6 italic">
          &quot;We are what we do repeatedly.&quot;
          <p>Aristotle</p>
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          My name is Mihai Stefan Tesliuc (he/him/his), but I go by Stefan. 
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A few labels:
        </p>
        <ul className="list-disc list-inside">
          <li>I am an aspiring researcher in Artificial Intelligence and Machine Learning. </li>
          <li>I am a Manager at Capital One in their Customer Management division where I head a Machine Learning Innovation team.</li>
          <li>The team is currently just myself but at least that limits the interpersonal drama.</li> 
          <li>I am a mathematician too; quite out of practice with theoretical proofs, but maintaining a passion for cramming my brain with hard concepts.</li>
          <li>I am a Brazilian Jiu Jitsu blue belt at Fifty Fifty academy in Falls Church, VA, which is the only non-participation trophy achievement I have accomplished due to physical prowess.</li>
          <li>I am a nature lover, a romantic idealist, and live quite a happy life in the DC area with my girlfriend Sofie.</li>
        </ul>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          What Motivates Me
        </h2>
        <blockquote className="text-center mt-6 border-l-2 pl-6 italic">
          &quot;Who looks outside, dreams; who looks inside, awakes.&quot;
          <p>Carl Jung</p>
        </blockquote>
        <Accordion type="single" collapsible>
          <AccordionItem value="broader-ideas">
              <AccordionTrigger>Broader Ideas</AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="consciousness">
                    <AccordionTrigger>Consciousness</AccordionTrigger>
                    <AccordionContent>
                      text
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="self">
                    <AccordionTrigger>Self</AccordionTrigger>
                    <AccordionContent>
                      text
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="collective-unconsciousness">
                    <AccordionTrigger>Collective Unconsciousness</AccordionTrigger>
                    <AccordionContent>
                      text
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
          </AccordionItem>
          <AccordionItem value="philosophy">
              <AccordionTrigger>Philosophy</AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="camus">
                    <AccordionTrigger>Camus</AccordionTrigger>
                    <AccordionContent>
                      text
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="marcuse">
                    <AccordionTrigger>Marcuse</AccordionTrigger>
                    <AccordionContent>
                      text
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="weil">
                    <AccordionTrigger>Weil</AccordionTrigger>
                    <AccordionContent>
                      text
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="rousseau">
                    <AccordionTrigger>Rousseau</AccordionTrigger>
                    <AccordionContent>
                      text
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
          </AccordionItem>
          <AccordionItem value="inspirations">
              <AccordionTrigger>Inspirational Figures</AccordionTrigger>
              <AccordionContent>
                text
              </AccordionContent>
          </AccordionItem>
        </Accordion>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Background
        </h2>
        <blockquote className="text-center mt-6 border-l-2 pl-6 italic">
         &quot;Man starts over again everyday, in spite of all he knows, against all he knows.&quot; 
         <p>Emil Cioran</p>
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I am a Romanian immigrant, and grew up in the United States and Kenya. 
          I studied mathematics in undergrad at The University of Chicago.
        </p>
      </div>
    </div>
    </div>
    </section>
    </>
    );
  }
  