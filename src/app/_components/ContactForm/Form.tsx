"use client";
import { useServerAction } from "@/shared/hooks/use-server-action";
import { isFail, isSuccess } from "@/shared/utils/result";
import { sendContact } from "@/app/_actions/send-contact";
import { Input } from "@/shared/components/Input";
import { SubmittedForm } from "@/app/_components/ContactForm/SubmittedForm";
import { FormButton } from "@/app/_components/ContactForm/FormButton";

export function Form() {
  const [result, action] = useServerAction(sendContact, null);

  if (result !== null && isSuccess(result)) {
    return <SubmittedForm />;
  }

  return (
    <form className="w-full md:max-w-[410px]" action={action}>
      <div className="mb-6">
        <Input
          id="name"
          name="name"
          labelText="Name"
          placeholder="Enter your name"
          error={result !== null && isFail(result) && result.error.name?.at(0)}
        />
      </div>
      <div className="mb-5">
        <Input
          id="email"
          name="email"
          labelText="E-mail"
          placeholder="Enter your e-mail"
          error={result !== null && isFail(result) && result.error.email?.at(0)}
        />
      </div>
      <div className="mb-5">
        <Input
          id="message"
          name="message"
          labelText="Messagge"
          placeholder="Tell us about your project"
          rows={3}
          error={
            result !== null && isFail(result) && result.error.message?.at(0)
          }
        />
      </div>
      <FormButton />
    </form>
  );
}
