import { insertContact } from "@/services/database/repositories/contacts";
import { newContactSchema } from "@/services/database/schema";
import { notifyContact } from "@/services/telegram";

export async function sendContact(formData: FormData) {
  "use server";
  const newContact = await newContactSchema.parseAsync({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
  const contact = await insertContact(newContact);
  await notifyContact(contact);
}
