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
        "h-fit w-fit rounded-full border border-yellow p-3 backdrop-blur",
        className,
      )}
    >
      <Image src={`/emojis/${type}.png`} alt="emoji" width={48} height={48} />
    </div>
  );
}
