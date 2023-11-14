import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {}

export const Button = forwardRef(function Button(
  { children, ...otherProps }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      {...otherProps}
      className="w-full h-[42px] md:h-[52px] flex justify-center items-center bg-green hover:bg-yellow rounded-xl px-1 text-sm lg:text-base font-medium text-black outline-none cursor-pointer"
      ref={ref}
    >
      {children}
    </button>
  );
});
