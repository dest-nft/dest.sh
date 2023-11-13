import { Telegraf } from "telegraf";
import { renderToString } from "react-dom/server";
import { Contact } from "@/services/database/schema";

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

export async function notifyContact(contact: Contact) {
  function Message() {
    return (
      <>
        <b>ID:</b> {contact.id}
        <br />
        <b>Name:</b> {contact.name}
        <br />
        <b>Email:</b> {contact.email}
        <br />
        <b>Message:</b>
        <br />
        <br />
        <code>{contact.message}</code>
      </>
    );
  }

  await bot.telegram.sendMessage(
    process.env.TELEGRAM_CHAT_ID,
    renderToString(<Message />),
    { parse_mode: "HTML" },
  );
}
