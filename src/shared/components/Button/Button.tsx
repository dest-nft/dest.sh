import { ButtonHTMLAttributes, forwardRef } from "react";
import { twJoin } from "tailwind-merge";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ children, disabled, ...props }, ref) {
    return (
      <button
        {...props}
        className={twJoin(
          "flex h-[42px] w-full items-center justify-center rounded-xl bg-green px-1 text-sm font-medium text-black outline-none md:h-[52px] lg:text-base",
          !disabled && "cursor-pointer hover:bg-yellow",
        )}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
