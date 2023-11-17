import "@/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "src/services/database/schema.ts",
  out: "drizzle/migrations",
  driver: "pg",
  dbCredentials: { connectionString: process.env.POSTGRES_URL },
} satisfies Config;
