import { PropsWithChildren } from "react";

interface IAnchorProps extends PropsWithChildren {
  readonly name: string;
}

export function Anchor({ name, children }: IAnchorProps) {
  return (
    <div id={name} className="hi relative top-[-100px] block">
      {children}
    </div>
  );
}
