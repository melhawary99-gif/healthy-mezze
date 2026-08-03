#!/usr/bin/env node

import path from "node:path";
import { generate } from "./commands/generate";
import { normalize } from "./commands/normalize";
import { migrate } from "./commands/migrate";
import { translate } from "./commands/translate";
import { stats } from "./commands/stats";
import { check } from "./commands/check";
import { upgrade } from "./commands/upgrade";

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

      generate(argument);
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
`);
  }
}

main().catch(console.error);
