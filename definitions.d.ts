export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_URL: string;
    }
  }
}
