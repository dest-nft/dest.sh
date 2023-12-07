"use server";
import { Result, fail, success } from "@/shared/utils/result";
import { Maybe } from "@/shared/utils/types";
import { insertContact } from "@/services/database/repositories/contacts";
import { newContactSchema } from "@/services/database/schema";
import { notifyContact } from "@/services/telegram";

export async function sendContact(_result: Maybe<Result>, formData: FormData) {
  const parsedNewContact = newContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsedNewContact.success) {
    return fail(parsedNewContact.error.flatten().fieldErrors);
  }

  const contact = await insertContact(parsedNewContact.data);
  await notifyContact(contact);

  return success();
}
