export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_URL: string;
      TELEGRAM_BOT_TOKEN: string;
      TELEGRAM_CHAT_ID: string;
    }
  }
}
