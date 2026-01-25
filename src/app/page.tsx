//src/app/home.tsx
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 3);
  return (
  <>
  <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10">
    <div className="container max-w-4xl py-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="scroll-m-20 py-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Stefan Tesliuc
          </h1>
          <p className="leading-7 [&:not(:first-child)]:text-xl text-muted-foreground">
            Welcome! I build credit card models and do AI research, and this is a place where I can share my thoughts, post cool projects I&apos;ve worked on, and give folks a way to reach out.
            Check out my 
            <Link href="/about" className="no-underline hover:underline ps-1 pe-1">
              About Me
            </Link>
            page to learn more.
          </p>
          <h2 className="mt-10 scroll-m-20 border-b py-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Research Interests
          </h2>
          <blockquote className="text-center text-lg mt-6 border-l-2 pl-6 italic">
            &quot;I come with empty hands and the desire to unbuild walls.&quot; 
            <p>Ursula K. Le Guin</p>
          </blockquote>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am interested in how neuroscience, psychology, and philosophy can be applied to make machine learning algorithms more intelligent, and aligned with humanistic values.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Some questions that are very interesting to me right now:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>How can AI systems self-improve?</li>
            <li>How can researchers ensure self-improving systems remain safe and don&apos;t develop biases?</li>
            <li>How can insights from human reasoning-such as hierarchical planning, memory, or counterfactual reasoning-inform new approaches?</li>
          </ul>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
          </p>
          <h3 className="mt-10 scroll-m-20 border-b py-4 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            More General Interests
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="machine-consciousness">
              <AccordionTrigger className="text-xl font-semibold tracking-tight">
                Machine Consciousness
              </AccordionTrigger>
              <AccordionContent className="text-base space-y-6">
                <p>
                  I am interested in developing machines that can think and feel and understand.
                </p>
                <p>
                  Sounds easy! I promise I am the opposite of a pro-extinction doomer who wants
                  to usher in an age of supreme AI overlords. Instead, I see the repeated pattern
                  of new technology being implemented haphazardly, usually for economic gain at
                  the cost of the human experience.
                </p>
                <p>
                  Sure, technology has provided countless improvements to human life, but it has
                  also resulted in increased toil, expectations of greater production, and a
                  stripping away of many human rights and ideals. Technology is a tool, and tools
                  are commonly used by those with power to increase their power, and rarely to
                  democratize it.
                </p>
                <p>
                  I think AI in its current implementation falls in the former camp, but I
                  wholeheartedly believe in its capability for the latter. Developing machine
                  consciousness is the biggest technological leap toward creating AI systems
                  that are more human and humane. A conscious computer could understand subjective
                  experience and thus be better suited to making ethical decisions.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="algorithmic-fairness">
              <AccordionTrigger className="text-xl font-semibold tracking-tight">
                Algorithmic Fairness
              </AccordionTrigger>
              <AccordionContent className="text-base space-y-6">
                <p>
                  Algorithmic fairness is an extremely important topic to me. If you haven&apos;t read
                  it, I highly recommend Cathy O&apos;Neil&apos;s 
                  <em>
                    <Link href="https://en.wikipedia.org/wiki/Weapons_of_Math_Destruction" className="no-underline hover:underline ps-1 pe-1">
                      Weapons of Math Destruction
                    </Link>
                  </em>.
                </p>
                <p>
                  The reason I went into credit card modeling was to observe and hopefully improve
                  the fairness of the quantitative decisioning engines at the heart of many
                  people&apos;s lives, and that same passion led me to studying fairness in AI systems.
                </p>
                <p>
                  Our current methods of determining algorithmic fairness are grounded in
                  quantitative abstractions, which will never understand the depths of the human
                  experience. Human life is too complex to be simulated by a few sets of rules,
                  making purely rules-based AI systems fundamentally anti-human in design.
                </p>
                <p>
                  There are abstractions of fairness that can get us closer to equity, but we need
                  fairness frameworks powerful enough to grasp the nuance of the concept. I am
                  interested in AI that can understand the impacts of its decisions and learn to
                  act fairly.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ml-in-banking">
              <AccordionTrigger className="text-xl font-semibold tracking-tight">
                ML in Banking
              </AccordionTrigger>
              <AccordionContent className="text-base space-y-6">
                <p>
                  I am currently working in the financial industry, an application of machine
                  learning that sits at the heart of many people&apos;s lives.
                </p>
                <p>
                  My latest project is PersonaLedger, a collaboration between Capital One and UMD
                  researchers where we built a synthetic data generation framework centered
                  around LLMs to generate realistic financial transaction data.
                </p>
                <p>
                  The theme of PersonaLedger was self-improvement: beyond privacy-preserving data
                  generation, we explored how LLMs can act as self-regulating agents that evaluate
                  and learn from their own outputs. I&apos;ve also worked on projects ranging from
                  simple linear regression to using foundation models to autoregressively predict
                  future customer actions.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </section>
  <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-30">
        <h2 className="text-4xl font-black text-center">
          Latest Blog Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
  </>
  );
}
