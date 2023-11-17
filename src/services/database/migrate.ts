import "@/config";
import { migrate as migrateVercel } from "drizzle-orm/vercel-postgres/migrator";
import { migrate as migrateNode } from "drizzle-orm/node-postgres/migrator";
import { db } from "@/services/database/connection";

async function main() {
  console.log("Running migrations...");

  if (process.env.NODE_ENV === "production") {
    await migrateVercel(db, { migrationsFolder: "drizzle/migrations" });
  } else {
    await migrateNode(db, { migrationsFolder: "drizzle/migrations" });
  }

  console.log("Migrations completed successfully!");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
