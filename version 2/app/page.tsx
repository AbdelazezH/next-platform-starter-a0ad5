import Image from "next/image";
import Link from "next/link";
import {
  Aperture,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Circle,
  Fingerprint,
  Layers3,
  Lightbulb,
  MoveUpRight,
  Sparkles,
  Target,
} from "lucide-react";
import { ProjectArtwork } from "@/components/ProjectArtwork";
import {
  faqs,
  formatMoney,
  packages,
  projects,
  studio,
  testimonials,
} from "@/lib/content";

export default function HomePage() {
  return (
    <main className="homepage-v2">
      <section className="sky-hero" aria-labelledby="hero-title">
        <Image
          src="/brand/sky-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="sky-background"
        />
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">Independent branding studio</p>
          <h1 id="hero-title">
            {studio.name}
            <span>Your next chapter, by design.</span>
          </h1>
          <p className="hero-description">
            We turn what makes you different into a brand that moves you
            forward.
            <br className="desktop-break" /> Thoughtful strategy. Distinctive
            design. One clear price.
          </p>
          <div className="hero-buttons">
            <Link href="/portfolio" className="button button-glass">
              Explore our work
              <ArrowUpRight size={15} />
            </Link>
            <Link href="/packages" className="button button-lime">
              View packages
              <span className="arrow-disc">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </div>
        <div className="floating-gallery" aria-label="Sample brand work">
          <Link
            href="/portfolio/northline-provisions"
            className="floating-tile tile-1"
            aria-label="Explore the Northline sample identity"
          >
            <div className="tile-label">
              A whole
              <br />
              brand world.
            </div>
            <div className="tile-palette">
              <span />
              <span />
              <span />
            </div>
            <span className="tile-footer">NORTHLINE</span>
          </Link>
          <Link
            href="/portfolio/kinetic-labs"
            className="floating-tile tile-2"
            aria-label="Explore the Kinetic Labs sample identity"
          >
            <span className="tile-label">Kinetic Labs</span>
            <span className="tile-kinetic">k.</span>
            <span className="tile-footer">
              IDEAS IN MOTION
              <MoveUpRight size={16} />
            </span>
          </Link>
          <Link
            href="/portfolio/northline-provisions"
            className="floating-tile tile-3"
            aria-label="View sample brand collateral"
          >
            <Image
              src="/brand/studio-board.png"
              alt="Sample brand collateral"
              fill
              sizes="160px"
              className="object-cover"
            />
            <span className="image-tile-label">
              From idea
              <br />
              to identity.
            </span>
          </Link>
          <Link
            href="/portfolio/amble-house"
            className="floating-tile tile-4"
            aria-label="Explore the Amble House sample identity"
          >
            <span className="tile-label">
              A place to
              <br />
              slow down.
            </span>
            <span className="tile-amble">
              amble
              <br />
              <i>house.</i>
            </span>
            <span className="tile-footer">
              STAY A LITTLE LONGER
              <Aperture size={17} />
            </span>
          </Link>
          <Link
            href="/packages"
            className="floating-tile tile-5"
            aria-label="Explore brand identity packages"
          >
            <Fingerprint size={29} />
            <p>
              Strategy that
              <br />
              finds your story.
              <br />
              <span>
                Design that
                <br />
                makes it matter.
              </span>
            </p>
            <span className="tile-footer">
              MADE TO BE YOU
              <ArrowUpRight size={16} />
            </span>
          </Link>
          <Link
            href="/portfolio/tidework-studio"
            className="floating-tile tile-6"
            aria-label="Explore the Tidework sample identity"
          >
            <Aperture size={34} />
            <span className="tile-tide">tidework.</span>
            <span className="tile-footer">CREATIVE BY NATURE</span>
          </Link>
          <Link
            href="/how-it-works"
            className="floating-tile tile-7"
            aria-label="Read our design process"
          >
            <span className="tile-label">
              Good design.
              <br />
              Every detail.
            </span>
            <Layers3 size={50} strokeWidth={1} />
            <span className="tile-footer">THINK / MAKE / REFINE</span>
          </Link>
        </div>
        <div className="hero-footnote">
          <span className="hero-check">
            <Check size={11} />
          </span>
          Sample identities. Real possibilities.
          <a href="#about" aria-label="Meet the studio" title="Meet the studio">
            <ArrowDown size={16} />
          </a>
        </div>
      </section>

      <section className="brand-strip" aria-label="Sample portfolio identities">
        <span className="strip-caption">SAMPLE IDENTITIES</span>
        <span className="strip-brand">
          <Aperture size={23} />
          northline.
        </span>
        <span className="strip-brand kinetic-strip">
          <MoveUpRight size={23} />
          Kinetic Labs
        </span>
        <span className="strip-brand amble-strip">amble house.</span>
        <span className="strip-brand">
          <Circle size={22} strokeWidth={4} />
          tidework.
        </span>
      </section>

      <section
        className="about-section content-width"
        id="about"
        aria-labelledby="about-title"
      >
        <p className="eyebrow centered">About us</p>
        <h2 id="about-title">
          An independent creative partner
          <br className="desktop-break" /> for building{" "}
          <span className="inline-icon cyan-icon">
            <Target size={22} />
          </span>{" "}
          distinctive brands
          <br className="desktop-break" />
          <span className="muted-text">with a little </span>
          <span className="inline-icon lime-icon">
            <Lightbulb size={20} fill="currentColor" />
          </span>
          <span className="muted-text"> more character.</span>
        </h2>
        <div className="about-bento">
          <Link href="/portfolio" className="bento-work">
            <Image
              src="/brand/studio-board.png"
              alt="Thoughtful identity design and printed brand collateral"
              fill
              sizes="(max-width: 767px) 100vw, 400px"
              className="object-cover"
            />
            <div className="bento-work-top">
              <Aperture size={25} />
              <span>SELECTED SAMPLE WORK</span>
              <span className="bento-arrow">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="work-caption">
              <p>
                Built to feel
                <br />
                like you.
              </p>
              <span>From the first sketch to the final files.</span>
            </div>
          </Link>
          <div className="bento-care">
            <p className="small-label">Good work is in the details</p>
            <h3>
              A little strategy.
              <br />A lot of care.
            </h3>
            <div className="care-icons">
              <span>
                <Fingerprint size={19} />
              </span>
              <span>
                <Layers3 size={19} />
              </span>
              <span>
                <Sparkles size={19} />
              </span>
            </div>
            <p>
              We get to know your story, explore the possibilities, and shape an
              identity you can make your own.
            </p>
            <Link href="/about" className="text-link">
              Meet the studio
              <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="bento-right">
            <Link href="/packages" className="bento-packages">
              <p className="small-label">One clear scope. One fixed price.</p>
              <h3>
                3 ways
                <br />
                to move forward.
              </h3>
              <span>
                From a focused logo to a complete brand launch.
                <ArrowUpRight size={20} />
              </span>
            </Link>
            <Link href="/portal" className="bento-portal">
              <span>Your project, in one place.</span>
              <ArrowUpRight size={27} />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="work-section content-width"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work / Sample projects</p>
            <h2 id="work-title">Distinctive by design.</h2>
          </div>
          <Link href="/portfolio" className="text-link">
            All case studies
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="work-grid">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="work-item"
            >
              <div className={`work-visual work-visual-${project.slug}`}>
                <div className="work-art">
                  <ProjectArtwork slug={project.slug} />
                </div>
                <span className="work-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
              <div className="work-item-caption">
                <div>
                  <h3>{project.title}</h3>
                  <p>
                    {project.industry} / {project.service}
                  </p>
                </div>
                <span>Sample identity</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="packages-section" aria-labelledby="packages-title">
        <div className="content-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Our services</p>
              <h2 id="packages-title">
                Your ambition.
                <br />
                <span className="muted-text">The right starting point.</span>
              </h2>
            </div>
            <p className="section-intro">
              Clear deliverables, thoughtful concepts,
              <br />
              and room to get every detail right.
            </p>
          </div>
          <div className="package-grid">
            {packages.map((pkg, index) => (
              <article
                className={`package-paper package-paper-${index}`}
                key={pkg.id}
              >
                <span className="package-index">
                  0{index + 1}
                  <span>
                    {index === 1
                      ? "THE COMPLETE IDENTITY"
                      : index === 0
                        ? "THE FIRST STEP"
                        : "THE FULL LAUNCH"}
                  </span>
                </span>
                <h3>{pkg.name}</h3>
                <p className="package-summary">{pkg.summary}</p>
                <p className="package-price">{formatMoney(pkg.price)}</p>
                <p className="package-timeline">
                  {pkg.timeline} / {pkg.revisions} revision rounds
                </p>
                <ul>
                  {pkg.deliverables.slice(0, 4).map((item) => (
                    <li key={item}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={`/order/${pkg.id}`} className="package-start">
                  Start a project
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            ))}
          </div>
          <Link href="/packages" className="text-link compare-link">
            Compare every deliverable & optional extra
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section
        className="process-section content-width"
        aria-labelledby="process-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 id="process-title">
              A good process.
              <br />
              <span className="muted-text">A better beginning.</span>
            </h2>
          </div>
          <Link href="/how-it-works" className="text-link">
            The full process
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="process-grid">
          {[
            [
              "Choose your scope",
              "Pick your package and the extras that fit your next step.",
            ],
            [
              "Share your story",
              "Tell us about your audience, your ideas, and your ambitions.",
            ],
            [
              "Find your direction",
              "Review concepts and refine your favorite with clear feedback.",
            ],
            [
              "Make your next move",
              "Approve your brand and download everything you need to launch.",
            ],
          ].map(([title, body], index) => (
            <div className="process-item" key={title}>
              <span className="process-index">
                0{index + 1}
                <ArrowUpRight size={20} />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="feedback-section content-width"
        aria-labelledby="feedback-title"
      >
        <p className="eyebrow">Good company</p>
        <h2 id="feedback-title">A shared idea. A thoughtful outcome.</h2>
        <div className="feedback-grid">
          {testimonials.map((item) => (
            <figure key={item.role}>
              <p className="small-label">Sample testimonial</p>
              <blockquote>
                &ldquo;{item.quote.replace("Sample testimonial: ", "")}&rdquo;
              </blockquote>
              <figcaption>
                <span className="client-avatar">
                  <Aperture size={18} />
                </span>
                <div>
                  {item.name}
                  <span>{item.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        className="faq-section content-width"
        aria-labelledby="faq-title"
      >
        <div>
          <p className="eyebrow">A little clarity</p>
          <h2 id="faq-title">
            Before we
            <br />
            get started.
          </h2>
          <Link href="/contact" className="text-link">
            Have another question?
            <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>
                {faq.q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="closing-section">
        <div className="content-width">
          <p className="eyebrow">Your next chapter</p>
          <h2>
            Make it unmistakably
            <br />
            <span>you.</span>
            <Aperture size={70} aria-hidden="true" />
          </h2>
          <div>
            <Link href="/packages" className="button button-dark">
              Find your package
              <span className="arrow-disc">
                <ArrowUpRight size={18} />
              </span>
            </Link>
            <Link href="/contact" className="text-link">
              Or say hello
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
