import React from "react";
import Link from "next/link";
import Image from "next/image";

export function DestLink() {
  return (
    <Link href="/">
      <Image src="/icons/dest.svg" alt="DEST" width={153} height={30} />
    </Link>
  );
}
