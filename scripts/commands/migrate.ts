import { migrations } from "../migrations";

export function migrate() {
  console.log("");
  console.log("🚀 Healthy Mezze Recipe Migration Engine");
  console.log("========================================");
  console.log("");

  if (migrations.length === 0) {
    console.log("No migrations registered.");
    console.log("");
    return;
  }

  for (const migration of migrations) {
    console.log(`▶ ${migration.id}`);
    console.log(`  ${migration.name}`);
    console.log(`  ${migration.description}`);
    console.log("");

    migration.run();
  }

  console.log("========================================");
  console.log("Finished.");
  console.log("");
}
