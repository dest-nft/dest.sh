"use server";
import { Result, fail, success } from "@/shared/utils/result";
import { Option } from "@/shared/utils/option";
import { insertContact } from "@/services/database/repositories/contacts";
import { newContactSchema } from "@/services/database/schema";
import { notifyContact } from "@/services/telegram";

export async function sendContact(_result: Option<Result>, formData: FormData) {
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
