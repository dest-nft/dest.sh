import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface IEEmojiProps {
  type: "green-fire" | "green-heart-eyes" | "sparkles-cat" | "tongue-cat";
  className?: string;
}

export function Emoji({ type, className }: IEEmojiProps) {
  return (
    <div
      className={twMerge(
        "flex h-[68px] w-[68px] items-center justify-center rounded-full border border-yellow p-3 backdrop-blur",
        className,
      )}
    >
      <Image
        src={`/emojis/${type}.png`}
        alt="emoji"
        className="scale-75"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
