import { config } from "dotenv";
config({ path: ".env.local" });
import { migrate as migrateVercel } from "drizzle-orm/vercel-postgres/migrator";
import { migrate as migrateNode } from "drizzle-orm/postgres-js/migrator";
import { db } from "@/services/database/connection";
import { VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

async function main() {
  console.log("Running migrations...");

  if (process.env.NODE_ENV === "production") {
    await migrateVercel(db as VercelPgDatabase<typeof schema>, {
      migrationsFolder: "drizzle/migrations",
    });
  } else {
    await migrateNode(db as PostgresJsDatabase<typeof schema>, {
      migrationsFolder: "drizzle/migrations",
    });
  }

  console.log("Migrations completed successfully!");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
