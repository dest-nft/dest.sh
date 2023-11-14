import { AnchorHTMLAttributes, PropsWithChildren } from "react";
interface DestLinkProps
  extends PropsWithChildren,
    AnchorHTMLAttributes<HTMLAnchorElement> {}

export function DestLink({ children, ...linkProps }: DestLinkProps) {
  return (
    <a
      className="flex items-center h-[74px] py-4 px-5 bg-white/10 rounded-xl hover:opacity-80 w-fit leading-none"
      {...linkProps}
    >
      {children}
    </a>
  );
}
