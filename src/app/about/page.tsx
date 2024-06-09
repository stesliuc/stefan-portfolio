//src/app/about.tsx

import Link from "next/link";
import { Icons } from "@/components/icons";
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
        <h1 className="scroll-m-20 text-4xl py-4 font-extrabold tracking-tight lg:text-5xl">
          About Me
        </h1>
        <div className="grid grid-cols-2 gap-3 mt-8">
          <div className="col-start-1 col-span-1">
            <blockquote className="text-center text-lg mt-6 border-l-2 pl-6 italic">
            &quot;We are what we do repeatedly.&quot;
            <p>Aristotle</p>
            </blockquote>
          </div>
          <div className="col-start-2 col-span-1 item-start justify-start">
            <Icons.readingguy />
          </div>
        </div>
        
        
        <p className="leading-7 [&:not(:first-child)]:text-xl text-muted-foreground">
          My name is Mihai Stefan Tesliuc (he/him/his), but I go by Stefan. 
        </p>
        <h2 className="mt-10 scroll-m-20 border-b py-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          A few labels
        </h2>
        <ul className="space-y-6">
          <li>I am an aspiring researcher in Artificial Intelligence and Machine Learning.</li>
          <li>I am a Manager at Capital One where I lead the Customer Management Machine Learning Innovation team.</li>
          <li>I am a mathematician with a masochism for attacking my brain with hard concepts.</li>
          <li>I am a Brazilian Jiu Jitsu blue belt at
          <Link href="https://www.5050bjj.com/" className="ps-1 pe-1 hover:underline" target="_blank" rel="noreferrer">Fifty Fifty academy</Link>
          in Falls Church, VA, which is the only achievement I have ever accomplished due to physical prowess.</li>
          <li>I am a nature lover, a romantic idealist, and live in the DC area with my girlfriend Sofie.</li>
        </ul>
        <h2 className="mt-10 scroll-m-20 border-b py-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          What Motivates Me
        </h2>
        <blockquote className="text-center text-lg mt-6 border-l-2 pl-6 italic">
          &quot;Who looks outside, dreams; who looks inside, awakes.&quot;
          <p>Carl Jung</p>
        </blockquote>
        <Accordion type="single" collapsible>
          <AccordionItem value="broader-ideas">
              <AccordionTrigger className="text-xl">Broader Ideas</AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="consciousness">
                    <AccordionTrigger className="text-lg">Consciousness</AccordionTrigger>
                    <AccordionContent className="text-base">
                      I am interested in the concept of consciousness and its relationship with intelligence, and am even more interested in it due to how little we actually understand it.
                      It makes you wonder if science isn&apos;t equipped to explain consciousness, hmm...
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="collective-unconsciousness">
                    <AccordionTrigger className="text-lg">Collective Unconsciousness</AccordionTrigger>
                    <AccordionContent className="text-base">
                      Jung&apos;s idea of the collective unconscious suggests there is a collective pool of experiences and instincts, that are shared amongst all humans, hard-coded into our DNA.
                      When you act on instinct for example, your unconcious is dipping into this pool and taking a big long sip, relaying how to act beneath the level of your active consciousness.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
          </AccordionItem>
          <AccordionItem value="philosophy">
              <AccordionTrigger className="text-xl">Philosophy</AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="camus">
                    <AccordionTrigger className="text-lg">Camus</AccordionTrigger>
                    <AccordionContent className="text-base">
                      I love existential philosophy; it is a sysphean task to try to answer the most impossible questions in life.
                      No philosopher has understood the nature of the human condition as much as Camus.
                      From &quot;The Fall&quot; to &quot;The Myth of Sisyphus&quot;, Camus creates vile characters that seem to predict a lot of the toxic traits you see in the modern day world.
                      His core idea is that the human condition is characterized by a struggle for self-justification and a search for identity, and he teaches how to love that struggle.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="marcuse">
                    <AccordionTrigger className="text-lg">Marcuse</AccordionTrigger>
                    <AccordionContent className="text-base">
                      Marcuse suggests that the ideas we are capable of having are shaped by our environment.
                      He also talks about the Eros inherent in us, a human drive to create, versus the monopolistic capitalist society we live in, restricting our thoughts and supressing our Eros.
                      Marcuse perfectly outlines the cyclical trap we have found ourselves in where toil exists for the purpose of toil, and our ideas are so polluted by the world we live in we cannot fathom an alternative.
                      His philosophy is bleak, it feels so true to modern day life, but he also offers some ways out if you believe him.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="rousseau">
                    <AccordionTrigger className="text-lg">Rousseau</AccordionTrigger>
                    <AccordionContent className="text-base">
                      Rousseau really believed in us humans.
                      He did not buy that humans were inherently violent animals, but within man there was a creative, romantic spark that would enable collaboration, if we were allowed to be truly free.
                      He states, &quot;Man is born free; and everywhere he is in chains.&quot;. 
                      Life today is pre-defined by the rules of our society, and technology is rapidly creating new rules for the way life is lived, which most people have no control over.
                      I think Rousseau would have a lot of thoughts about technology and society today, and he might be a little horrified by what he saw.
                      I like his philsophy as it is a reminder of the natural state of man.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
          </AccordionItem>
          <AccordionItem value="inspirations">
              <AccordionTrigger className="text-xl">Inspirational Figures</AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="herbert">
                    <AccordionTrigger className="text-lg">Frank Herbert</AccordionTrigger>
                    <AccordionContent className="text-base">
                      Frank Herbert was able to understand the patterns of human nature, and the drivers behind our motives (religion, politics, ecology, destiny).
                      He not only understood these, but was able to build a world to show us a way out.
                      He is a revolutionary author.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="leguin">
                    <AccordionTrigger className="text-lg">Ursula K. Le Guin</AccordionTrigger>
                    <AccordionContent className="text-base">
                      I am convinced Ursula K. Le Guin is a time traveler from the future.
                      According the Marcuse, she should not be able to have the ideas she does, and yet in &quot;The Dispossessed&quot;, Le Guin conjures up an anarchist alternative to monopolistic capitalism that although not prefect, feels so much closer than any other idea positied by political philosophers.
                      Le Guin&apos;s work changed my political and personal philosophies, and I think her works are the most revolutionary pieces of fiction I have ever read.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="weil">
                      <AccordionTrigger className="text-lg">Simone Weil</AccordionTrigger>
                      <AccordionContent className="text-base">
                        Simone Weil is a badass, and no philosopher has ever lived their ideals to the level that she did.
                        Her core concept is &quot;attention&quot;, a way of connecting with the outside world that is free of prior prejudice, and leaves you truly open to the signals of the universe.
                        Her ideas are radical, and she was even more so.
                        She died too young, but riding the blazing horse of her values, never to be forgotten.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
              </AccordionContent>
          </AccordionItem>
        </Accordion>
        <h2 className="mt-10 scroll-m-20 border-b py-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Background
        </h2>
        <blockquote className="text-center text-lg mt-6 border-l-2 pl-6 italic">
         &quot;Man starts over again everyday, in spite of all he knows, against all he knows.&quot; 
         <p>Emil Cioran</p>
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I was born in Romania and grew up in the United States and Kenya. 
          I studied pure mathematics in undergrad at The University of Chicago.
        </p>
      </div>
    </div>
    </div>
    </section>
    </>
    );
  }
  