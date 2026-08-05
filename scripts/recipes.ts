#!/usr/bin/env node

import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

import { exportTranslations } from "./commands/export";
import path from "node:path";
import { generate } from "./commands/generate";
import { normalize } from "./commands/normalize";
import { migrate } from "./commands/migrate";
import { translate } from "./commands/translate";
import { stats } from "./commands/stats";
import { check } from "./commands/check";
import { upgrade } from "./commands/upgrade";
import { syncHashes } from "./commands/sync-hashes";
import { cleanHashes } from "./commands/clean-hashes";

const recipesDir = path.join(process.cwd(), "src/data/recipes");

async function main() {
  const command = process.argv[2];
  const argument = process.argv[3];

  switch (command) {
    case "stats":
      stats(recipesDir);
      break;

    case "check":
      check(recipesDir);
      break;

    case "upgrade":
      upgrade(recipesDir);
      break;

    case "generate":
      if (!argument) {
        console.log("Usage:");
        console.log("npm run recipes generate <language>");
        process.exit(1);
      }

      generate(argument);
      break;

    case "normalize":
      normalize();
      break;

    case "migrate":
      migrate();
      break;

    case "translate":
      if (!argument) {
        console.log("Usage:");
        console.log("npm run recipes translate <language>");
        process.exit(1);
      }

      await translate(argument);
      break;

    case "export":
      if (!argument) {
        console.log("Usage:");
        console.log("npm run recipes export <language>");
        process.exit(1);
      }

      exportTranslations(argument);
      break;

    case "sync-hashes":
      if (!argument) {
        console.log("Usage:");
        console.log("npm run recipes sync-hashes <language>");
        process.exit(1);
      }

      await syncHashes(argument);
      break;

    case "clean-hashes":
      if (!argument) {
        console.log("Usage:");
        console.log("npm run recipes clean-hashes <language>");
        process.exit(1);
      }

      await cleanHashes(argument);
      break;

    default:
      console.log(`
🥗 Healthy Mezze Recipe Toolkit

Commands

npm run recipes stats
npm run recipes check
npm run recipes upgrade
npm run recipes generate <language>
npm run recipes normalize
npm run recipes migrate
npm run recipes translate <language>
npm run recipes export <language>
`);
  }
}

main().catch(console.error);
