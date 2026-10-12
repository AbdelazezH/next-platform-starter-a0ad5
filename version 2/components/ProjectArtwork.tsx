import Image from "next/image";
import { Asterisk, MoveUpRight } from "lucide-react";

export function ProjectArtwork({ slug }: { slug: string }) {
  if (slug === "kinetic-labs") {
    return (
      <div className="kinetic-board">
        <div className="kinetic-heading">
          <span>
            KINETIC
            <br />
            LABS
          </span>
          <MoveUpRight size={54} strokeWidth={3} />
        </div>
        <div className="kinetic-bottom">
          <span className="kinetic-mark">k.</span>
          <div>
            <p>Ideas in motion.</p>
            <span>ANALYTICS / REIMAGINED</span>
          </div>
        </div>
      </div>
    );
  }
  if (slug === "amble-house") {
    return (
      <div className="amble-board">
        <span className="amble-small">A PLACE TO SLOW DOWN</span>
        <span className="amble-wordmark">
          amble
          <br />
          <i>house.</i>
        </span>
        <div className="amble-bottom">
          <span>STAY A LITTLE LONGER.</span>
          <Asterisk size={46} />
        </div>
      </div>
    );
  }
  if (slug === "tidework-studio") {
    return (
      <div className="tidework-board">
        <span className="micro-label">INDEPENDENT / CREATIVE PRODUCTION</span>
        <span className="tidework-wordmark">
          tide
          <br />
          work<span>studio.</span>
        </span>
        <Asterisk size={56} />
      </div>
    );
  }
  return (
    <Image
      src="/brand/studio-board.png"
      alt="Sample brand identity, packaging, and printed collateral"
      fill
      sizes="(max-width: 640px) 85vw, 550px"
      className="object-cover"
    />
  );
}
