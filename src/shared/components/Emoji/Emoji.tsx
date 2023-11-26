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
      className="w-fit rounded-full bg-gradient-to-br from-yellow to-emojiBgGray to-75% p-[1px]"
      style={{ ...positions }}
    >
      <div className="rounded-full bg-emojiBgGray p-3">
        <Image src={`/emojis/${type}.png`} alt="emoji" width={48} height={48} />
      </div>
    </div>
  );
}
