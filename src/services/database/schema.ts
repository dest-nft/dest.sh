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
  email: (schema) => schema.email.email(),
});
