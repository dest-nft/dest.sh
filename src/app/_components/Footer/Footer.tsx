import { DestLink } from "@/shared/components/DestLink";
import { SocialLink } from "@/app/_components/Footer/SocialLink";
import { DevBrotherLink } from "@/app/_components/Footer/DevBrotherLink";

export function Footer() {
  return (
    <footer className="container mx-auto my-8 flex flex-wrap items-center justify-center gap-4 sm:justify-between md:my-10">
      <div className="flex flex-col">
        <div className="mb-3 flex">
          <DestLink />
        </div>
        <p className="text-xs">Copyright DEST © 2023</p>
      </div>
      <nav className="flex flex-wrap justify-center gap-4">
        <DevBrotherLink />
        <div className="flex gap-4">
          <SocialLink
            href="https://linkedin.com/"
            image="/icons/linkedin.svg"
            alt="LinkedIn"
          />
          <SocialLink
            href="https://twitter.com/"
            image="/icons/twitter.svg"
            alt="Twitter"
          />
        </div>
      </nav>
    </footer>
  );
}
