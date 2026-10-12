import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Check,
  Diamond,
  Layers3,
  MessageSquare,
  MoveUpRight,
  PackageCheck,
  Sparkles,
  Star,
  Target,
} from "lucide-react";
import {
  faqs,
  formatMoney,
  packages,
  projects,
  studio,
  testimonials,
} from "@/lib/content";
import { ProjectArtwork } from "@/components/ProjectArtwork";

const process = [
  [
    "Pick your package",
    "A focused logo or the whole brand world. Choose your scope, know your price.",
  ],
  [
    "Tell us your story",
    "Share the idea, the audience, and the things that make your business yours.",
  ],
  [
    "Make it together",
    "Review concepts, choose a direction, and refine the details in your project space.",
  ],
  [
    "Put it out there",
    "Approve your identity and get every file you need to make your next move.",
  ],
];

export default function HomePage() {
  return (
    <main className="homepage">
      <section className="notebook-hero" aria-labelledby="studio-title">
        <div className="hero-kicker handwritten">
          hello, we are <span className="scribble-underline" />
        </div>
        <div className="hero-name-wrap">
          <span className="hero-sticker sticker-mint">Make things matter</span>
          <span className="hero-sticker sticker-yellow">Sweat the details</span>
          <div className="name-frame">
            <h1 id="studio-title">{studio.name}</h1>
          </div>
        </div>
        <div className="hero-caption-row">
          <span className="paper-label yellow handwritten">
            Brand design
            <ArrowUpRight size={22} />
          </span>
          <p className="micro-label">
            <span className="status-dot" /> Independent creative studio
          </p>
          <span className="paper-label mint handwritten">
            <ArrowUpRight size={22} /> Big ideas, made real
          </span>
        </div>
        <div className="hero-message">
          <span className="hero-stamp stamp-left" aria-hidden="true">
            <Sparkles size={27} />
          </span>
          <h2>
            We make brands that{" "}
            <Target
              className="inline-doodle target-doodle"
              aria-hidden="true"
            />
            <br />
            feel like you.{" "}
            <Asterisk
              className="inline-doodle flower-doodle"
              aria-hidden="true"
            />
          </h2>
          <span className="hero-stamp stamp-right" aria-hidden="true">
            <MoveUpRight size={26} />
          </span>
        </div>
        <p className="hero-subtitle">
          A little strategy. A lot of personality. One clear, fixed price.
        </p>
        <div className="hero-cta-row">
          <Link href="/packages" className="scrap-button">
            <span className="button-icon">
              <Diamond size={14} fill="currentColor" />
            </span>
            View packages
            <ArrowUpRight size={15} />
          </Link>
          <Link href="/portfolio" className="hero-work-link">
            Explore our work
            <ArrowDownRight size={17} />
          </Link>
        </div>
        <a
          href="#about-studio"
          className="hero-scroll"
          aria-label="Read about the studio"
          title="About the studio"
        >
          <ArrowDown size={16} />
        </a>
      </section>

      <section
        className="about-scrapbook"
        id="about-studio"
        aria-labelledby="about-title"
      >
        <p className="section-note">a little about us</p>
        <div className="about-layout">
          <figure className="polaroid polaroid-left">
            <div className="polaroid-image">
              <Image
                src="/brand/studio-board.png"
                alt="Printed brand marks and color studies"
                fill
                sizes="(max-width: 640px) 120px, 185px"
                className="object-cover"
              />
            </div>
            <figcaption className="handwritten">ideas on paper</figcaption>
          </figure>
          <div className="about-copy">
            <h2 id="about-title" className="hand-drawn-box">
              good brands have a story.
            </h2>
            <p className="handwritten">
              We&apos;re a small design studio with a big soft spot for bold
              ideas. We turn what makes you different into an identity that
              feels just right.{" "}
              <Sparkles className="note-sparkle" size={25} aria-hidden="true" />{" "}
              From the first sketch to the final little detail, we care about
              the whole thing.
            </p>
            <div className="skill-stickers">
              <span className="torn-label yellow">Brand strategy</span>
              <span className="torn-label yellow sticker-icon">
                <Sparkles size={21} />
              </span>
              <span className="torn-label green">Logo design</span>
              <span className="torn-label green sticker-icon">
                <Asterisk size={24} />
              </span>
              <span className="torn-label pink">Visual identity</span>
              <span className="torn-label pink sticker-icon">
                <Star size={21} />
              </span>
              <span className="torn-label blue">Brand guidelines</span>
              <span className="torn-label blue sticker-icon">
                <Layers3 size={21} />
              </span>
            </div>
          </div>
          <figure className="polaroid polaroid-right">
            <div className="polaroid-image">
              <Image
                src="/brand/studio-board.png"
                alt="Packaging, cards, and finished brand collateral"
                fill
                sizes="(max-width: 640px) 120px, 185px"
                className="object-cover"
              />
            </div>
            <figcaption className="handwritten">the little details</figcaption>
          </figure>
        </div>
      </section>

      <section
        className="selected-work notebook-content"
        id="selected-work"
        aria-label="Selected sample projects"
      >
        <div className="work-tabs">
          <span className="folder-tab blue">
            <Diamond size={8} fill="currentColor" />
            Selected work
          </span>
          <span className="folder-tab black">
            <Diamond size={8} fill="currentColor" />
            Sample projects
          </span>
        </div>
        {projects.slice(0, 3).map((project, index) => (
          <Link
            href={`/portfolio/${project.slug}`}
            key={project.slug}
            className={`project-panel project-panel-${index}`}
          >
            {index > 0 && (
              <span className="project-number">
                <Diamond size={8} fill="currentColor" />
                Project 0{index + 1}
              </span>
            )}
            <div className="project-description">
              <p className="micro-label">
                <span className="project-dot" />
                {project.industry} / {project.service}
              </p>
              <h2>{project.title}</h2>
              <p className="project-summary">{project.summary}</p>
              <span className="project-link">
                View project
                <ArrowUpRight size={13} />
              </span>
            </div>
            <div className={`project-art taped-art art-${index}`}>
              <ProjectArtwork slug={project.slug} />
            </div>
          </Link>
        ))}
        <div className="work-footer">
          <span className="handwritten">
            a few things we&apos;ve put into the world
          </span>
          <Link href="/portfolio">
            All case studies
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="studio-values notebook-content">
        <p className="section-note">small studio. thoughtful process.</p>
        <div className="values-grid">
          {[
            {
              icon: Sparkles,
              title: "Made for you",
              text: "An identity built around your story, with considered creative direction.",
            },
            {
              icon: MessageSquare,
              title: "Less back and forth",
              text: "Concepts, feedback, and revisions together in your own project space.",
            },
            {
              icon: PackageCheck,
              title: "Ready for real life",
              text: "A complete set of clearly organized assets, ready for your next chapter.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="value-item">
              <Icon size={29} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="package-section notebook-content"
        aria-labelledby="packages-title"
      >
        <div className="section-heading">
          <div>
            <p className="section-note">let&apos;s make something</p>
            <h2 id="packages-title">Big ideas. Clear prices.</h2>
          </div>
          <span className="handwritten package-note">
            No guesswork.
            <br />
            Just good design.
            <ArrowDownRight size={24} />
          </span>
        </div>
        <div className="home-packages">
          {packages.map((pkg, index) => (
            <article
              key={pkg.id}
              className={`package-paper package-paper-${index}`}
            >
              <p className="micro-label">
                0{index + 1} /{" "}
                {index === 0
                  ? "THE FIRST STEP"
                  : index === 1
                    ? "THE WHOLE IDENTITY"
                    : "THE BIG PICTURE"}
              </p>
              <h3>{pkg.name}</h3>
              <p className="package-summary">{pkg.summary}</p>
              <p className="package-price">{formatMoney(pkg.price)}</p>
              <p className="package-timeline">{pkg.timeline}</p>
              <ul>
                {pkg.deliverables.slice(0, 4).map((item) => (
                  <li key={item}>
                    <Check size={14} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="package-allowance">
                {pkg.concepts} concepts / {pkg.revisions} revision rounds
              </p>
              <Link href={`/order/${pkg.id}`} className="package-start">
                Start a project
                <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>
        <Link href="/packages" className="text-link package-compare">
          Compare all deliverables & extras
          <ArrowRight size={15} />
        </Link>
      </section>

      <section
        className="process-section notebook-content"
        aria-labelledby="process-title"
      >
        <p className="section-note">from the first hello to the final files</p>
        <h2 id="process-title">Here&apos;s how we get there.</h2>
        <div className="process-grid">
          {process.map(([title, body], index) => (
            <div className="process-step" key={title}>
              <span className="process-number handwritten">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              {index < 3 && (
                <ArrowRight
                  className="process-arrow"
                  size={20}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
        <Link href="/how-it-works" className="text-link">
          The full process
          <ArrowUpRight size={15} />
        </Link>
      </section>

      <section
        className="testimonials-section notebook-content"
        aria-labelledby="feedback-title"
      >
        <p className="section-note">a note from the other side</p>
        <h2 id="feedback-title">Good work starts with good company.</h2>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <figure
              className={`testimonial-note testimonial-note-${index}`}
              key={item.role}
            >
              <p className="micro-label">Sample testimonial</p>
              <blockquote className="handwritten">
                &ldquo;{item.quote.replace("Sample testimonial: ", "")}&rdquo;
              </blockquote>
              <figcaption>
                {item.name}
                <span>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        className="faq-section notebook-content"
        aria-labelledby="faq-title"
      >
        <div>
          <p className="section-note">a few good questions</p>
          <h2 id="faq-title">
            Before we
            <br />
            get started.
          </h2>
          <Asterisk className="faq-flower" size={60} aria-hidden="true" />
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

      <section className="final-cta notebook-content">
        <span className="handwritten">your next chapter starts here.</span>
        <h2>
          Let&apos;s make it
          <br />
          <span>mean something.</span>
          <Star
            className="cta-star"
            size={42}
            fill="currentColor"
            aria-hidden="true"
          />
        </h2>
        <Link href="/packages" className="scrap-button">
          <span className="button-icon">
            <Diamond size={14} fill="currentColor" />
          </span>
          Find your package
          <ArrowUpRight size={15} />
        </Link>
        <Link href="/contact" className="text-link">
          Or say hello
          <ArrowUpRight size={15} />
        </Link>
      </section>
    </main>
  );
}
