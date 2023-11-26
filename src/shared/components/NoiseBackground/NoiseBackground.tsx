import React from "react";
import Image from "next/image";

import noise from "../../../../public/images/noise.png";

export function NoiseBackground() {
  return (
    <div className="fixed -z-40 h-screen w-screen overflow-hidden">
      <Image
        className="object-cover"
        src={noise}
        alt="background"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
      />
    </div>
  );
}
