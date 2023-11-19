import React from "react";
import Image from "next/image";

interface SocialLinkProps {
  href: string;
  image: string;
  alt: string;
}

export function SocialLink({ href, image, alt }: SocialLinkProps) {
  return (
    <a
      className="flex w-fit rounded-xl bg-gray p-5 hover:bg-btnBGHeader"
      href={href}
      target="_blank"
    >
      <Image
        className="h-[34px] w-[34px] object-cover"
        src={image}
        alt={alt}
        width={34}
        height={34}
      />
    </a>
  );
}
