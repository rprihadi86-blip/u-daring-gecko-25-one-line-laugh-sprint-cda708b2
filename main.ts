// One-Line Laugh Sprint — u-daring-gecko-25-one-line-laugh-sprint-cda708b2
// The whole entry is a single original line about everyday life.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I opened the fridge, forgot why, and stood there like the food owed me an explanation.";

// The gate allows 1–200 characters; fail loudly instead of shipping an invalid line.
// Joke structure: universal setup (blanking in front of the fridge) with the
// twist saved for the last words — the food owes *me* an explanation.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
