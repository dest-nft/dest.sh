import { db } from "@/services/database/connection";
import { Contact, contacts, NewContact } from "@/services/database/schema";

export async function insertContact(newContact: NewContact) {
  const [contact] = await db.insert(contacts).values(newContact).returning();
  return contact as Contact;
}
