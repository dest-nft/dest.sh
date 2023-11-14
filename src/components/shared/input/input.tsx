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
        className="mb-2 block text-base font-medium text-start text-white"
      >
        {labelText}
      </label>
      <textarea
        {...props}
        id={id}
        rows={rows ?? 1}
        className="w-full rounded-xl border leading-none border-borderColor bg-black py-4 px-5 text-base font-medium text-white outline-none focus:border-green focus:shadow-md resize-none"
        ref={ref}
      >
        {children}
      </textarea>
    </>
  );
});
