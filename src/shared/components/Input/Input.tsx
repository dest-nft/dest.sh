import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";

interface InputProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  labelText: string;
}

export const Input = forwardRef(function Input(
  { labelText, id, children, rows, ...props }: InputProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  return (
    <>
      <label
        htmlFor={id}
        className="mb-2 block text-start text-base font-medium text-white"
      >
        {labelText}
      </label>
      <textarea
        {...props}
        id={id}
        rows={rows ?? 1}
        className="w-full resize-none rounded-xl border border-borderColor bg-black px-5 py-4 text-base font-medium leading-none text-white outline-none focus:border-green focus:shadow-md"
        ref={ref}
      >
        {children}
      </textarea>
    </>
  );
});
