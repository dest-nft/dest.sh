import { TextareaHTMLAttributes, forwardRef } from "react";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

interface InputProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  labelText: string;
  error?: string | false;
}

export const Input = forwardRef<HTMLTextAreaElement, InputProps>(function Input(
  { labelText, id, children, rows, error, ...props },
  ref,
) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="mb-2.5 cursor-pointer font-medium leading-4"
      >
        {labelText}
      </label>
      <textarea
        {...props}
        id={id}
        rows={rows ?? 1}
        className="mb-2 rounded-xl border border-borderColor bg-black px-5 py-4 font-clashDisplay font-medium leading-none outline-none focus:border-green focus:shadow-md"
        ref={ref}
      >
        {children}
      </textarea>
      <span
        className={twJoin(
          "flex gap-1.5 text-sm leading-4 text-red",
          !error && "invisible",
        )}
      >
        <Image src="/icons/error.svg" alt="error" width={17} height={17} />
        {error}
      </span>
    </div>
  );
});
