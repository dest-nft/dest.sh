import React from "react";
import { DestLink } from "@/shared/components/DestLink";
import { SocialLink } from "@/app/_components/Footer/SocialLink";
import { DevBrotherLink } from "@/app/_components/Footer/DevBrotherLink";

export function Footer() {
  return (
    <footer className="py-8 md:py-10">
      <div className="container mx-auto flex flex-wrap items-center gap-4 px-4 sm:justify-between">
        <div className="flex flex-col">
          <div className="mb-3 flex">
            <DestLink />
          </div>
          <p>Copyright DEST © 2023</p>
        </div>
        <nav className="flex flex-wrap gap-4">
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
      </div>
    </footer>
  );
}
