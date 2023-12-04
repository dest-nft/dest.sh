"use server";
import { ActionResult, fail, success } from "@/utils/action-result";
import { insertContact } from "@/services/database/repositories/contacts";
import { newContactSchema } from "@/services/database/schema";
import { notifyContact } from "@/services/telegram";

export async function sendContact(_result: ActionResult, formData: FormData) {
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
