import { Telegraf } from "telegraf";
import { Contact } from "@/services/database/schema";

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

export async function notifyContact(contact: Contact) {
  const message = `
*ID:* ${contact.id}
*Name:* ${contact.name}
*Email:* ${contact.email}
*Message:*

${contact.message}
  `.trim();

  await bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, message);
}
