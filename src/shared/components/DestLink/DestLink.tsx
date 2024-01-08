import Link from "next/link";
import Image from "next/image";

export function DestLink() {
  return (
    <Link href="/">
      <Image
        className="h-5 w-auto md:h-8"
        src="/icons/dest.svg"
        alt="DEST"
        width={93}
        height={20}
      />
    </Link>
  );
}
