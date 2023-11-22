import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {}

export const Button = forwardRef(function Button(
  { children, ...otherProps }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      {...otherProps}
      className="flex h-[42px] w-full cursor-pointer items-center justify-center rounded-xl bg-green px-1 text-sm font-medium text-black outline-none hover:bg-yellow md:h-[52px] lg:text-base"
      ref={ref}
    >
      {children}
    </button>
  );
});
