import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const contacts = pgTable("contacts", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export type NewContact = typeof contacts.$inferInsert;

export type Contact = typeof contacts.$inferSelect;

export const newContactSchema = createInsertSchema(contacts, {
  name: (schema) => schema.name.min(1, "Name is required"),
  email: (schema) =>
    schema.email.min(1, "E-mail is required").email("Invalid e-mail"),
  message: (schema) => schema.message.min(1, "Message is required"),
});
