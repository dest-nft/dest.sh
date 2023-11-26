import React from "react";
import Image from "next/image";

interface IEEmojiProps {
  type: "green-fire" | "sparkles-cat" | "tongue-cat";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export function Emoji({ type, ...positions }: IEEmojiProps) {
  return (
    <div
      className="fixed w-fit rounded-full border border-yellow p-3 backdrop-blur"
      style={{ ...positions }}
    >
      <Image src={`/emojis/${type}.png`} alt="emoji" width={48} height={48} />
    </div>
  );
}
