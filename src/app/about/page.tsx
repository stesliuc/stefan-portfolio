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
        <h1 className="scroll-m-20 text-4xl py-4 font-extrabold tracking-tight lg:text-5xl">
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
          <li>I am an aspiring researcher in Artificial Intelligence and Machine Learning.</li>
          <li>I am a Manager at Capital One where I lead the Customer Management Machine Learning Innovation team.</li>
          <li>I am a mathematician with a masochism for attacking my brain with hard concepts.</li>
          <li>I am a Brazilian Jiu Jitsu blue belt at
          <Link href="https://www.5050bjj.com/" className="ps-1 pe-1 hover:underline" target="_blank" rel="noreferrer">Fifty Fifty academy</Link>
          in Falls Church, VA, which is the only achievement I have ever accomplished due to physical prowess.</li>
          <li>I am a nature lover, a romantic idealist, and live a happy life in the DC area with my girlfriend Sofie.</li>
        </ul>
        <h2 className="mt-10 scroll-m-20 border-b py-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
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
                      I am deeply interested in the concept of consciousness and its relationship with intelligence.
                      I think it&apos;s incredible that we understand it so little, and yet our human selves are entirely dependent on it.
                      I want to explore consciousness and what brings rise to subjective experience through a mathematical, computational, philsophical, and mystical lens.
                      I am fascinated by the endless different explanations of consciousness, from the quantum interpretations tied to the observer effect, to the suggestion of consciousness as a curse, or a glitch.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="collective-unconsciousness">
                    <AccordionTrigger>Collective Unconsciousness</AccordionTrigger>
                    <AccordionContent>
                      Jung&apos;s idea of the collective unconscious is simultaneously powerful, controversial, and inherent.
                      It posits a collective pool of experiences and instincts, that are shared amongst all humans.
                      The theory suggests that instincts are explained as unconscious reactions based on prior triggers and knowledge hardcoded into this collective pool of knowledge.
                      The idea of a shared knowledge base is fascinating, and gives rise to human parallel processing for collaboration.
                      Jung focused a lot of his studies on how to harness your unconscious, and I like practicing Jungian introspection in my personal life.
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
                      I love existential philosophy, as it tackles impossible problems that are inherently tied to the curse of consciousness.
                      I enjoy analyzing modern problems through an existential lens, and no philosopher has understood the nature of the human condition as much as Camus.
                      From &quot;The Fall&quot; to &quot;The Myth of Sisyphus&quot;, Camus poetically lampoons the modern, existentially-plagues figure, and anticipates their behavior.
                      His work has never been more relevant, and reading it breaks you down, only to build yourself back up stronger.
                      His core idea is that the human condition is characterized by a struggle for self-justification and a search for identity, but this struggle is a beautiful one that should be cherished. 
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="marcuse">
                    <AccordionTrigger>Marcuse</AccordionTrigger>
                    <AccordionContent>
                      Marcuse has a few ideas I love.
                      The first is that the ideas we are capable of having are shaped by our environment.
                      I love this idea as much as it terrifies me, and it comes up in examples such as the Sapir-Whorf hypothesis.
                      The second is that humans have a drive to create, Eros. 
                      I think this is inherently true.
                      And the second is less so an idea, and more of an observation, of the monopolistic capitalist society we live in, restricting our thoughts, and supressing our Eros.
                      Marcuse perfectly outlines the cyclical trap we have found ourselves in where toil exists for the purpose of toil, and our ideas are so polluted by the world we live in we cannot fathom an alternative.
                      It is some of the most upsetting philosophy I have read, but also suggests revolutionary art and the quiet refusal as ways out. 
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="rousseau">
                    <AccordionTrigger>Rousseau</AccordionTrigger>
                    <AccordionContent>
                      Rousseau believed in humanity.
                      He did not buy that humans were inherently violent animals, but within man there was a creative, romantic spark that would enable collaboration, if we were allowed to be truly free.
                      He states, &quot;Man is born free; and everywhere he is in chains.&quot;. 
                      Life today is pre-defined by the rules of our society, and technology is rapidly creating new rules for the way life is lived, which most people have no control over.
                      We are born into a pre-defined society with laws, social contracts, and technology.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
          </AccordionItem>
          <AccordionItem value="inspirations">
              <AccordionTrigger>Inspirational Figures</AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="herbert">
                    <AccordionTrigger>Frank Herbert</AccordionTrigger>
                    <AccordionContent>
                      Frank Herbert was able to understand the patterns of human nature, and the drivers behind our motives (religion, politics, ecology, destiny).
                      He not only understood these, but was able to build a world to show us a way out.
                      He is a revolutionary author.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="leguin">
                    <AccordionTrigger>Ursula K. Le Guin</AccordionTrigger>
                    <AccordionContent>
                      I am convinced Ursula K. Le Guin is a time traveler from the future.
                      According the Marcuse, she should not be able to have the ideas she does, and yet in &quot;The Dispossessed&quot;, Le Guin conjures up an anarchist alternative to monopolistic capitalism that although not prefect, feels so much closer than any other idea positied by political philosophers.
                      Le Guin&apos;s work changed my political and personal philosophies, and I think her works are the most revolutionary pieces of fiction I have ever read.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="weil">
                      <AccordionTrigger>Simone Weil</AccordionTrigger>
                      <AccordionContent>
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
        <blockquote className="text-center mt-6 border-l-2 pl-6 italic">
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
  