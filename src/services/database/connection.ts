import { config } from "dotenv";
config({ path: ".env.local" });
import { sql } from "@vercel/postgres";
import { drizzle as drizzleVercel } from "drizzle-orm/vercel-postgres";
import { drizzle as drizzlePostgres } from "drizzle-orm/postgres-js";
import drizzleConfig from "../../../drizzle.config";
import * as schema from "./schema";
import postgres from "postgres";

export const db =
  process.env.NODE_ENV === "production"
    ? drizzleVercel(sql, { schema })
    : drizzlePostgres(postgres(drizzleConfig.dbCredentials.connectionString), {
        schema,
      });
