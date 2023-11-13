import { insertContact } from "@/services/database/repositories/contacts";
import { newContactSchema } from "@/services/database/schema";

export async function sendContact(formData: FormData) {
  "use server";
  const newContact = newContactSchema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
  await insertContact(newContact);
}
