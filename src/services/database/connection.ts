import { config } from "dotenv";
config({ path: ".env.local" });
import { sql } from "@vercel/postgres";
import { drizzle as drizzleVercel } from "drizzle-orm/vercel-postgres";
import { drizzle as drizzleNode } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

export const db =
  process.env.NODE_ENV === "production"
    ? drizzleVercel(sql, { schema })
    : drizzleNode(new Pool({ connectionString: process.env.POSTGRES_URL }), {
        schema,
      });
